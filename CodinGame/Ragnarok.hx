/**
 * This code has been written in Haxe language.
 * I did it to show you how powerfull this language can be.
 * \o/
 * Peekmo.
 */

typedef Pos = {
    var x: Int;
    var y: Int;
}

class Ragnarok
{
    static var EAST = 'E';
    static var NORTH = 'N';
    static var SOUTH = 'S';
    static var WEST = 'W';

    static var l = 40;
    static var h = 18;

    static var hammer: Int;
    static var giants: Array<Pos>;

    static var thor: Pos;
    static var banned : Array<String>;
    static var locations: Array<String>;

    public static function main()
    {
        // init
        var line : Array<String> = new String('{INPUT}').split(' ');
        thor = {x: 0, y: 0};

        thor.x = Std.parseInt(line[0]);
        thor.y = Std.parseInt(line[1]);

        while (true) {
            banned = new Array<String>();
            locations = new Array<String>();
            var giantsString : Array<String> = new String('{INPUT}').split(' ');
            hammer = Std.parseInt(giantsString[0]);

            var iterator : IntIterator = new IntIterator(0, Std.parseInt(giantsString[1]));
            giants = new Array<Pos>();
            var total : Int = 0;
            var lowest : Int = 100;
            var far : Pos = {x: 0, y:0}
            for (i in iterator) {
                var giantString2 : Array<String> = new String('{INPUT}').split(' ');
                var giant = {
                    x: Std.parseInt(giantString2[0]),
                    y: Std.parseInt(giantString2[1])   
                };
                giants.push(giant);

                var giantPos = Reflect.copy(giant);
                if (giantPos.y > thor.y && !has(SOUTH)) locations.push(SOUTH); 
                if (giantPos.y < thor.y && !has(NORTH)) locations.push(NORTH); 
                if (giantPos.x > thor.x && !has(EAST)) locations.push(EAST); 
                if (giantPos.x < thor.x && !has(WEST)) locations.push(WEST); 

                if (giantPos.y > thor.y && giantPos.y - thor.y <= 2) banned.push(SOUTH); 
                if (giantPos.y < thor.y && thor.y - giantPos.y <= 2) banned.push(NORTH); 
                if (giantPos.x > thor.x && giantPos.x - thor.x <= 2) banned.push(EAST); 
                if (giantPos.x < thor.x && thor.x - giantPos.x <= 2) banned.push(WEST); 

                var i: Int = cast(Math.abs(thor.y - giantPos.y) + Math.abs(thor.x - giantPos.x));

                if (i == 2 && Math.abs(thor.y - giantPos.y) == 1) {
                    i = 1;
                }

                if (i > total) {
                    total = i;
                    far = giant;
                }

                if (i < lowest) {
                    lowest = i;
                }
            }

            var giant = far;

            var action: String = '';

            if (giant.y > thor.y && thor.y < h && !isBan(SOUTH)) { action += SOUTH; thor.y++; }
            else if (giant.y < thor.y && thor.y > 0 && !isBan(NORTH)) { action += NORTH; thor.y--; }
            
            if (giant.x > thor.x && thor.x < l && !isBan(EAST)) { action += EAST; thor.x++; }
            else if (giant.x < thor.x && thor.x > 0 && !isBan(WEST)) { action += WEST; thor.x--; }

            var af: String = '';
            if (sameWay() && lowest >= 2) {
                if ((locations[0] == NORTH || locations[1] == NORTH) && thor.y > 0) af += NORTH;
                else if ((locations[0] == SOUTH || locations[1] == SOUTH) && thor.y < h) af += SOUTH;

                if (af == '' && thor.y > 1) af = NORTH;
                if (af == '' && thor.y < h-1) af = SOUTH;

                if ((locations[0] == EAST || locations[1] == EAST) && thor.x < l) af += EAST;
                else if ((locations[0] == WEST || locations[1] == WEST) && thor.x > 0) af += WEST;

                if (af.length == 1 && thor.x < l-1) af += EAST;
                if (af.length == 1 && thor.x > 1) af += WEST;

                if (af != '') action = af;
            }

            if ('' == action) {
                if (lowest == 2) action = 'WAIT';
                else action = 'STRIKE';
            }

            trace(action);
        }
    }

    public static function equals(giant: Pos) : Bool
    {
        return (giant.x == thor.x && giant.y == thor.y);
    }

    public static function isBan(pos: String) : Bool
    {
        for (p in banned.iterator()) {
            if (p == pos) return true;
        }

        return false;
    }

    public static function has(value: String) : Bool
    {
        for (p in locations.iterator()) {
            if (p == value) return true;
        }

        return false;
    }

    public static function sameWay() : Bool
    {
        if (locations.length > 2) return false;
        else {
            var value: String = null;
            for (i in locations.iterator()) {
                if (value == null) value = i;
                else {
                    if ((value == NORTH && i == SOUTH)
                        || (value == SOUTH && i == NORTH)
                        || (value == EAST && i == WEST)
                        || (value == WEST && i == EAST))
                    return false;
                }
            }
        }

        return true;
    }
}