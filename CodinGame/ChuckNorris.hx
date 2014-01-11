class ChuckNorris
{
    public static function convert(char: String) : String
    {
        var code : Int = char.charCodeAt(0);
        var bin : String = '';

        var i = 6;
        while (i >= 0) {
            if (code / Math.pow(2, i) >= 1) {
                bin += '1';
                code -= cast(Math.pow(2, i), Int);
            } else {
                bin += '0';
            }

            i--;
        }

        return bin;
    }

    public static function main()
    {
        var string : String = '{INPUT}';
        var full : String = '';

        var bin : String = '';
        var it : IntIterator = new IntIterator(0, string.length);

        for (i in it) {
            bin += convert(string.charAt(i));
        }

        it = new IntIterator(0, bin.length);

        var last : String = '';
        for (i in it) {
            var char : String = bin.charAt(i);
            if (last == '' || char != last) {
                if (last != '') {
                    full += ' ';
                }

                if (char == '1') {
                    full += '0 0';
                } else {
                    full += '00 0';
                }

                last = char;
            } else {
                full += '0';
            }
        }

        trace(full);
    }
}