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
var Std = function() { }
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
var SuperComputer = function() { }
SuperComputer.main = function() {
	var n = readline();
	var iterator = new IntIterator(0,n);
	var values = new Array();
	while( iterator.hasNext() ) {
		var i = iterator.next();
		var line = new String(readline()).split(" ");
		values.push({ day : Std.parseInt(line[0]), duration : Std.parseInt(line[1])});
	}
	values.sort(function(a,b) {
		return a.day + a.duration - (b.day + b.duration);
	});
	var current = 0;
	var total = 0;
	var $it0 = HxOverrides.iter(values);
	while( $it0.hasNext() ) {
		var calc = $it0.next();
		if(current == 0 || calc.day >= current) {
			total++;
			current = calc.day + calc.duration;
		}
	}
	print(total);
}
SuperComputer.main();
})();
