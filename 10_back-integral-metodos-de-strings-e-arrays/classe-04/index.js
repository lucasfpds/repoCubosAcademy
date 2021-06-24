
let  identificador  =  "123" ;
let  nome  =  "José silva costa" ;
let  email  =  "    jose@email.com" ;
let  tags  =  [ 'financeiro' ,  'administrativo' ,  'geral' ] ;

if (identificador.length < 6){
  identificador = identificador.padStart(6,0)
}
console.log(identificador)
let novo = ""
for(let i=0;i<nome.length;i++){
  if(i==0 || nome[i-1] === " "){
    novo += nome[i].toUpperCase()
  } else {
    novo +=nome[i]
  }
}
console.log(novo)
email=email.trim()
console.log(email)
tags = tags.join(", ")
console.log(tags)
