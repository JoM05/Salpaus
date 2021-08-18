function laskutehtava(akaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}

console.log("Täällä olaan!");

let ika = 16; // numerot irjoitetaan ilman lainausmerkkejä
ika = ika + 1; //integer (int)

let ikakirjaimina = "16"; //string (str)
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log("on:Sinun ikai on " );

let juuvaiei = true; //boolean

console.log("Boolean: " + juuvaiei);

let nimi = "Joona Martikainen";

console.log("Kirjoita isolla: " + nimi.toUpperCase());

console.log("Splittausharjoitus: " + nimi.split (" ")[0]);

// whilw ja foe loop:

for(let i=0; i<=10; i++){
  console.log("Loopin interaatioluku on: " + i);
}
if(ika >= 16 || nimi == "Joona Martikainen"){
  console.log("Onnea, et ole alaikäinen.");
}
else if( ika == 16 && nimi == "Keijo"){
  console.log("Onnea Keijo");
}

let pvm = "2021/08/18";
pvmFin(pvm.split("/")[0],...[8],...[18]);
function pvmFin (vuosi, kk, päivä){
  return päivä + "." + kk + "." + vuosi}











/*
Monen
rivin
kommentti
*/