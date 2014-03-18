(function () { "use strict";
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
var RollerCoaster = function() { }
RollerCoaster.main = function() {
	var line = readline().split(" ");
	var l = Std.parseInt(line[0]);
	var c = Std.parseInt(line[1]);
	var n = Std.parseInt(line[2]);
	var groups = new Array();
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		groups.push(Std.parseInt(readline()));
	}
	var tours = new Array();
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		var limit = l;
		var pos = i;
		while(true) {
			if(limit - groups[pos] < 0) break; else limit = limit - groups[pos];
			pos++;
			if(pos == n) pos = 0;
			if(pos == i) break;
		}
		tours.push({ pos : pos, gain : l - limit});
	}
	var total = 0;
	var pos = 0;
	var _g = 0;
	while(_g < c) {
		var i = _g++;
		total = total + tours[pos].gain;
		pos = tours[pos].pos;
	}
	print(total);
}
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
RollerCoaster.main();
})();
