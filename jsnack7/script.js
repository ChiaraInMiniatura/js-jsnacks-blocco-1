/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

let listaPotenze = [];
let numPotenza = 2;
let potenza = 2;
let responseMex = document.getElementById('messaggio');


while (potenza < 1000) {

  potenza = potenza * numPotenza;
  console.log(listaPotenze);
  responseMex.innerHTML =`le potenze di 2 sono ${listaPotenze} `;
  listaPotenze.push(potenza);

  potenza > 1000;
}


