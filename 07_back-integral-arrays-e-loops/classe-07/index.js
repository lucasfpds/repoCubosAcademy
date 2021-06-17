const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let letra = ["A","a"]

const resultado = []

for(i=0; i < nomes.length; i++){

if(letra[0]==nomes[i][0] || letra[1]==nomes[i][0]){
  resultado.push(nomes[i])
}
}

console.log(resultado)