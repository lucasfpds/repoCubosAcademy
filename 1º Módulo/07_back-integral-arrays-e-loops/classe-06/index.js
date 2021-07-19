const numeros = [3, 4, 7, 8, 1, 6, 5, 10];


let resultado = 0
for (i of numeros){
  if(i%2===0){
    resultado += i
  }
}

console.log(resultado)