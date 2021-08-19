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

let pvm = "2021/08/18";

function pvmFin(vuosi,kk,pvm){
  return "Paivamaara oikeassa jarjestyksessa on " + pvm + "."  + kk + "." + vuosi;
}


for(let i=0; i<16; i++){
  console.log(i + " " + pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));
} 
/*
Monen
rivin
kommentti
*/