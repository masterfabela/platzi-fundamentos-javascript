const VARIACION_PESO = 0.2;
const DIAS_AÑO = 365;
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifsic',
  edad: 28,
  peso: 79,
};

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`);

const aumentarPeso = (persona) => (persona.peso += VARIACION_PESO);
const adelgazar = (persona) => (persona.peso -= VARIACION_PESO);

for (var i = 1; i <= DIAS_AÑO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarPeso(sacha);
  } else if (random < 0.5) {
    adelgazar(sacha);
  }
}

console.log(
  `Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} kg`
);
