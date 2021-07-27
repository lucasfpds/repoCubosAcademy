const express = require('express');

const app = express();
app.use(express.json());


const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];


app.get('/livros', (req, res) =>{

    res.json(livros)
})

app.get('/livros/:idLivro', (req, res) =>{
    const id = Number(req.params.idLivro)

    const livro = livros.find((livros) => livros.id === id)

        
    if(id-id !==  0){
        res.json({
            "mensagem": "O valor do parâmetro ID da URL não é um número válido."
          })
    } else if(livro === undefined) {
        res.json({
            "mensagem": "Não existe livro para o ID informado."
          })
        } else {
            res.json(livro)
    }
    
})
// Variável para controle de novo id

let id = 3

app.post('/livros', (req, res) =>{
    
    livros.push({
        id: id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    })

    const livro = livros.find((livros) => livros.id === id)

    res.json(livro)

    id += 1
})


app.put('/livros/:idLivro', (req, res) =>{

    const id = Number(req.params.idLivro)

    const livro = livros.find((livros) => livros.id === id)

    
    if(livro === undefined){
        res.json({
            "mensagem": "Não existe livro a ser substituído para o ID informado."
          })
    }  else {

        const indiceSubs = livros.indexOf(livro)
        
        livros[indiceSubs] ={
                id: livros[indiceSubs].id,
                titulo: req.body.titulo,
                autor: req.body.autor,
                ano: req.body.ano,
                numPaginas: req.body.numPaginas
            }        
        
            res.json({
                "mensagem": "Livro substituído."
              })
     }
})


app.patch('/livros/:idLivro', (req, res) =>{

    const id = Number(req.params.idLivro)

    const livro = livros.find((livros) => livros.id === id)
    
    if(livro === undefined){
        res.json({
            "mensagem": "Não existe livro a ser alterado para o ID informado."
          })
    }  else {
        const indiceSubs = livros.indexOf(livro)
        const titulo = req.body.titulo
        const autor = req.body.autor
        const ano = Number(req.body.ano)    
        const numPaginas = Number(req.body.numPaginas)    

        if( req.body.titulo !== undefined){
            livros[indiceSubs].titulo = titulo     
        }
        if( req.body.autor !== undefined){
            livros[indiceSubs].autor = autor     
        }
        if( req.body.ano !== undefined){
            livros[indiceSubs].ano = ano     
        }
        if( req.body.numPaginas !== undefined){
            livros[indiceSubs].numPaginas = numPaginas     
        }

        res.json({
            "mensagem": "Livro alterado."
          })
    }
})


    app.delete('/livros/:idLivro', (req, res) =>{

        const id = Number(req.params.idLivro)    
        const livro = livros.find((livros) => livros.id === id)        
        const indiceSubs = livros.indexOf(livro)
        
    if(livro === undefined){
        res.json({
            "mensagem": "Não existe livro a ser alterado para o ID informado."
          })
    }  else {
        livros.splice(indiceSubs,1)
        res.json({
            "mensagem": "Livro removido."
          })
    }
})


app.listen(8000)