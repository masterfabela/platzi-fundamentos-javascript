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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = sacha.peso - 3;

var dias = 0;
while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarPeso(sacha);
  }
  if (realizaDeporte()) {
    adelgazar(sacha);
  }
  dias++;
}

console.log(`${sacha.nombre} pesa ${sacha.peso.toFixed(2)} kg`);
console.log(`Lo ha conseguido en ${dias} dias`);
