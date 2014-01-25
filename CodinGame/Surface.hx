typedef Todo = {
    var x: Int;
    var y: Int;
}

class Surface
{
    public static var l : Int;
    public static var h : Int;
    public static var waters: Array<Int>;
    public static var todo: Array<Todo>;

    public static function calc(map: Array<Array<Int>>, x: Int, y: Int, index: Int)
    {
        if (map[x][y] == -2) {
            map[x][y] = index;
            waters[index]++;
            if (x != 0 && map[x-1][y] == -2) todo.push({x: x-1, y: y});
            if (x != (h-1) && map[x+1][y] == -2) todo.push({x: x+1, y: y}); 
            if (y != 0 && map[x][y-1] == -2) todo.push({x: x, y: y-1}); 
            if (y != (l-1) && map[x][y+1] == -2) todo.push({x: x, y: y+1}); 
        }
    }

    public static function main()
    {
        l = 9999;
        h = 9999;
        
        var map: Array<Array<Int>> = new Array<Array<Int>>();
        var yIterator: IntIterator = new IntIterator(0, h);
        waters = new Array<Int>();
        var index : Int = 0;
        for (i in yIterator) {
            map.push([]);
            var line : String = '{INPUT}';
            var iterator : IntIterator = new IntIterator(0, line.length);

            for (v in iterator) {
                map[i].push(-1);
                if (line.charAt(v) == 'O') {
                    map[i][v] = -2;
                }
            }
        }

        var n : Int = 9999;
        var iterator : IntIterator = new IntIterator(0, n);
        for (i in iterator) {
            var line = new String('{INPUT}').split(' ');
            var value : Int = map[Std.parseInt(line[1])][Std.parseInt(line[0])];

            if (-1 != value) {
                if (-2 == value) {
                    todo = new Array<Todo>();
                    todo.push({x: Std.parseInt(line[1]), y: Std.parseInt(line[0])});
                    waters.push(0);
                    
                    for (k in todo.iterator()) {
                        calc(map, k.x, k.y, index);
                    }

                    trace(waters[index]);
                    index++;
                } else {
                    trace(waters[value]);
                }
            } else {
                trace('0');
            }           
        }
    }
}