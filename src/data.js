// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
//};
import data from './data/rickandmorty/rickandmorty.js';
//import {Chart} from '../node_modules/chart.js/dist/chart.min.js';

export const personajes = data.results; 
 
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

// const graficaEspecie = document.getElementById('myChart');
// const myChart = new Chart(graficaEspecie, {
//     type: 'bar',
//     data: {
//       labels: ["Alien", "Robot", "Humano", "Humanoide", "Mitólogico", "Poppybutthole", "Animal", "Vampiro", "Parásito", "Enfermedad", "Cronenbe"],
//       datasets: [{
//         //label: 'Especies',
//         data: [filtrarPersonajesEspecie("Alien").length, filtrarPersonajesEspecie("Robot").length],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',                  
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//   }]
// },
// options: {
//   scales: {
//       y: {
//           beginAtZero: true
//         }
//       }
//   }
// });
  
