function membre(a,b,c){
	this.id = a;
	this.name = b;
	this.grade = c;
	this.toString = function(){
		document.writeln(`Mon id est : ${this.id} je suis : ${this.name} de grade : ${this.grade} `);
	}
}
function team(){
	this.membre = new Array();
	
}
let prsn1 = new membre(12,"Mouna","genie");
prsn1.toString();