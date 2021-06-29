
const jogadores = ["Guido", "Dina", "Léo", "Nanda", "Juninho"]

let controle = 0

function imprimirNome(){
  if(controle < jogadores.length){
    console.log(jogadores[controle])
    controle++
  } else {
    console.log('A rodada terminou!')
    clearInterval(contagem)
  }
}

const contagem  = setInterval( imprimirNome,2000)
    