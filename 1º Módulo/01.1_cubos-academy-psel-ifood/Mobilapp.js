

function solucao(tempo, distancia) {
	if (tempo < 05) {
        console.log(600)
    } else if ( tempo <= 60 ) {
        console.log ((tempo*100)+((distancia*100)/2))
    } else if (distancia < 100 ) {
        console.log((distancia*2)*100)        
    } else {
        console.log((distancia*1.5)*100)
    };

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});''