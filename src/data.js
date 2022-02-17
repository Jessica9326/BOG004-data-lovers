// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
//};
import data from './data/rickandmorty/rickandmorty.js';


export const personajes = data.results; 

//  let status = personajes.filter(personaje => personaje.status=="Alive")
 
//  let species= personajes.filter(personaje => personaje.species=="")

//  let name= personajes.filter(personaje => personaje.name=="")

//  let az= personajes.filter(personaje => personaje.name=="")
 
export const filtrarPersonajesEspecie = (criterio) => {
  
   
  return personajes.filter(p => p.species === criterio)
}
export const filtrarPersonajesEstado = (criterio) => {
   
  return personajes.filter(p => p.status === criterio)
}
export const filtrarPersonajeNombre = (criterio) => {

  return personajes.filter(p => p.name.toLowerCase().includes(criterio.toLowerCase()))
}
export const ordenarAZ = (criterio) => {
  if(criterio === "az"){
    return personajes.sort((p, p2 ) => {
      if(p.name<p2.name) return -1;
      else {
        return 1; 
      } 
    })
  } else{
    return personajes.sort((p, p2 ) => {
      if(p.name<p2.name) return 1;
      else {
        return -1; 
      } 
    })
  }
}

export const episodios = (personaje) =>{
 return personaje.episode.length
}










