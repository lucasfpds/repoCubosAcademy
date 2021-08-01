
const alunos = require('../dados/alunos')


function buscar(req, res){
    res.json(alunos);
}


function buscarAluno(req, res){
    const id = Number(req.params.idAluno);
    const aluno = alunos.find((alunos) => alunos.id === id)

    if(!id){
        res.status(404);
            res.json({
                "mensagem": "O id não é um número."
            })
    } else if(!aluno){
        res.status(400);
            res.json({
                "mensagem": "O id informado não corresponde a nenhum aluno."
            })
        } else {
            res.json(aluno)
        }
}

let pxtimoId = 4;

function adicionar (req, res){
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const curso = req.body.curso;
    const idade = req.body.idade;
    

    if(req.body.id || nome == '' || nome == ' ' || sobrenome == '' || sobrenome == ' '  || curso == '' || curso == ' '  || idade < 18 ){
        res.status(400)
        res.json({
            "mensagem": "Os parametros não foram informados corretamente."
        })
    } else {
        alunos.push({
            id: pxtimoId,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            idade: req.body.idade,
            curso: req.body.curso
        })

        res.status(201)
        res.json(' ')
        pxtimoId += 1
    }
}

    function substituirAluno(req, res){
        const id = Number(req.params.idAluno);
        const aluno = alunos.find((alunos) => alunos.id === id)

        if(!id){
            res.status(404);
            res.json({
                "mensagem": "O id não é um número."
            })
        } else if(!aluno){
            res.status(400);
            res.json({
                "mensagem": "O id informado não corresponde a nenhum aluno."
            })
        } else {
            const indiceSubs = alunos.indexOf(aluno)            
            alunos[indiceSubs] ={
                    id: alunos[indiceSubs].id,
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    idade: req.body.idade,
                    curso: req.body.curso
                }
            res.status(200);                    
            res.json({
                "mensagem": "Aluno substituído."
            })
     }
}


function substituirDado(req, res){
    const id = Number(req.params.idAluno);
    const aluno = alunos.find((alunos) => alunos.id === id)


    if(!id){
        res.status(404);
        res.json({
            "mensagem": "O id não é um número."
        })
    } else if(!aluno){
        res.status(400);
        res.json({
            "mensagem": "O id informado não corresponde a nenhum aluno."
        })
    } else {
        
        const indiceSubs = alunos.indexOf(aluno)
        const nome = req.body.nome
        const sobrenome = req.body.sobrenome
        const idade = Number(req.body.idade)    
        const curso = req.body.curso

        if( req.body.nome !== undefined){
            alunos[indiceSubs].nome = nome     
        }
        if( req.body.sobrenome !== undefined){
            alunos[indiceSubs].sobrenome = sobrenome     
        }
        if( req.body.idade !== undefined){
            alunos[indiceSubs].idade = idade     
        }
        if( req.body.curso !== undefined){
            alunos[indiceSubs].curso = curso     
        }

        res.status(200);
        res.json({
            "mensagem": "Aluno alterado."
          })
    }
}



function deletar(req, res){

    const id = Number(req.params.idAluno);
    const aluno = alunos.find((alunos) => alunos.id === id)

    if(!id){
        res.status(404);
            res.json({
                "mensagem": "O id não é um número."
            })
    } else if(!aluno){
        res.status(400);
            res.json({
                "mensagem": "O id informado não corresponde a nenhum aluno."
            })
        } else {
            res.status(200);
            res.json(aluno)
            const indice = alunos.indexOf(aluno)
            alunos.splice(indice, 1)
        }
}

module.exports = {
    buscar,
    buscarAluno,
    adicionar,
    deletar,
    substituirAluno,
    substituirDado
}
