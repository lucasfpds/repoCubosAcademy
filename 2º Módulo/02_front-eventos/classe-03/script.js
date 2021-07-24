const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal')
const botaoCancelar = document.querySelector('.cancelar')
const botaoConfirmar = document.querySelector('.confirmar')


btn.addEventListener('click',inscrever);

function inscrever (event){
    btn.textContent = 'INSCRITO'
    btn.classList.add('inscrito')

    btn.removeEventListener('click', inscrever);
    btn.addEventListener('click', abrirModal);
    
}

function abrirModal (event){    
    modal.classList.remove('escondido')
}

botaoCancelar.addEventListener('click', function(event){
    modal.classList.add('escondido')
})



botaoConfirmar.addEventListener('click', function(event){
    modal.classList.add('escondido')
    btn.textContent = 'INSCREVER-SE'
    btn.classList.remove('inscrito')
    btn.removeEventListener('click', abrirModal)
    btn.addEventListener('click',inscrever);
})