typedef Moto = {
	var x : Int;
	var y : Int;
	@:optional var r : Int;
	@:optional var min : Int;
}

class AprilHard
{
	public static var m : Int;
	public static var v : Int;
	
	public static var roads : Array<Array<Bool>>;

	public static var s : Int;

	public static var motos : Array<Moto>;

	public static function main()
	{
		roads = new Array<Array<Bool>>();
		motos = new Array<Moto>();

		m = Std.parseInt("{INPUT}");
		v = Std.parseInt("{INPUT}");

		for (i in 0...4) {
			getRoad();
		}

		while (true) {
			s = Std.parseInt("{INPUT}");

			getMotos();

			var min : Int = 10000;
			var r : Int = 0;
			for (moto in motos.iterator()) {
				var isGap : Bool = false;
				for (b in (moto.x)...(roads[moto.y].length)) {
					if (roads[moto.y][b]) {
						if (!isGap) {
							isGap = true;
							moto.r = b - moto.x;
						}

						moto.min = moto.min == null ? 1 : moto.min + 1;
					} else if (isGap) {
						break;
					}
				}
			}

			for (moto in motos.iterator()) {
				if (s+moto.x > moto.r) trace("JUMP")
				else if ((moto.r-1)%s == 0 && s > moto.min && s < moto.min * 2) trace("WAIT");
				else if (s > moto.min) trace("SLOW");
				else if (s < moto.min) trace("SPEED");
				else trace("WAIT");
			}
		}
	}

	public static function getRoad()
	{
		var r : String = "{INPUT}";

		var gaps : Array<Bool> = new Array<Bool>();
		for (i in 0...(r.length)) {
			if (r.charAt(i) == '.') gaps.push(false);
			else gaps.push(true);
		}

		roads.push(gaps);
	}

	public static function getMotos()
	{
		for (i in 0...m) {
			var mo : Array<String> = "{INPUT}".split(" ");
			if (mo[2] == "1") {
				motos.push({x : Std.parseInt(mo[0]), y : Std.parseInt(mo[1])});
			}
		}
	}
}