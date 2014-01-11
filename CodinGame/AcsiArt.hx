class AcsiArt
{
    public static function printLetter(char: String, lines: Array<String>, H: Int, L: Int, toPrint: Array<String>) : Array<String>
    {
        var y : IntIterator = new IntIterator(0, H);

        var letters : String = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';
        var pos : Int = letters.indexOf(char);
        if (pos == -1) {
            pos = letters.indexOf('?');
        }

        for (i in y) {
            toPrint[i] = if (toPrint[i] == null) lines[i].substr(pos*L, L) else toPrint[i] + lines[i].substr(pos*L, L);
        }

        return toPrint;
    }

    public static function main()
    {
        var L : Int = Std.parseInt('{INPUT}');
        var H : Int = Std.parseInt('{INPUT}');
        var T : String = '{INPUT}';

        var y : IntIterator = new IntIterator(0, H);

        var lines : Array<String> = new Array<String>();
        for (i in y) {
            lines.push('{INPUT}');
        }

        var it : IntIterator = new IntIterator(0, T.length);
        var toPrint : Array<String> = new Array<String>();
        for (i in it) {
            toPrint = printLetter(T.charAt(i).toUpperCase(), lines, H, L, toPrint);
        }

        y = new IntIterator(0, H);
        for (i in y) {
            trace(toPrint[i]);
        }
    }
}