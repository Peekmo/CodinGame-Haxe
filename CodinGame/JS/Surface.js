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
var Surface = function() { }
Surface.calc = function(map,x,y,index) {
	if(map[x][y] == -2) {
		map[x][y] = index;
		Surface.waters[index]++;
		if(x != 0 && map[x - 1][y] == -2) Surface.todo.push({ x : x - 1, y : y});
		if(x != Surface.h - 1 && map[x + 1][y] == -2) Surface.todo.push({ x : x + 1, y : y});
		if(y != 0 && map[x][y - 1] == -2) Surface.todo.push({ x : x, y : y - 1});
		if(y != Surface.l - 1 && map[x][y + 1] == -2) Surface.todo.push({ x : x, y : y + 1});
	}
}
Surface.main = function() {
	Surface.l = readline();
	Surface.h = readline();
	var map = new Array();
	var yIterator = new IntIterator(0,Surface.h);
	Surface.waters = new Array();
	var index = 0;
	while( yIterator.hasNext() ) {
		var i = yIterator.next();
		map.push([]);
		var line = readline();
		var iterator = new IntIterator(0,line.length);
		while( iterator.hasNext() ) {
			var v = iterator.next();
			map[i].push(-1);
			if(line.charAt(v) == "O") map[i][v] = -2;
		}
	}
	var n = readline();
	var iterator = new IntIterator(0,n);
	while( iterator.hasNext() ) {
		var i = iterator.next();
		var line = new String(readline()).split(" ");
		var value = map[Std.parseInt(line[1])][Std.parseInt(line[0])];
		if(-1 != value) {
			if(-2 == value) {
				Surface.todo = new Array();
				Surface.todo.push({ x : Std.parseInt(line[1]), y : Std.parseInt(line[0])});
				Surface.waters.push(0);
				var $it0 = HxOverrides.iter(Surface.todo);
				while( $it0.hasNext() ) {
					var k = $it0.next();
					Surface.calc(map,k.x,k.y,index);
				}
				print(Surface.waters[index]);
				index++;
			} else print(Surface.waters[value]);
		} else print("0");
	}
}
Surface.main();
})();
