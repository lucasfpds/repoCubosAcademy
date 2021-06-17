const numeros = [54, 22, 14, 87, 10, 284];

let num = 1

let ntem = true
for (i of numeros){
  if(i===num){
    ntem = false
    console.log(numeros.indexOf(i))
  } 
}

if (ntem){  
    console.log(numeros.indexOf(num))
}