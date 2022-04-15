/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
let responseMex = document.getElementById('messaggio');

const listaInvitati =["daisy","nick","jordan","tom"];
console.log(listaInvitati);

let nomeUtente= prompt("scrivi il tuo nome");

nomeUtente = nomeUtente.toLowerCase()

console.log(nomeUtente);

let utenteInvitato = false;

for(let i = 0; i < listaInvitati.length; i++){
  
  if (nomeUtente === listaInvitati[i]) {

    utenteInvitato = true;
  }
 
}  

if (utenteInvitato === true) {
  
  responseMex.innerHTML =`${nomeUtente} sei nella lista invitati alla festa di Gatsby!!!!!` ; 
  
}else{
  
  responseMex.innerHTML =`${nomeUtente} non sei nella lista invitati alla festa di Gatsby :(` ; 

}

