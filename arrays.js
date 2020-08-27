var sacha = {
  nombre: 'Sacha',
  apellido: 'Lipsic',
  altura: 3.56,
};
var lucia = {
  nombre: 'Lucia',
  apellido: 'Echevarria',
  altura: 6.56,
};
var eusebio = {
  nombre: 'Eusebio',
  apellido: 'estaquio',
  altura: 1.4,
};
var paula = {
  nombre: 'Paula',
  apellido: 'Fernandez',
  altura: 1.7,
};

var personas = [sacha, lucia, eusebio, paula];

console.log(personas);

for (var i = 0; i < personas.length; i++) {
  console.log(`${personas[i].nombre} mide ${personas[i].altura} mts`);
}
