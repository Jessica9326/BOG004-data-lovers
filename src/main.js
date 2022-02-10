//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import {personajes, filtrarPersonajesEspecie, filtrarPersonajesEstado} from "./data.js"



//Elementos del DOM (documento HTML)

const btnIniciar = document.getElementById("btnNeon");
const inicio = document.getElementById("inicio");
const fEspecie = document.getElementById("species");
const fStatus = document.getElementById("status");

//metodos


   fEspecie.addEventListener("change", (event) => {
    
     console.log (filtrarPersonajesEspecie(fEspecie.value))
    });
    fStatus.addEventListener("change", (event) => {
    
        console.log (filtrarPersonajesEstado(fStatus.value))
       });
   

const ocultarElemento= (id) => {
    const elemento= document.getElementById(id)
    elemento.classList.add("oculto")
}

const mostrarElemento= (id) => {
    const elemento= document.getElementById(id)
    elemento.classList.remove("oculto")
}

const iniciar = () =>{
mostrarElemento("laboratorio")
ocultarElemento("inicio")
}
const inicioPortal =() => {
    mostrarElemento ("laboratorio")
}

//Escuchadores de eventos
btnIniciar.addEventListener("click", iniciar)