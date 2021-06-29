
const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]


let novoArr = []

notas.forEach( x => {

  let procurar = novoArr.find(i => x===i)

  if(!procurar){
    novoArr.push(x)
  }
})
    console.log(novoArr)
