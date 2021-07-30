const musicas = [
    {
    genero: "Rock",
    musica: "Danzig - Mother "
    },
    {
    genero: "Pop",
    musica: "Michael Jackson - Smooth Criminal Music "
    },
    {
    genero: "MPB",
    musica: "The Girl From Ipanema - Frank Sinatra & Antônio Carlos Jobim "
    },
]

const select = document.querySelector('select');
const input = document.querySelector('input')

encontrarMusica()

function encontrarMusica (){
    const musica = musicas.find((musicas) => musicas.genero === select.value)
    input.value = musica.musica
}

select.addEventListener('change', encontrarMusica);