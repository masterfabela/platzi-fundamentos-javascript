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

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

console.log(sacha.nombre);
