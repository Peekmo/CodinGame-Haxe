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
var Ragnarok = function() { }
Ragnarok.main = function() {
	var line = new String(readline()).split(" ");
	Ragnarok.thor = { x : 0, y : 0};
	Ragnarok.thor.x = Std.parseInt(line[0]);
	Ragnarok.thor.y = Std.parseInt(line[1]);
	while(true) {
		Ragnarok.banned = new Array();
		Ragnarok.locations = new Array();
		var giantsString = new String(readline()).split(" ");
		Ragnarok.hammer = Std.parseInt(giantsString[0]);
		var iterator = new IntIterator(0,Std.parseInt(giantsString[1]));
		Ragnarok.giants = new Array();
		var total = 0;
		var lowest = 100;
		var far = { x : 0, y : 0};
		while( iterator.hasNext() ) {
			var i = iterator.next();
			var giantString2 = new String(readline()).split(" ");
			var giant = { x : Std.parseInt(giantString2[0]), y : Std.parseInt(giantString2[1])};
			Ragnarok.giants.push(giant);
			var giantPos = Reflect.copy(giant);
			if(giantPos.y > Ragnarok.thor.y && !Ragnarok.has(Ragnarok.SOUTH)) Ragnarok.locations.push(Ragnarok.SOUTH);
			if(giantPos.y < Ragnarok.thor.y && !Ragnarok.has(Ragnarok.NORTH)) Ragnarok.locations.push(Ragnarok.NORTH);
			if(giantPos.x > Ragnarok.thor.x && !Ragnarok.has(Ragnarok.EAST)) Ragnarok.locations.push(Ragnarok.EAST);
			if(giantPos.x < Ragnarok.thor.x && !Ragnarok.has(Ragnarok.WEST)) Ragnarok.locations.push(Ragnarok.WEST);
			if(giantPos.y > Ragnarok.thor.y && giantPos.y - Ragnarok.thor.y <= 2) Ragnarok.banned.push(Ragnarok.SOUTH);
			if(giantPos.y < Ragnarok.thor.y && Ragnarok.thor.y - giantPos.y <= 2) Ragnarok.banned.push(Ragnarok.NORTH);
			if(giantPos.x > Ragnarok.thor.x && giantPos.x - Ragnarok.thor.x <= 2) Ragnarok.banned.push(Ragnarok.EAST);
			if(giantPos.x < Ragnarok.thor.x && Ragnarok.thor.x - giantPos.x <= 2) Ragnarok.banned.push(Ragnarok.WEST);
			var i1 = Math.abs(Ragnarok.thor.y - giantPos.y) + Math.abs(Ragnarok.thor.x - giantPos.x);
			if(i1 == 2 && Math.abs(Ragnarok.thor.y - giantPos.y) == 1) i1 = 1;
			if(i1 > total) {
				total = i1;
				far = giant;
			}
			if(i1 < lowest) lowest = i1;
		}
		var giant = far;
		var action = "";
		if(giant.y > Ragnarok.thor.y && Ragnarok.thor.y < Ragnarok.h && !Ragnarok.isBan(Ragnarok.SOUTH)) {
			action += Ragnarok.SOUTH;
			Ragnarok.thor.y++;
		} else if(giant.y < Ragnarok.thor.y && Ragnarok.thor.y > 0 && !Ragnarok.isBan(Ragnarok.NORTH)) {
			action += Ragnarok.NORTH;
			Ragnarok.thor.y--;
		}
		if(giant.x > Ragnarok.thor.x && Ragnarok.thor.x < Ragnarok.l && !Ragnarok.isBan(Ragnarok.EAST)) {
			action += Ragnarok.EAST;
			Ragnarok.thor.x++;
		} else if(giant.x < Ragnarok.thor.x && Ragnarok.thor.x > 0 && !Ragnarok.isBan(Ragnarok.WEST)) {
			action += Ragnarok.WEST;
			Ragnarok.thor.x--;
		}
		var af = "";
		if(Ragnarok.sameWay() && lowest >= 2) {
			if((Ragnarok.locations[0] == Ragnarok.NORTH || Ragnarok.locations[1] == Ragnarok.NORTH) && Ragnarok.thor.y > 0) af += Ragnarok.NORTH; else if((Ragnarok.locations[0] == Ragnarok.SOUTH || Ragnarok.locations[1] == Ragnarok.SOUTH) && Ragnarok.thor.y < Ragnarok.h) af += Ragnarok.SOUTH;
			if(af == "" && Ragnarok.thor.y > 1) af = Ragnarok.NORTH;
			if(af == "" && Ragnarok.thor.y < Ragnarok.h - 1) af = Ragnarok.SOUTH;
			if((Ragnarok.locations[0] == Ragnarok.EAST || Ragnarok.locations[1] == Ragnarok.EAST) && Ragnarok.thor.x < Ragnarok.l) af += Ragnarok.EAST; else if((Ragnarok.locations[0] == Ragnarok.WEST || Ragnarok.locations[1] == Ragnarok.WEST) && Ragnarok.thor.x > 0) af += Ragnarok.WEST;
			if(af.length == 1 && Ragnarok.thor.x < Ragnarok.l - 1) af += Ragnarok.EAST;
			if(af.length == 1 && Ragnarok.thor.x > 1) af += Ragnarok.WEST;
			if(af != "") action = af;
		}
		if("" == action) {
			if(lowest == 2) action = "WAIT"; else action = "STRIKE";
		}
		print(action);
	}
}
Ragnarok.equals = function(giant) {
	return giant.x == Ragnarok.thor.x && giant.y == Ragnarok.thor.y;
}
Ragnarok.isBan = function(pos) {
	var $it0 = HxOverrides.iter(Ragnarok.banned);
	while( $it0.hasNext() ) {
		var p = $it0.next();
		if(p == pos) return true;
	}
	return false;
}
Ragnarok.has = function(value) {
	var $it0 = HxOverrides.iter(Ragnarok.locations);
	while( $it0.hasNext() ) {
		var p = $it0.next();
		if(p == value) return true;
	}
	return false;
}
Ragnarok.sameWay = function() {
	if(Ragnarok.locations.length > 2) return false; else {
		var value = null;
		var $it0 = HxOverrides.iter(Ragnarok.locations);
		while( $it0.hasNext() ) {
			var i = $it0.next();
			if(value == null) value = i; else if(value == Ragnarok.NORTH && i == Ragnarok.SOUTH || value == Ragnarok.SOUTH && i == Ragnarok.NORTH || value == Ragnarok.EAST && i == Ragnarok.WEST || value == Ragnarok.WEST && i == Ragnarok.EAST) return false;
		}
	}
	return true;
}
var Reflect = function() { }
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
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
Ragnarok.EAST = "E";
Ragnarok.NORTH = "N";
Ragnarok.SOUTH = "S";
Ragnarok.WEST = "W";
Ragnarok.l = 40;
Ragnarok.h = 18;
Ragnarok.main();
})();
