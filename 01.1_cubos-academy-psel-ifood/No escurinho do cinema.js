

function solucao(obj) {
    
    if (obj.temIngresso === false || obj.idade < obj.censura && obj.estaComPais === false){
            console.log("ACESSO NEGADO")
        } else if ( obj.idade < obj.censura && obj.estaComPais === true) {          
            console.log("MEIA")
        } else if (obj.temCarteirinha === true || obj.idade < 18) {
            console.log("MEIA")
        } else {
            console.log("INTEIRA")
        }
}

function processData(input) {
    solucao(JSON.parse(input));
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
