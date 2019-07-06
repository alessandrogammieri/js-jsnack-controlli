/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array */


// Dichiarazione delle variabili
var dispari, n, sms = "L'array è vuoto";

// Array vuoto
dispari = [];

// Richiesta all'utente di inserire un numero per 6 volte
for (var i = 0; i < 6; i++) {
  n = parseInt(prompt("Inserisci il tuo numero"));
  // Se il numero è dispari inserirlo nell'array
  if ((n % 2) != 0) {
    dispari.push(n);
    sms = "I numeri dispari nell'array sono: " + dispari;
  }
}

// Comunicare all'utente quali numeri sono nell'array o se l'array è vuoto
document.getElementById('mio_id').innerHTML = sms;
