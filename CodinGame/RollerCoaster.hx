class RollerCoaster
{
    public static var l : Int;
    public static var c : Int;
    public static var n : Int;

    public static var current : Int = 0;
    public static var total : Int = 0;
    public static var did : Int = 1;

    public static var wagons : Int = 0;

    public static var done : Bool = false;

    public static function doIt(nb: Int) : Bool
    {
        if (nb+current > l) {
            if (did == c) {
                return false;
            }

            wagons = 0;
            current = 0;
            did = did + 1;
        } else if (wagons == n) {
            if (did == c) {
                return false;
            }

            wagons = 0;
            current = 0;
            did = did + 1;
        }
        
        wagons = wagons + 1;
        total = total + nb;
        current = current + nb;

        return true;
    }

    public static function main()
    {
        var line : Array<String> = '{INPUT}'.split(' ');
        l = Std.parseInt(line[0]);
        c = Std.parseInt(line[1]);
        n = Std.parseInt(line[2]);

        var groups : Array<Int> = new Array<Int>();
        for (i in 0...n) {
            var group : Int = Std.parseInt('{INPUT}');
            groups.push(group);

            if (!doIt(group)) {
                done = true;
                break;
            } 
        }

        while (!done) {
            for (i in groups.iterator()) {
                if (!doIt(i)) {
                    done = true;
                    break;
                }        
            }
        }

        trace(total);
    }
}