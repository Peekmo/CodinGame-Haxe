typedef Calc = {
    var day: Int;
    var duration: Int;
}

class SuperComputer
{
    public static function main()
    {
        var n : Int = 9999;
        
        var iterator: IntIterator = new IntIterator(0, n);
        var values: Array<Calc> = new Array<Calc>();
        for (i in iterator) {
            var line = new String('{INPUT}').split(' ');
            values.push({day: Std.parseInt(line[0]), duration: Std.parseInt(line[1])});
        }

        values.sort(function(a: Calc, b: Calc) {
            return ((a.day + a.duration) - (b.day + b.duration));
        });

        var current: Int = 0;
        var total: Int = 0;
        for (calc in values.iterator()) {
            if (current == 0 || calc.day >= current) {
                total++;
                current = calc.day + calc.duration;
            }
        }

        trace(total);
    }
}