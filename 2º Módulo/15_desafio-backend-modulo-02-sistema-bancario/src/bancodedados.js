module.exports = {
  "banco": {
    "nome": "Cubos Bank",
    "numero": "123",
    "agencia": "0001",
    "senha": "Cubos123Bank"
  },
  "contas": [
    {
      "numero": "1",
      "saldo": 99300,
      "usuario": {
        "nome": "Fernando",
        "cpf": "46598765214",
        "data": "2021-03-15",
        "telefone": "82985876548",
        "email": "haad@bar.com",
        "senha": "1234"
      }
    },
    {
      "numero": "2",
      "saldo": 9600,
      "usuario": {
        "nome": "Lucas",
        "cpf": "89897553548",
        "data": "2021-03-15",
        "telefone": "71999998888",
        "email": "foo@bar.com",
        "senha": "1234"
      }
    }
  ],
  "saques": [
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta": "1",
      "valor": 300
    },
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta": "1",
      "valor": 400
    },
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta": "2",
      "valor": 400
    }
  ],
  "depositos": [
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta": "1",
      "valor": 60000
    },
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta": "2",
      "valor": 50000
    }
  ],
  "transferencias": [
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta_origem": "1",
      "numero_conta_destino": "2",
      "valor": 50
    },
    {
      "data": "2021-08-10 23:40:35",
      "numero_conta_origem": "2",
      "numero_conta_destino": "1",
      "valor": 40050
    }
  ]
}