(function () { "use strict";
var AcsiArt = function() { }
AcsiArt.printLetter = function($char,lines,H,L,toPrint) {
	var y = new IntIterator(0,H);
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
	var pos = letters.indexOf($char);
	if(pos == -1) pos = letters.indexOf("?");
	while( y.hasNext() ) {
		var i = y.next();
		toPrint[i] = toPrint[i] == null?HxOverrides.substr(lines[i],pos * L,L):toPrint[i] + HxOverrides.substr(lines[i],pos * L,L);
	}
	return toPrint;
}
AcsiArt.main = function() {
	var L = Std.parseInt(readline());
	var H = Std.parseInt(readline());
	var T = readline();
	var y = new IntIterator(0,H);
	var lines = new Array();
	while( y.hasNext() ) {
		var i = y.next();
		lines.push(readline());
	}
	var it = new IntIterator(0,T.length);
	var toPrint = new Array();
	while( it.hasNext() ) {
		var i = it.next();
		toPrint = AcsiArt.printLetter(T.charAt(i).toUpperCase(),lines,H,L,toPrint);
	}
	y = new IntIterator(0,H);
	while( y.hasNext() ) {
		var i = y.next();
		print(toPrint[i]);
	}
}
var HxOverrides = function() { }
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
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
AcsiArt.main();
})();
