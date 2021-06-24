const cpf = "12345678900";
const cnpj = "12345678000199";

if(cpf.length !== 11) {
  console.log("CPF Inválido")
  } else {
    let novo = [];  
    
    for(let i of cpf){
      novo.push(i)
    }
      novo.splice(3,0,".");
      novo.splice(7,0,".");
      novo.splice(11,0,"-");

      console.log(novo.join(""))
    }
  
if(cnpj.length !== 14) {
console.log("CNPJ Inválido")
} else {
    let novo = [];  
    
    for(let i of cnpj){
      novo.push(i)
    }
      novo.splice(2,0,".");
      novo.splice(6,0,".");
      novo.splice(10,0,"/");

      console.log(novo.join(""))
    }


/*
if(cpf.length !== 11) {
console.log("CPF Inválido")
} else {
let novo = ""
for(let i = 0; i < cpf.length; i++){
  novo += cpf[i]
  if(i==2 || i==5 ){
    novo+="."
  } else if (i==8){    
    novo+="-"
  }
}
console.log(novo)
}

if(cnpj.length !== 14) {
console.log("CNPJ Inválido")
} else {

let novo = ""

for(let i = 0; i < cnpj.length; i++){
  novo += cnpj[i]
  if(i==1 || i==5){
    novo+="."
  } else if (i==11){    
    novo+="-"
  } else if(i==7){
    novo+="/"
  }
}
console.log(novo)
}