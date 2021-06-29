
const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]



let novoArr = frutas.filter( (x,i) => {
  
  novoArr[i]= `${i} - ${x}`
})

console.log(novoArr)
