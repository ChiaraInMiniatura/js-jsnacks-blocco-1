// JSnack 1
//  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

const primoNum = prompt("inserisci il primo numero");
const secNum = prompt("inserisci il secondo numero");

let responseMex = document.getElementById('messaggio');

console.log(primoNum);
console.log(secNum);


if (primoNum > secNum) {
responseMex.innerHTML = `il tuo primo numero: ${primoNum} è maggiore del tuo secondo numero: ${secNum}`;  
} else if (secNum > primoNum) {
  responseMex.innerHTML = `il tuo secondo numero: ${secNum} è maggiore del tuo primo numero: ${primoNum}`; 
}else{
  responseMex.innerHTML = `il tuo primo numero: ${primoNum} è uguale al tuo secondo numero: ${secNum}`;  
}