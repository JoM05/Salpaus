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

function pvmFin( vuosi, kk, pv ){
  if (kk==03 || kk==04 || kk==5){
    return "kevät: " +  pv + "."  + kk + "." + vuosi;
  }
  else if(kk==06 || kk==07 || kk==08){
    return "kesä: " + pv + "."  + kk + "." + vuosi;
  }
  else if(kk==09 || kk==10 || kk==11){
    return "syksy: " + pv + "."  + kk + "." + vuosi;
  }
  else{
    return "talvi: " + pv + "."  + kk + "." + vuosi;
  }
  return "" + pv + "."  + kk + "." + vuosi;
}



for(let i=1; i<16; i++){
  console.log(i+ " " + pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));
} 


//console.log(document.querySelector('#kentta').type);
//console.log(document.querySelector('.lisaaNappi').value);

document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);

  document.querySelector('.ilmoitus').innerHTML = "Kentän sisältö on: <b>" + document.querySelector('#kentta').value + "</b>";
  
  setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
})

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("Toimii!!");

  
 if (document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked> Valmis </li>' ;
}


  else {
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" > Paina </li>' ;
}


if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked> Valmis </li>' ;
}


  else {
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" > Paina </li>' ;
}





});

