(function () { "use strict";
var AprilEasy = function() { };
AprilEasy.main = function() {
	AprilEasy.r = Std.parseInt(readline());
	AprilEasy.g = Std.parseInt(readline());
	AprilEasy.l = Std.parseInt(readline());
	while(true) {
		AprilEasy.s = Std.parseInt(readline());
		AprilEasy.x = Std.parseInt(readline());
		var min = AprilEasy.g + 1;
		if(!AprilEasy.jumped) {
			if(AprilEasy.s + AprilEasy.x > AprilEasy.r) {
				print("JUMP");
				AprilEasy.jumped = true;
			} else if((AprilEasy.r - 1) % AprilEasy.s == 0 && AprilEasy.s > min && AprilEasy.s < AprilEasy.g * 2) print("WAIT"); else if(AprilEasy.s > min) print("SLOW"); else if(AprilEasy.s < min) print("SPEED"); else print("WAIT");
		} else print("SLOW");
	}
};
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
AprilEasy.main();
})();
