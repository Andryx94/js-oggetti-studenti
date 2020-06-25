$(document).ready(
  function() {
    //ESERCIZIO 1
    console.log("--- ESERCIZIO 1 ---");

    //oggetto studente
    var studente = {
      "nome": "Andrea",
      "cognome": "Maschio",
      "eta": 25,
    };

    //ciclo chiavi
    for (var key in studente) {
      console.log(studente[key]);
    };

    // ESERCIZIO 2
    console.log("--- ESERCIZIO 2 ---");

    //ulteriori oggetti studenti
    var studente2 = {
      "nome": "Gioia",
      "cognome": "Castenetto",
      "eta": 20,
    };

    var studente3 = {
      "nome": "Davide",
      "cognome": "Termiti",
      "eta": 24,
    };

    //array di oggetti studenti e ciclo in esso per stampa nome e cognome
    var studenti = [studente, studente2, studente3];
    for (var i = 0; i < studenti.length; i++) {
      console.log(studenti[i].nome, studenti[i].cognome);
    };

    // ESERCIZIO 3
    console.log("--- ESERCIZIO 3 ---");

    //ciclo su lunghezza array e stampa con funzione Handlebars
    for (var j = 0; j < studenti.length; j++) {
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      handlebars(studenti[j].nome, studenti[j].cognome, studenti[j].eta);
    };

    // avvio funzione al click sul bottone
    $("#button").click(function() {
      // prompt richiesta dati utente e stampa con funzione Handlebars
      var nomeUtente = prompt("Dimmi il tuo nome");
      var cognomeUtente = prompt("Dimmi il tuo cognome");
      var etaUtente = parseInt(prompt("Dimmi quanti anni hai"));
      handlebars(nomeUtente, cognomeUtente, etaUtente);
    });
  }
);

//FUNZIONE stampa in codice HTML tramite template Handlebars
function handlebars(nome, cognome, eta){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var context = {
    nome: nome,
    cognome: cognome,
    eta: eta,
  };

  var html = template(context);
  $(".container").append(html);
}
