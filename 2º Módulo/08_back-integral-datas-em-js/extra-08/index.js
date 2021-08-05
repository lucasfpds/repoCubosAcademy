const {format} = require('date-fns')

function formatacaoDeData (data){
const de = "de "
console.log(format(data,'dd ') + de + format(data,'LLLL ') + de + format(data,'yyyy'))

console.log(format(data,'dd/LL/yyyy '))

console.log(format(data,'dd LLL'))

console.log(format(data,'dd LLL yyyy'))

console.log(format(data,'dd ') + de + format(data,'LLL ') + de + format(data,'yyyy'))

console.log(format(data,'dd/LLL'))
};

//a) 05 de outubro de 2020 b) 05/10/2020 c) 5 out d) 05 out 2020 e) 05 de out de 2020 f) 05/out

formatacaoDeData(new Date(2020,9,5,7,59));