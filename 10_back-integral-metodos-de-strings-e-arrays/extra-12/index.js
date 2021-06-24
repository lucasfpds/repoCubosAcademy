
const nome = 'Guido Cerqueira';

function nick(a){

let arr = []

for(let i of a){
  arr.push(i)
}

arr.splice(0,0,"@");

console.log(arr.join("").toLowerCase().replace(" ",""));
}

nick(nome)