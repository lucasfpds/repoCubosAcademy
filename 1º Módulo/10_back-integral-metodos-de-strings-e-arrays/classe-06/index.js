
const  frutas  =  [ 'Banana' ,  'Maçã' ,  'Abacaxi' ,  'Pêra' ,  'Uva' ] ;

let nova = frutas.reverse().join(", ")
console.log(nova)

console.log(frutas)
frutas.reverse().splice(0,1)
frutas.splice(-1,1, "Melão")
console.log(frutas)
