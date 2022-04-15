/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let responseMex = document.getElementById('messaggio');

numInserito = parseInt(prompt("scegli un numero!"));

numCubo = numInserito*numInserito*numInserito;

console.log(numCubo);

responseMex.innerHTML =`il cubo di ${numInserito} è ${numCubo}`;