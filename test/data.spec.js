//import { example, anotherExample } from '../src/data.js';
import {filtrarPersonajesEspecie, filtrarPersonajesEstado} from '../src/data.js';


describe('filtrosPorEspecie', () => {
  
  it('deberia Retornar un Array', () => {
    expect(Array.isArray(filtrarPersonajesEspecie("Human"))).toBe(true);
  });

  it('deberia Retornar un Array de 7 elementos', () => {
    expect(filtrarPersonajesEspecie("Mytholog").length).toBe(7);
  });

  it('deberia Retornar un Array de 3 elementos', () => {
    expect(filtrarPersonajesEspecie("Vampire").length).toBe(3);
  });
});

 describe('filtrosPorEstado', () => {
  
   it('deberia Retornar un Array', () => {
      expect(Array.isArray(filtrarPersonajesEstado("Alive"))).toBe(true);
    });
  
    it('deberia Retornar un Array de 65 elementos', () => {
      expect(filtrarPersonajesEstado("unknown").length).toBe(65);
   });
  
   it('deberia Retornar un Array de 147 elementos', () => {
    expect(filtrarPersonajesEstado("Dead").length).toBe(147);
   });
});

//describe("personajes.filter(p => p.name.toLowerCase().includes(criterio.toLowerCase()))",() =>{ 
  ///it('debería ser una función', () => {
    //expect(typeof personajes.filter(p => p.name.toLowerCase().includes(criterio.toLowerCase())) ).toBe('function');
 // }); 
 //});


           // it('returns `example`', () => {
          //   expect(example()).toBe('example');
          // });



        // describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
