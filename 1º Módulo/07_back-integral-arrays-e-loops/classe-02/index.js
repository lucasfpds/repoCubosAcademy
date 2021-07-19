const letras = ["A", "a", "B", "C", "E", "e"];

const letra = ["t","T"]
let qtd = 0
for (i of letras){
  if (i===letra[0] || i===letra[1]){
    qtd +=1}
  }


  if (qtd){
    console.log(`Foram encontradas ${qtd} letras "${letra[0]}" ou "${letra[1]}".`)
  } else {
    console.log(`Nenhuma letra "${letra[0]}" ou "${letra[1]}" foi encontrada.`)
  }