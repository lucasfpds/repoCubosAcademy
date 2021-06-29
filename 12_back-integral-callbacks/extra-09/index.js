

const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]

let novoArr = pessoas.filter(x => {
  if (x.profissao === "Programador" && x.idade > 20){
    return true
  }
})

console.log(novoArr)

novoArr = pessoas.filter(x => {
  if (x.profissao === "Jornalista" && x.idade > 30){
    return true
  }
})

console.log(novoArr)


novoArr = pessoas.filter(x => {
  if (x.profissao === "Programador" && x.idade < 30 || x.profissao === "Jornalista" && x.idade < 30){
    return true
  }
})

console.log(novoArr)



