function somme(){
	var i;
	var som = 0;
	for(i=0 ; i<arguments.length ; i++){
		som += arguments[i];
	}
	return som;
}

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;

document.writeln("a = "+a);
document.writeln("b = "+b);
document.writeln("c = "+c);
document.writeln("d = "+d);
document.writeln("e = "+e);
document.writeln("f = "+f);
document.writeln(" ");


document.writeln("Les calculs sont :");
document.writeln("------------------");
document.writeln("La somme de "+a+" et "+b+" = "+somme(a,b));
document.writeln("La somme de "+a+" et "+b+" et "+c+" = "+somme(a,b,c));
document.writeln("La somme de "+a+" et "+b+" et "+c+" et "+d+" = "+somme(a,b,c,d));
document.writeln("La somme de "+a+" et "+b+" et "+c+" et "+d+" et "+e+" = "+somme(a,b));
