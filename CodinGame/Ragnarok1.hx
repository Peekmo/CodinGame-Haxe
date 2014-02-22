/**
 * This code has been written in Haxe language.
 * I did it to show you how powerfull this language can be.
 * \o/
 * Peekmo.
 */

class Ragnarok1
{
    static var l = 40;
    static var h = 18;

    static var lightX : Int;
    static var lightY : Int;
    static var thorX: Int;
    static var thorY: Int;
    static var energy: Int;

    public static function main()
    {
        // init
        var line : Array<String> = new String('{INPUT}').split(' ');
  
        lightX = Std.parseInt(line[0]);
        lightY = Std.parseInt(line[1]);
        thorX = Std.parseInt(line[2]);
        thorY = Std.parseInt(line[3]);

        while (true) {
            energy = 9999;
            var go: String = '';

            if (lightY > thorY && thorY < h) { go += 'S'; thorY++; }
            else if (lightY < thorY && thorY > 0) { go += 'N'; thorY--; }
            
            if (lightX > thorX && thorX < l) { go += 'E'; thorX++; }
            else if (lightX < thorX && thorX > 0) { go += 'W'; thorX--; }

            trace(go);
        }
    }
}