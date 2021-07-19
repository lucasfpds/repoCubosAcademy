const original = [1, 4, 12, 21, 53, 88, 112];

let resultado = []
for (i of original){
  if(i%2===0){
    resultado.push(i)
  }
}

console.log(resultado)