

function solucao(produtos) {
    
    let top = 0
let total = 0

for (i = 0; i < produtos.length; i++ ){
  total += produtos[i].preco
  if (produtos[i].preco > 10000 ) {
    top += produtos[i].preco
  };
};

let resultado = {
    totalTop: top,
    percentual: (top/total)
}

console.log(resultado)
    
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
