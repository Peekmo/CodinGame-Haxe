class Horses
{
    public static function main()
    {
        var n : Int = 9999;
        
        var iterator: IntIterator = new IntIterator(0, n);
        var horses : Array<Int> = new Array<Int>();
        for (i in iterator) {
            // Parse to int
            horses.push(Std.parseInt('{INPUT}'));
        }

        horses.sort(function(a: Int, b: Int) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });

        var lower: Int = -1;
        var last: Int = -1;
        for (value in horses.iterator()) {
            if (last == -1) {
                last = value;
                continue;  
            } 

            if (lower == -1 || (value - last < lower)) {
                lower = value - last;
            }

            last = value;
        }

        trace(lower);
    }
}