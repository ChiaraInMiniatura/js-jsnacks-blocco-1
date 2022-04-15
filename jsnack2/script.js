// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

primaParola= prompt("inserisci la prima parola");
secParola= prompt("inserisci la seconda parola");

let responseMex = document.getElementById('messaggio');

console.log(primaParola.length);
console.log(secParola.length);

if (primaParola.length > secParola.length) {
  responseMex.innerHTML = `${primaParola} è + lunga di ${secParola}`;  
  } else if (secParola.length > primaParola.length) {
    responseMex.innerHTML = `${secParola} è + lunga di ${primaParola}`; 
  }else{
    responseMex.innerHTML = `${primaParola} ha lo stesso numero di lettere di ${secParola}`;  
  }

