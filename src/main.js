//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import { filtrarPersonajesEspecie, filtrarPersonajesEstado, filtrarPersonajeNombre, ordenarAZ, episodios} from "./data.js"



//Elementos del DOM (documento HTML)

const btnIniciar = document.getElementById("btnNeon");
//const inicio = document.getElementById("inicio");
const fEspecie = document.getElementById("species");
const fStatus = document.getElementById("status");
const fNombreText = document.getElementById("name");
const filtroAZ = document.getElementById("az");

//metodos para ocultar y mostrar pantallas

const ocultarElemento = (id) => {
    const elemento = document.getElementById(id)
    elemento.classList.add("oculto")
}

const mostrarElemento = (id) => {
    const elemento = document.getElementById(id)
    elemento.classList.remove("oculto")
}

const iniciar = () => {
    mostrarElemento("laboratorio")
    ocultarElemento("inicio")
}

//Metodo para filtrar elementos

fEspecie.addEventListener("change", () => {

    pintarTarjetas(filtrarPersonajesEspecie(fEspecie.value))

});
fStatus.addEventListener("change", () => {

    pintarTarjetas(filtrarPersonajesEstado(fStatus.value))
});
fNombreText.addEventListener("keyup", () => {

    pintarTarjetas(filtrarPersonajeNombre(fNombreText.value))
});
filtroAZ.addEventListener("change", () => {

    pintarTarjetas(ordenarAZ(filtroAZ.value))
});


//Funciones para tarjeta de personajes

//Funcion "pintarTarjetas" guarda la data llamada "personajes" en data.js, se utiliza para mostrar los elementos segun las opciones que se filtren
const pintarTarjetas = (personajes) => {
    //se utiliza una funcion para vaciar la pantalla y borrar los personajes filtrados antes
    vaciarPantalla()
    //Se recorre la data
    for (let i = 0; i < personajes.length; i++) {
     // Se guarda en una constante "personaje" el personaje que se este filtrando en el momento
        const personaje = personajes[i]
     // se crea una constante para crear la ficha de como saldra la información en la pagina 
        const ficha = document.createElement("div")
        ficha.className = "ficha";

        //appendChild se utiliza para agregar a la "ficha" un elemento de la data 
        const imgPersonaje = document.createElement("img")
        imgPersonaje.src = personaje.image
        imgPersonaje.className = "imagen"
        ficha.appendChild(imgPersonaje);

        const nombrePersonaje = document.createElement("div")
        nombrePersonaje.className = "nombre parrafo"
        nombrePersonaje.innerHTML = personaje.name
        ficha.appendChild(nombrePersonaje);

        const estadoPersonaje = document.createElement("div")
        estadoPersonaje.className ="estado parrafo"
        estadoPersonaje.innerHTML = personaje.status
        ficha.appendChild(estadoPersonaje)

        const episodios = document.createElement("div")
        episodios.className="episode parrafo"
        episodios.innerHTML = personaje.episode.length
        ficha.appendChild(episodios)

        const especiePersonaje =document.createElement("div")
        especiePersonaje.className="species parrafo"
        especiePersonaje.innerHTML= personaje.species
        ficha.appendChild(especiePersonaje)



        document.getElementById("root").appendChild(ficha)

    }
}
export const vaciarPantalla = () => {
    document.getElementById("root").innerHTML = ""
}

//Escuchadores de evento
btnIniciar.addEventListener("click", iniciar)