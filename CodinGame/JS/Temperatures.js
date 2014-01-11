(function () { "use strict";
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
var Temperatures = function() { }
Temperatures.main = function() {
	var n = readline();
	var valuesString = readline();
	if(valuesString == null) {
		print("0");
		return;
	}
	var values = valuesString.split(" ");
	var lower = null;
	var iterator = new IntIterator(0,n);
	while( iterator.hasNext() ) {
		var i = iterator.next();
		var value = Std.parseInt(values[i]);
		if(lower == null || Math.abs(value) < Math.abs(lower) || Math.abs(value) == Math.abs(lower) && value > lower) lower = value;
	}
	print(lower);
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
Temperatures.main();
})();
