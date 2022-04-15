// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)

let responseMex = document.getElementById('messaggio');
let numeroPr;
listaNum= [];
let somma= 0;


for (let i = 0; i < 5; i++) {
  let numeroPr= parseInt(prompt("scegli un numero!"));
  listaNum.push(numeroPr);

  console.log(numeroPr);
  console.log(listaNum);

  somma += listaNum[i];
  console.log(somma);
}

responseMex.innerHTML =`la somma dei tuoi numeri è ${somma}`;


