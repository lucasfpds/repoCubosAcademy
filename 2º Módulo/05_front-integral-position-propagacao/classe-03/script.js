const imgs = document.querySelectorAll(' div img');
const imagemModal = document.querySelector('.modal img');
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


modal.addEventListener('click', function(){
    modal.style.display = 'none';
})

linkmodal.addEventListener('click', function(event){
    event.stopPropagation();
})