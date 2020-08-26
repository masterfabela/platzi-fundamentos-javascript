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

imprimirProfesiones(sacha);

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}

imprimirSiEsMayorDeEdad(sacha);
