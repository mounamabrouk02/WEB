function VerifierNum(){
  
let ValEntrerV = ValEntrer.value;
let pattern = /^\d+$/;
if(pattern.test(ValEntrerV)){
numberTry++;
ValEntrerV = parseInt(ValEntrerV);
if(ValEntrerV>ValueChercher){
document.getElementById('resultat').innerHTML = "Le numero cherche est plus petit";
ValEntrer.value = '';
ValEntrer.focus();
}
else if (ValEntrerV<ValueChercher){
document.getElementById('resultat').innerHTML = "Le numero cherche est plus grand";
ValEntrer.value = "";
ValEntrer.focus();	
}else {
document.getElementById('resultat').innerHTML = "Vous avez trouvez le nombre apres "+numberTry+"essaie";
}
 }else{
 	document.getElementById('resultat').innerHTML = "la valeur entree doit etre un numero";
    ValEntrer.value = '';
    ValEntrer.focus();
 }
  return false;

}
let numberTry = 0;
let ValueMax =1024;
let ValueChercher = Math.floor((Math.random()*ValueMax)+1);
let ValEntrer = document.getElementById('ValEntrer');
if(ValueChercher > ValueMax) {
  ValueChercher = ValueMax;
}
document.getElementById('ValueMax').innerHTML = ValueMax;
ValEntrer.value = '';
ValEntrer.focus();

