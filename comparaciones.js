var x = 4;
var y = '4';

console.log(x == y);
console.log(x === y);

var sacha = {
  nombre: 'Sacha',
};

var otraPersona = {
  ...sacha,
};

console.log(sacha == otraPersona);
console.log(sacha === otraPersona);
