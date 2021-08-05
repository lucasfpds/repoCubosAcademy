const button1 = document.querySelector('.item1 button')
const imgButton1 = document.querySelector('.item1 img')
const button2 = document.querySelector('.item2 button')
const button3 = document.querySelector('.item3 button')
const lista = document.querySelector('.lateral')
const ul = document.querySelector('ul')
const p = document.querySelector('ul p')
const span = document.querySelector('ul span')

let controle = 1

button1.addEventListener('click', function(event){

    if(controle == 1){
        imgButton1.src = "./classe-01/assets/open-menu.svg"
        controle = 0
    } else {
        imgButton1.src = './classe-01/assets/closed-menu.svg'
        controle = 1
    }

    ul.classList.toggle('ulAberta');
    lista.classList.toggle('aberto');

    p.classList.toggle('escondido');
    span.classList.toggle('escondido');

})


const imgs = document.querySelectorAll(' .container img');
const imagemModal = document.querySelector('.modal>a>img');
const fecharModal = document.querySelector('.modal button');
const modal = document.querySelector('.modal');
const linkmodal = document.querySelector('a')


function abrirModal(src){
    modal.style.display = 'flex';
    imagemModal.src = src;
    linkmodal.href = src;
}


imgs.forEach(function(imagem){
    imagem.addEventListener('click', function(event){
        abrirModal(event.target.src)
    })
})


fecharModal.addEventListener('click', function(){
    modal.style.display = 'none';
})

linkmodal.addEventListener('click', function(event){
    event.stopPropagation();
})
