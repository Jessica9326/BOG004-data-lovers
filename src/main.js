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

//Metodo para filtrar elementos

fEspecie.addEventListener("change", (event) => {
    
    pintarTarjetas (filtrarPersonajesEspecie(fEspecie.value))

    });
    fStatus.addEventListener("change", (event) => {
    
    pintarTarjetas (filtrarPersonajesEstado(fStatus.value))
       });


//Funciones para tarjeta de personajes

const pintarTarjetas = (personajes) => {
    vaciarPantalla ()
    for (let i=0; i<personajes.length; i++){
        const personaje = personajes[i]

       const ficha = document.createElement("div")
       ficha.className= "personaje";

       const imgPersonaje = document.createElement ("img")
       imgPersonaje.src = personaje.image
       imgPersonaje.className="imagen"
       ficha.appendChild(imgPersonaje);

       const nombrePersonaje = document.createElement("div")
       nombrePersonaje.className ="nombre"
       nombrePersonaje.innerHTML = personaje.name
       ficha.appendChild(nombrePersonaje);

       document.getElementById("root").appendChild(ficha)
       
    }
}

export const vaciarPantalla = () => {
    document.getElementById("root").innerHTML = ""
}

//Escuchadores de eventos
btnIniciar.addEventListener("click", iniciar)