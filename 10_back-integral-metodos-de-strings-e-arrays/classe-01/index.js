const comentario = "Esse COVID é muito perigoso!";

let novo = comentario.toLowerCase().split(" ")

if (novo.includes("pandemia") ||novo.includes("covid")){
  console.log('Comentário bloqueado por conter palavras proibidas')
};