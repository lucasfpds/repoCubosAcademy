
const cpf = "011.022.033-44";

let novo = ""
for(let i=0;i<cpf.length;i++){
  novo+=cpf[i].replace(".","");
  novo = novo.replace("-","")
}
console.log(novo)
