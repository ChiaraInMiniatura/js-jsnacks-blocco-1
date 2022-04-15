/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
let listaNum = [];
let numInserito;
let responseMex = document.getElementById('messaggio');

for (let i = 0; i < 6; i++) {

  numInserito = parseInt(prompt("scegli un numero!"));

  if (numInserito % 2 !== 0) {
    listaNum.push(numInserito);
    console.log(listaNum);
  }

}

responseMex.innerHTML =`i numeri dispari da te inseriti sono: ${listaNum}`;