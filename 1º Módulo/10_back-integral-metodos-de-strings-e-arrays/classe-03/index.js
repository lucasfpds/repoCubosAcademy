
const texto = "Aprenda programar do zero na Cubos Academy";


let nova = ""

for(let i of texto){
  nova += i.toLowerCase()
  nova = nova.replace(" ", "-")
  
}
console.log(nova)
