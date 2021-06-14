

function solucao(precos) {
    let menor = precos[0]
let soma = 0
    if (precos.length > 4 ) {
        for (i = 0; i < precos.length; i++) {
            if (precos[i] <= menor){
                menor = precos[i]
            };
            soma += precos[i]
        };
        console.log(soma-menor)
    } else {
        for (i = 0; i < precos.length; i++) {
            soma += precos[i]
        };
        
        console.log(soma)
    };
    
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});