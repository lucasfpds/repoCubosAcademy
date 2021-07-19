const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva(prova){
let corretas = 0
for(i = 0; i < prova.questoes.length; i++){
  if (prova.questoes[i].resposta === prova.questoes[i].correta){
  corretas += 1
};
};

console.log(`O aluno(a) João acertou ${corretas} questões e obteve nota ${corretas*2}`)
};

corrigirProva(prova);