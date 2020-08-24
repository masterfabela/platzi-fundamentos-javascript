var edad = 27;
edad += 1;

var peso = 75;

var sandwitch = 1;
peso += sandwitch;

console.log(peso);

var jugarFutbol = 3;

peso -= jugarFutbol;

console.log(peso);

var precioDeVino = 200.3;
console.log(precioDeVino);
var total = (precioDeVino * 100 * 3) / 100;
total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2);
console.log(total);
console.log(totalStr);

var total2 = Number(totalStr);
console.log(total2);

var pizza = 8;
var personas = 2;
var cantidadPorcionesPersona = pizza / personas;
console.log(cantidadPorcionesPersona);
