(function () { "use strict";
var Exercice1 = function() { }
Exercice1.can = function(points) {
	var rp = new Array();
	var it = new IntIterator(0,points.length);
	while( it.hasNext() ) {
		var i = it.next();
		if(i != points.length - 1 && points[i].y == points[i + 1].y) {
			rp.push(points[i]);
			rp.push(points[i + 1]);
		}
	}
	return rp;
}
Exercice1.main = function() {
	var n = readline();
	var it = new IntIterator(0,n);
	var points = new Array();
	var xs = new Array();
	while( it.hasNext() ) {
		var i = it.next();
		var line = new String(readline()).split(" ");
		points.push({ x : Std.parseInt(line[0]), y : Std.parseInt(line[1])});
	}
	var cPoints = Exercice1.can(points);
	while(true) {
		var line = new String(readline()).split(" ");
		var coords = { x : Std.parseInt(line[0]), y : Std.parseInt(line[1])};
		var speeds = { x : Std.parseInt(line[2]), y : Std.parseInt(line[3])};
		var fuel = Std.parseInt(line[4]);
		var angle = Std.parseInt(line[5]);
		var power = Std.parseInt(line[6]);
		var r = 0;
		var p = 0;
		var ok = false;
		if(Math.abs(speeds.x) < 30 && coords.x < cPoints[1].x && coords.x > cPoints[0].x) ok = true;
		if(!ok) {
			var dist = coords.x > cPoints[1].x?coords.x - cPoints[1].x:cPoints[0].x - coords.x;
			var f = false;
			if(Math.abs(speeds.x) > 40) r = 40; else if(Math.abs(speeds.x) > 30) r = 30; else if(Math.abs(speeds.x) > 20) r = 20; else {
				f = true;
				if(coords.x > cPoints[1].x) r = 35; else if(coords.x < cPoints[0].x) r = -35;
			}
			if(speeds.x < 0 && !f) r = -r;
			if(speeds.y > -10) p = 1; else if(speeds.y < -21 && speeds.y > -30) p = 2; else p = 4;
		} else {
			if(coords.y - cPoints[0].y < 100) r = 0; else if(speeds.x < 0) r = -10; else if(speeds.x > 0) r = 10;
			if(speeds.y < -5 && speeds.y > -10) p = 1; else if(speeds.y < -11 && speeds.y > -18) p = 2; else if(speeds.y < -19 && speeds.y > -25) p = 3; else if(speeds.y < -26) p = 4;
		}
		print(r + " " + p);
	}
}
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIterator.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
}
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
Exercice1.main();
})();
