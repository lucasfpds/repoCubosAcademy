

function solucao(joao, andre) {

    
       
    if (joao === andre) {
        console.log("EMPATE")
    } else if ( joao === "PEDRA" && andre === "TESOURA" || joao === "PAPEL" && andre === "PEDRA" || joao ===  "TESOURA" && andre === "PAPEL") {
        console.log("JOAO");
    } else {
        console.log("ANDRE")
    };
    
    
    
    
    
}


function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
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
