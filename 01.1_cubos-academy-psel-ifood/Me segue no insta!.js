

function solucao(largura, altura) {
    /*Imprima na tela RETRATO caso a altura seja maior que a largura
  Imprima na tela PAISAGEM caso a largura seja maior que a altura
  Imprima na tela QUADRADA caso a largura e altura sejam iguais
  */
      
      if (altura > largura ) {
          console.log("RETRATO")
      } else if (largura > altura ) {
          console.log("PAISAGEM")
      } else {
          console.log("QUADRADA")
      }
    
  }
  
  function processData(input) {
      const x = input.trim().split(" ");
        solucao(parseInt(x[0], 10), parseInt(x[1], 10));
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