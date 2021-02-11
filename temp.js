function Umrechnung() {
  var Celbetrag, Kelbetrag, Fahrbetrag,
   CelKel, CelFahr, KelCel, KelFahr, FahrCel, Fahrkel, 
   Celbetrag1, Kelbetrag1, Fahrbetrag1;
  
   Celbetrag1 = document.rechne.cel.value;
  Kelbetrag1 = document.rechne.kel.value;
  Fahrbetrag1 = document.rechne.fahren.value;
  
  Celbetrag= Celbetrag1.replace(/,/g, '.')
  Kelbetrag= Kelbetrag1.replace(/,/g, '.')
  Fahrbetrag= Fahrbetrag1.replace(/,/g, '.')
  /*ersetzt Kommas mit Punkten, damit die Rechnung funktioniert*/
  const num1 = 273.15
  if (Celbetrag != "") {
    CelKel = +Celbetrag + +num1;
    CelFahr = Celbetrag * 1.8 + 32.0;
    document.rechne.kel.value = CelKel;
    document.rechne.fahren.value = CelFahr;
  } /*Umrechnung von C in K/F */
  else if (Kelbetrag != ""){
    KelCel = +Kelbetrag - +num1
    KelFahr = (+Kelbetrag - +num1)*1.8 + 32.00
    document.rechne.cel.value = KelCel;
    document.rechne.fahren.value = KelFahr;
  }/*Umrechnung von K in C/F */
  else if (Fahrbetrag != ""){
    FahrCel = (+Fahrbetrag - 32.00)/1.8
    Fahrkel = (+Fahrbetrag - 32.00)/1.8 + +num1
    document.rechne.cel.value = FahrCel;
    document.rechne.kel.value = Fahrkel;
  }/*Umrechnung von F in K/C */
  }
function kill(){
  document.rechne.kel.value= null;
  document.rechne.fahren.value= null;
  document.rechne.cel.value= null;
}/* Entfernt die Zahlen aus den Feldern, wenn ein Feld angeglickt wird*/

function enterevent(event) {
  var x = event.keyCode;
  if (x == 13) {  // 13 ist der Enter key 
   Umrechnung().call ;
  }
}