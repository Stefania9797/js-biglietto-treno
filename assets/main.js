//chiedere all'utente il numero di chilometri che vuole percorrere 
var distanza = Number(prompt("Quanti chilometri devi percorrere?"));

//se l'utente non inserisce un numero
if(isNaN(distanza)) {
    alert("Inserisci un valore valido!")
}
// chiedere l'età del passeggero.
var età = Number(prompt("Quanti anni hai?"));

//se l'utente non inserisce un numero
if(isNaN(età)) {
    alert("Inserisci un età valida!")
}
//il prezzo del biglietto, con al massimo 2 cifre decimali
var prezzo = Number(distanza * 0.21).toFixed(2);

//sconto età
if (età < 18)  {
    //sconto 20% minorenni
    prezzo = Number(prezzo - (prezzo * .2)).toFixed(2);
  } else if (età > 65) {
      //sconto 40% over 65
    prezzo = Number(prezzo - (prezzo * .4)).toFixed(2);
  }

  var messaggio = document.getElementById("prezzo_finale");
  //messaggio all'utente
messaggio.innerHTML= "Il prezzo del tuo biglietto è " + prezzo + "€";