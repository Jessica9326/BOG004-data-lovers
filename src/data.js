// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
//};
import data from './data/rickandmorty/rickandmorty.js';


export const personajes = data.results; 

 let status = personajes.filter(personaje => personaje.status=="Alive")
 
 let species= personajes.filter(personaje => personaje.species=="")
 

export const filtrarPersonajesEspecie = (criterio) => {
   
  return personajes.filter(p => p.species === criterio)
  
}
export const filtrarPersonajesEstado = (criterio) => {

  return personajes.filter(p => p.status === criterio)
 
}









