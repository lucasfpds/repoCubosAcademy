const email = "aluno@cubos.academy";
const  email  =  "jose@cubos" ;

console.log(email.includes("@"))
console.log(email.includes("."))
console.log(email[0]===".")
console.log(email[email.length-1]===".")

if(email.includes("@") && email.includes(".") && email[0]!=="." && !email[email.length-1]!=="." ){
  console.log('E-mail válido');
} else {  
  console.log('E-mail inválido');
}