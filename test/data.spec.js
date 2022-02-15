//import { example, anotherExample } from '../src/data.js';
import {filtrarPersonajesEspecie} from '../src/data.js';


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

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
