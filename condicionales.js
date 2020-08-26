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

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD;

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad });

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('Acceso denegado');
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);

permitirAcceso(juan);
