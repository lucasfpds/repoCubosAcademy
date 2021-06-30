const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];


console.log(numeros.sort());
console.log(numeros.sort((a,b) => a-b));
console.log(numeros.sort((a,b) => b-a));

console.log(frutas.sort((a,b) => a.localeCompare(b)));
console.log(frutas.sort((a,b) => b.localeCompare(a)));
console.log(frutas.sort((a,b) => a.length - b.length));
