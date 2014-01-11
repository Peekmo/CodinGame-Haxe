class Temperatures
{
    public static function main()
    {
        var n : Int = 9999;
        var valuesString : String = '{INPUT}';

        if (valuesString == null) {
            trace('0');
            return;
        }

        var values = valuesString.split(' ');

        var lower : Int = null;

        var iterator = new IntIterator(0, n);
        for (i in iterator) {
            var value : Int = Std.parseInt(values[i]);

            if (lower == null 
                || Math.abs(value) < Math.abs(lower) 
                || (Math.abs(value) == Math.abs(lower) && value > lower)) {
                lower = value;
            }
        }

        trace(lower);
    }
}