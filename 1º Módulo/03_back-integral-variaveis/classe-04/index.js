const c = 1000;
const i = 12.5;
const t = 5;
const m = c*(Math.pow(1+(i/100), t));

console.log(`O capital de ${c}R$ acrescido de ${i}% de juros durante ${t} anos é ${Math.round(m)}R$`);