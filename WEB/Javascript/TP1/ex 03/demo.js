function ValidationFonction(){
	if(document.getElementById('inpt').value==''){
      document.getElementById('spn').innerHTML ='Le champ ne pas etre vide';
      return false;
	}
	else{
	  document.getElementById('spn').innerHTML = '';
      alert('Le formulaire est envoyer');
      return true;
	}
}