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

// //Funcion "pintarTarjetas" guarda la data llamada "personajes" en data.js, se utiliza para mostrar los elementos segun las opciones que se filtren
// const pintarTarjetas = (personajes) => {
//     //se utiliza una funcion para vaciar la pantalla y borrar los personajes filtrados antes
//     vaciarPantalla()
//     //Se recorre la data
//     for (let i = 0; i < personajes.length; i++) {
//      // Se guarda en una constante "personaje" el personaje que se este filtrando en el momento
//         const personaje = personajes[i]
//      // se crea una constante para crear la ficha de como saldra la información en la pagina 
//         const ficha = document.createElement("div")
//         ficha.className = "ficha";
        

//         //appendChild se utiliza para agregar a la "ficha" un elemento de la data 
//         const imgPersonaje = document.createElement("img")
//         imgPersonaje.src = personaje.image
//         imgPersonaje.className = "imagen"
//         ficha.appendChild(imgPersonaje);

//         const nombrePersonaje = document.createElement("div")
//         nombrePersonaje.className = "nombre parrafo"
//         nombrePersonaje.innerHTML = personaje.name
//         ficha.appendChild(nombrePersonaje);

//         const estadoPersonaje = document.createElement("div")
//         estadoPersonaje.className ="estado parrafo"
//         estadoPersonaje.innerHTML = personaje.status
//         ficha.appendChild(estadoPersonaje)

//         const episodios = document.createElement("div")
//         episodios.className="episode parrafo"
//         episodios.innerHTML = personaje.episode.length
//         ficha.appendChild(episodios)

//         const especiePersonaje =document.createElement("div")
//         especiePersonaje.className="species parrafo"
//         especiePersonaje.innerHTML= personaje.species
//         ficha.appendChild(especiePersonaje)



//         document.getElementById("root").appendChild(ficha)
    
//     }
// }

const pintarTarjetas = (personajes) => {
    //se utiliza una funcion para vaciar la pantalla y borrar los personajes filtrados antes
    vaciarPantalla()
    //Se recorre la data
    for (let i = 0; i < personajes.length; i++) {
     // Se guarda en una constante "personaje" el personaje que se este filtrando en el momento
        const personaje = personajes[i]
     // se crea una constante para crear la ficha de como saldra la información en la pagina 
        const ficha = document.createElement("div")
        ficha.className = "card";

        const face1 = document.createElement("div")
        face1.className = "face face1";
        const contenido1 = document.createElement("div")
        contenido1.className = "content";
        const imgPersonaje = document.createElement("img")
        imgPersonaje.src = personaje.image
        contenido1.appendChild(imgPersonaje);
        face1.appendChild(contenido1)
        ficha.appendChild(face1)

        const face2 = document.createElement("div")
        face2.className = "face face2";
        const contenido2 = document.createElement("div")
        contenido2.className = "content";
        const nombrePersonaje = document.createElement("p")
        nombrePersonaje.innerHTML = "Nombre: " + personaje.name
        const estadoPersonaje = document.createElement("p")
        estadoPersonaje.innerHTML = "Estado: " + personaje.status
        const episodios = document.createElement("p")
        episodios.innerHTML = "Episodios: " + personaje.episode.length
        const especiePersonaje =document.createElement("p")
        especiePersonaje.innerHTML= "Especie: " + personaje.species
        contenido2.appendChild(nombrePersonaje);
        contenido2.appendChild(estadoPersonaje);
        contenido2.appendChild(episodios);
        contenido2.appendChild(especiePersonaje);
        face2.appendChild(contenido2)
        ficha.appendChild(face2)

        

        document.getElementById("root").appendChild(ficha)
    
    }
}


export const vaciarPantalla = () => {
    document.getElementById("root").innerHTML = ""
}

//Escuchadores de evento
btnIniciar.addEventListener("click", iniciar)