class Persona {
  /**
   *
   * @param {string} nombre
   * @param {string} apellido
   * @param {string } edad
   */
  constructor(nombre, apellido, edad) {
    (this.nombre = nombre), (this.apellido = apellido), (this.edad = edad);
  }
}

var sacha = new Persona('Sacha', 'Lipstic', 28);

var dario = {
  nombre: 'Dario',
  apellido: 'Susniki',
  edad: 27,
};

/**
 *
 * @param {Persona} persona
 */
function imprimirNombreEnMayusculas(persona) {
  console.log(persona.nombre.toUpperCase());
}

function imprimirNombreYEdad({ nombre, edad }) {
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreYEdad(sacha);

console.log(sacha.nombre);

function cumpleaños(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}

console.log(sacha);
cumpleaños(sacha);
console.log(sacha);
