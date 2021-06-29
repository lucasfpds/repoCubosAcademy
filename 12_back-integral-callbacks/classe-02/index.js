
const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
]

const cep = 11222333

let novoArr = endereços.find( x => {
  if(x.cep === cep){
    console.log(x.rua)
  }
} )
