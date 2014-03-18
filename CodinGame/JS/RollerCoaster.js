(function () { "use strict";
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var RollerCoaster = function() { }
RollerCoaster.doIt = function(nb) {
	if(nb + RollerCoaster.current > RollerCoaster.l) {
		if(RollerCoaster.did == RollerCoaster.c) return false;
		RollerCoaster.wagons = 0;
		RollerCoaster.current = 0;
		RollerCoaster.did = RollerCoaster.did + 1;
	} else if(RollerCoaster.wagons == RollerCoaster.n) {
		if(RollerCoaster.did == RollerCoaster.c) return false;
		RollerCoaster.wagons = 0;
		RollerCoaster.current = 0;
		RollerCoaster.did = RollerCoaster.did + 1;
	}
	RollerCoaster.wagons = RollerCoaster.wagons + 1;
	RollerCoaster.total = RollerCoaster.total + nb;
	RollerCoaster.current = RollerCoaster.current + nb;
	return true;
}
RollerCoaster.main = function() {
	var line = readline().split(" ");
	RollerCoaster.l = Std.parseInt(line[0]);
	RollerCoaster.c = Std.parseInt(line[1]);
	RollerCoaster.n = Std.parseInt(line[2]);
	var groups = new Array();
	var _g1 = 0, _g = RollerCoaster.n;
	while(_g1 < _g) {
		var i = _g1++;
		var group = Std.parseInt(readline());
		groups.push(group);
		if(!RollerCoaster.doIt(group)) {
			RollerCoaster.done = true;
			break;
		}
	}
	while(!RollerCoaster.done) {
		var $it0 = HxOverrides.iter(groups);
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(!RollerCoaster.doIt(i)) {
				RollerCoaster.done = true;
				break;
			}
		}
	}
	print(RollerCoaster.total);
}
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
RollerCoaster.current = 0;
RollerCoaster.total = 0;
RollerCoaster.did = 1;
RollerCoaster.wagons = 0;
RollerCoaster.done = false;
RollerCoaster.main();
})();
