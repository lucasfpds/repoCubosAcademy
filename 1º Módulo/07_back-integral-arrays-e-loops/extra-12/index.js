const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for(i = 4; i >= 0; i--)
if(filaDeDentro.length < 5){
  filaDeDentro.push(filaDeFora[0])
  filaDeFora.shift()
}

console.log(filaDeDentro)