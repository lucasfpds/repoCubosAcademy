const nomeArquivo = 'Foto da Familia.png';

const tipos = ['jpg', 'jpeg', 'gif', 'png'];

function valida(arquivo){
  const indice = arquivo.indexOf(".")
  if(tipos.includes(arquivo.slice(indice+1))){
    console.log("Arquivo válido")
  } else {
    console.log("Arquivo inválido")
  }
}
valida(nomeArquivo);