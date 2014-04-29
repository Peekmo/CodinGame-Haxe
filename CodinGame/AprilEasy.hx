class AprilEasy
{
	public static var r : Int;
	public static var g : Int;
	public static var l : Int;

	public static var s : Int;
	public static var x : Int;

	public static var jumped : Bool;

	public static function main()
	{
		r = Std.parseInt("{INPUT}");
		g = Std.parseInt("{INPUT}");
		l = Std.parseInt("{INPUT}");

		while (true) {
			s = Std.parseInt("{INPUT}");
			x = Std.parseInt("{INPUT}");

			var min : Int = g+1;

			if (!jumped) {
				if (s+x > r) { trace("JUMP"); jumped = true; }
				else if ((r-1)%s == 0 && s > min && s < g*2) trace("WAIT");
				else if (s > min) trace("SLOW");
				else if (s < min) trace("SPEED");
				else trace("WAIT");
			} else {
				trace("SLOW");
			}
		}
	}
}