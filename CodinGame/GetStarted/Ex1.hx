class Ex1
{
    public static function main()
    {
        var numString : String = '{INPUT}';
        var numbers : Array<String> = numString.split(' ');

        var s : String = '{INPUT}';

        var wordsString : String = '{INPUT}';
        var words : Array<String> = wordsString.split(' ');

        if (Std.parseInt(numbers[0]) + Std.parseInt(numbers[1]) == s.length) {
            trace(words[0]);
        } else {
            trace(words[1]);
        }
    }
}