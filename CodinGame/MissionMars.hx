/**
 * NOT FULLY FUNCTIONAL
 */

typedef Point = {
    var x: Int;
    var y: Int;
}

typedef Speed = {
    var x: Int;
    var y: Int;
}

class Exercice1
{
    public static function can(points: Array<Point>): Array<Point>
    {
        var rp = new Array<Point>();
        var it = new IntIterator(0, points.length);

        for (i in it) {
            if ((i != points.length -1) && points[i].y == points[i+1].y) {
                rp.push(points[i]);
                rp.push(points[i+1]);
            }
        }

        return rp;
    }

    public static function main()
    {
        // init
        var n = 9999;
        var it : IntIterator = new IntIterator(0, n);
        var points : Array<Point> = new Array<Point>();
        var xs: Array<Int> = new Array<Int>();

        for (i in it) {
            var line : Array<String> = new String('{INPUT}').split(' ');
            points.push({x: Std.parseInt(line[0]), y: Std.parseInt(line[1])});
        }

        var cPoints = can(points);

        while (true) {
            var line : Array<String> = new String('{INPUT}').split(' ');

            var coords : Point = {x: Std.parseInt(line[0]), y: Std.parseInt(line[1])};
            var speeds : Speed = {x: Std.parseInt(line[2]), y: Std.parseInt(line[3])};
            var fuel : Int = Std.parseInt(line[4]);
            var angle: Int = Std.parseInt(line[5]);
            var power: Int = Std.parseInt(line[6]);

            var r : Int = 0;
            var p : Int = 0;
            
            var ok: Bool = false;
            if (Math.abs(speeds.x) < 30 && coords.x < cPoints[1].x && coords.x > cPoints[0].x) ok = true;

            if (!ok) {
                var dist : Int = if (coords.x > cPoints[1].x) coords.x - cPoints[1].x else cPoints[0].x - coords.x;

                var f : Bool = false;

                if (Math.abs(speeds.x) > 40) r = 40;
                else if (Math.abs(speeds.x) > 30) r = 30;
                else if (Math.abs(speeds.x) > 20) r = 20;
                else {
                    f = true;
                    if (coords.x > cPoints[1].x) r = 35;
                    else if (coords.x < cPoints[0].x) r = -35;
                }

                if (speeds.x < 0 && !f) r = -r;

                if (speeds.y > -10) p = 1;
                else if (speeds.y < -21 && speeds.y > -30) p = 2;
                else p = 4;

            } else {
                if (coords.y - cPoints[0].y < 100) r = 0;
                else if (speeds.x < 0) r = -10;
                else if (speeds.x > 0) r = 10;

                if (speeds.y < -5 && speeds.y > -10) p = 1;
                else if (speeds.y < -11 && speeds.y > -18) p = 2;
                else if (speeds.y < -19 && speeds.y > -25) p = 3;
                else if (speeds.y < -26) p = 4;
            }
         
            trace(r + ' ' + p);
        }
    }
}