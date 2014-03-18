typedef Tour = {
    var pos: Int;
    var gain: Int;
}

class RollerCoaster
{
    public static function main()
    {
        var line : Array<String> = '{INPUT}'.split(' ');
        var l : Int = Std.parseInt(line[0]);
        var c : Int = Std.parseInt(line[1]);
        var n : Int = Std.parseInt(line[2]);

        var groups : Array<Int> = new Array<Int>();
        for (i in 0...n) {
            groups.push(Std.parseInt('{INPUT}'));
        }

        var tours : Array<Tour> = new Array<Tour>();
        for (i in 0...n) {
            var limit : Int = l;
            var pos : Int = i;

            while (true) {
                if (limit - groups[pos] < 0) {
                    break;
                } else {
                    limit = limit - groups[pos];
                }

                pos++;

                if (pos == n) {
                    pos = 0;
                }

                if (pos == i) {
                    break;
                }
            }

            tours.push({pos: pos, gain: l - limit});
        }

        var total : Int = 0;
        var pos : Int = 0;
        for (i in 0...c) {
            total = total + tours[pos].gain;
            pos = tours[pos].pos;
        }

        trace(total);
    }
}