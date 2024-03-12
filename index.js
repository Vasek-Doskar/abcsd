const kontejner = document.getElementById("kontejner");
const tlacitko = document.getElementById("BTN");
const OdebratTl = document.getElementById("REM");
let hodnota = 1;

function pridatElement(){
  const myElement = document.createElement('input');
  myElement.type = "text";

  myElement.id = `elem${hodnota}`;

  const myBr= document.createElement('br');
  myBr.id = `elemBr${hodnota}`;

  kontejner.appendChild(myElement);
  kontejner.appendChild(myBr);
  hodnota++;
}

function OdebratElement(){
  if(kontejner.children.length >1)
  {
    let jmeno = `elem${hodnota-1}`;
    let jmenoBr = `elemBr${hodnota-1}`
    const RemElement = document.getElementById(jmeno);
    const RemBr = document.getElementById(jmenoBr);
    kontejner.removeChild(RemElement);
    kontejner.removeChild(RemBr);
    hodnota--;
  }
  else{
    alert("Není co odebrat!");
  }
}

tlacitko.onclick = pridatElement;
OdebratTl.onclick = OdebratElement;



