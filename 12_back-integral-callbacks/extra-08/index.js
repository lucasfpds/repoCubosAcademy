
const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

let novoArr = []

nomes.forEach(x => {
  if(x[0].toLowerCase() === 'a'){
    novoArr.push(x)
  }
})

console.log(novoArr)

