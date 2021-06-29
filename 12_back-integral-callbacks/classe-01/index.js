
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

let novoArr = cidades.filter( x => x.length < 9 )

console.log(novoArr.join(", "))
