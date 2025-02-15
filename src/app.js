import "bootstrap";
import "./style.css";


const excuseElement = document.querySelector("#excuse")
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function fraseAleatoria(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  
}

if (excuseElement) { // Verificamos que el elemento existe antes de manipularlo
  excuseElement.innerText = `${fraseAleatoria(who)} ${fraseAleatoria(action)} ${fraseAleatoria(what)} ${fraseAleatoria(when)}.`;
  console.log(excuseElement.innerText);
} else {
  console.error("No se encontró el elemento con ID 'excuse'.");
}
