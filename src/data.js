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
 console.log(species)

 let gender = personajes.filter(personaje => personaje.gender=="Male")
 console.log(gender)










