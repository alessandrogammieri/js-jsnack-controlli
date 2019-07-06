/* In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */


// Dichiarazione delle variabili
var list, nome, elenco;

// Elenco dei nomi invitati alla festa del grande Gatsby
list = ["Luca", "Marco", "Nino", "Sergio"];

// L'utente inserisce il suo nome per verificare
for (var i = 0; i < 1; i++) {
  nome = prompt("Inserisci qui il tuo nome");
  if (parseInt(nome)) {
    alert('Non puoi inserire un numero');
  }
}

// Controlliamo se l'utente è presente
elenco = list.includes(nome);

// Comunichiamo all'utente se è invitato o meno
if (elenco == true) {
  document.getElementById('mio_id').innerHTML = nome + " sei invitato alla festa!";
} else if (nome == parseInt(nome)) {
  document.getElementById('mio_id').innerHTML = "La richiesta è errata. Ricarica la pagina";
} else {
  document.getElementById('mio_id').innerHTML = nome + " mi dispiace non sei invitato!";
}
