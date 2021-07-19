const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function deposito(valor){
      this.saldo += valor;
      this.historicos.push(
        {
    tipo: "Depósito",
    valor: valor
      })
      return(`Deposito de R$${valor/100} realizado para o cliente: ${this.nome}`)
    },
    sacar: function saque(valor){
      if(valor <= this.saldo){
      this.saldo -= valor;
      this.historicos.push(
        {
    tipo: "Saque",
    valor: valor
      })
      return `Saque de R$${valor/100} realizado para o cliente: ${this.nome}`
    } else {
      console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
    }
    },
    extrato: function retirarExtrato(){      
      console.log( `Extrato de ${this.nome} - Saldo: R$${this.saldo}
Histórico: `)
      for (item of contaBancaria.historicos){
  console.log(item)
};
    }
    
}
   
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
   
