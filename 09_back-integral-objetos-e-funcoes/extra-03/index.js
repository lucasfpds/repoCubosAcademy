const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumoDoCarrinho: function imprimirResumo (carrinho){
  
      let soma = 0
      let somaTotal = 0


      for(let item of this.produtos){
        soma += item.qtd
        somaTotal += item.precoUnit*item.qtd
      }
        console.log(`
        Cliente: ${this.nomeDoCliente}
        Total de itens: ${soma} itens
        Total a pagar: R$ ${somaTotal/100},00
        `)
    }
}

carrinho.imprimirResumoDoCarrinho()



function addProdutoAoCarrinho(carrinho, produto){
  for (item of carrinho.produtos){
    if (item.id == produto.id){
    item.qtd += produto.qtd
    } else {
    console.log(carrinho.produtos)
    carrinho.produtos.push(produto)
    break
    }
  }
};

console.log(carrinho.produtos)

const novaBermuda = {
            id: 2,
            nome: "Bermuda",
            qtd: 3,
            precoUnit: 5000
        };

addProdutoAoCarrinho(carrinho, novaBermuda);

carrinho.imprimirResumoDoCarrinho();



const novoTenis = {
            id: 3,
            nome: "Tenis",
            qtd: 1,
            precoUnit: 10000
        }
addProdutoAoCarrinho(carrinho, novoTenis);


carrinho.imprimirResumoDoCarrinho();
