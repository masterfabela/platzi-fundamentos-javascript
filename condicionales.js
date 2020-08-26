const MAYORIA_EDAD = 18;
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifstic',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false,
};

var juan = {
  nombre: 'Juan',
  edad: 12,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.cantante) {
    console.log('Cantante');
  }
  if (persona.dj) {
    console.log('dj');
  }
  if (persona.guitarrista) {
    console.log('guitarrista');
  }
  if (persona.drone) {
    console.log('piloto de drones');
  }
}

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);
