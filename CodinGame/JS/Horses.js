(function () { "use strict";
var Horses = function() { }
Horses.main = function() {
	var n = readline();
	var iterator = new IntIterator(0,n);
	var horses = new Array();
	while( iterator.hasNext() ) {
		var i = iterator.next();
		horses.push(Std.parseInt(readline()));
	}
	horses.sort(function(a,b) {
		if(a < b) return -1;
		if(a > b) return 1;
		return 0;
	});
	var lower = -1;
	var last = -1;
	var $it0 = HxOverrides.iter(horses);
	while( $it0.hasNext() ) {
		var value = $it0.next();
		if(last == -1) {
			last = value;
			continue;
		}
		if(lower == -1 || value - last < lower) lower = value - last;
		last = value;
	}
	print(lower);
}
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
Horses.main();
})();
