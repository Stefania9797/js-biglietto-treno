//chiedere all'utente il numero di chilometri che vuole percorrere 
var distanza = parseInt(prompt("Quanti chilometri devi percorrere?"));

//se l'utente non inserisce un numero
if(isNaN(distanza)) {
    alert("Inserisci un valore valido!")
}
// chiedere l'età del passeggero.
var età = parseInt(prompt("Quanti anni hai?"));

//se l'utente non inserisce un numero
if(isNaN(età)) {
    alert("Inserisci un età valida!")
}
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = distanza * 0.21;

//sconto età
if (età < 18)  {
    //sconto 20% minorenni
    prezzo = prezzo - (prezzo * .2);
  } else if (età > 65) {
      //sconto 40% over 65
    prezzo = prezzo - (prezzo * .4);
  }

  var messaggio = document.getElementById("prezzo_finale");
  //messaggio all'utente
messaggio.innerHTML= "Il prezzo del tuo biglietto è " + prezzo + "€";
console.log(prezzo);