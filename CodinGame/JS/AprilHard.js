(function () { "use strict";
var AprilHard = function() { };
AprilHard.main = function() {
	AprilHard.roads = new Array();
	AprilHard.motos = new Array();
	AprilHard.m = Std.parseInt(readline());
	AprilHard.v = Std.parseInt(readline());
	var _g = 0;
	while(_g < 4) {
		var i = _g++;
		AprilHard.getRoad();
	}
	while(true) {
		AprilHard.s = Std.parseInt(readline());
		AprilHard.getMotos();
		var min = 10000;
		var r = 0;
		var $it0 = HxOverrides.iter(AprilHard.motos);
		while( $it0.hasNext() ) {
			var moto = $it0.next();
			var isGap = false;
			var _g1 = moto.x;
			var _g2 = AprilHard.roads[moto.y].length;
			while(_g1 < _g2) {
				var b = _g1++;
				if(AprilHard.roads[moto.y][b]) {
					if(!isGap) {
						isGap = true;
						moto.r = b - moto.x;
					}
					if(moto.min == null) moto.min = 1; else moto.min = moto.min + 1;
				} else if(isGap) break;
			}
		}
		var $it1 = HxOverrides.iter(AprilHard.motos);
		while( $it1.hasNext() ) {
			var moto1 = $it1.next();
			if(AprilHard.s + moto1.x > moto1.r) print("JUMP"); else if((moto1.r - 1) % AprilHard.s == 0 && AprilHard.s > moto1.min && AprilHard.s < moto1.min * 2) print("WAIT"); else if(AprilHard.s > moto1.min) print("SLOW"); else if(AprilHard.s < moto1.min) print("SPEED"); else print("WAIT");
		}
	}
};
AprilHard.getRoad = function() {
	var r = readline();
	var gaps = new Array();
	var _g1 = 0;
	var _g = r.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(r.charAt(i) == ".") gaps.push(false); else gaps.push(true);
	}
	AprilHard.roads.push(gaps);
};
AprilHard.getMotos = function() {
	var _g1 = 0;
	var _g = AprilHard.m;
	while(_g1 < _g) {
		var i = _g1++;
		var mo = readline().split(" ");
		if(mo[2] == "1") AprilHard.motos.push({ x : Std.parseInt(mo[0]), y : Std.parseInt(mo[1])});
	}
};
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
AprilHard.main();
})();
