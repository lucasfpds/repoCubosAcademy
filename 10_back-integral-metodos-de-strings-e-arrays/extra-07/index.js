
const celular = 99918888;

let novo = "";
novo += celular
let arr = []

for(let i=0;i<novo.length;i++){
  arr.push(novo[i])
}
if(arr.length>8){
  
  arr.splice(0,0,"(");
  arr.splice(3,0,")");
  arr.splice(4,0,"9");
  arr.splice(4,0," ");
  arr.splice(6,0," ");
  arr.splice(-4,0,"-");

  console.log(arr.join(""))
} else {
  arr.splice(0,0,"9");
  arr.splice(1,0," ");
  arr.splice(-4,0,"-");
  console.log(arr.join(""))
}
