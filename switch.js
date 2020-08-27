var signo = prompt('Cual es tu signo');
console.log(signo);

switch (signo) {
  case 'piscis':
    console.log('Eres piscis');
    break;
  case 'cancer':
    console.log('Eres cancer');
    break;
  case 'acuario':
    console.log('Eres acuario');
    break;
  case 'libra':
    console.log('Eres libra');
    break;
  default:
    console.log('Eres default');
}
