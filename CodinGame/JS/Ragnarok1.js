(function () { "use strict";
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
var Ragnarok1 = function() { }
Ragnarok1.main = function() {
	var line = new String(readline()).split(" ");
	Ragnarok1.lightX = Std.parseInt(line[0]);
	Ragnarok1.lightY = Std.parseInt(line[1]);
	Ragnarok1.thorX = Std.parseInt(line[2]);
	Ragnarok1.thorY = Std.parseInt(line[3]);
	while(true) {
		Ragnarok1.energy = readline();
		var go = "";
		if(Ragnarok1.lightY > Ragnarok1.thorY && Ragnarok1.thorY < Ragnarok1.h) {
			go += "S";
			Ragnarok1.thorY++;
		} else if(Ragnarok1.lightY < Ragnarok1.thorY && Ragnarok1.thorY > 0) {
			go += "N";
			Ragnarok1.thorY--;
		}
		if(Ragnarok1.lightX > Ragnarok1.thorX && Ragnarok1.thorX < Ragnarok1.l) {
			go += "E";
			Ragnarok1.thorX++;
		} else if(Ragnarok1.lightX < Ragnarok1.thorX && Ragnarok1.thorX > 0) {
			go += "W";
			Ragnarok1.thorX--;
		}
		print(go);
	}
}
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Ragnarok1.l = 40;
Ragnarok1.h = 18;
Ragnarok1.main();
})();
