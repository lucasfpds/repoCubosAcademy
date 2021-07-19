const pi = 3.1415926535897932384626433832795;
const r = 5;
const c = 2*pi*r;
const h = 16;

/*
No slide o cálculo da base Ab = 2piR² está errado, o cálculo para a área da base de um cilindro é Ab=piR², multiplica por 2 somente quando for fazer o calculo da área total já que o cilindo tem 2 bases. Sendo correto At=2*Ab...
*/

const aB = pi*(Math.pow(r,2));

const aL = 2*pi*r*h;

let aT = (2*aB)+aL;

aT = 2*pi*r*(r+h)


console.log(`A área total do cilindro é ${aT.toFixed(1)} cm²`);
