const numeros = [3, 24, 1, 8, 11, 7, 15];

let resultado = 0

for (i of numeros){
  if (i > resultado){
    resultado = i
  }
}
console.log(resultado)