const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal')
const botaoCancelar = document.querySelector('.cancelar')
const botaoConfirmar = document.querySelector('.confirmar')

btn.addEventListener('click',inscrever);

function inscrever (event){
    console.log(btn.textContent)
    btn.textContent = 'INSCRITO'
    btn.classList.add('inscrito')

    btn.removeEventListener('click', inscrever);
    btn.addEventListener('click',function (event){
        modal.classList.remove('escondido')

    })

    botaoCancelar.addEventListener('click', function(event){
        console.log('clicou em não')
        modal.classList.add('escondido')
    })

    botaoConfirmar.addEventListener('click', function(event){
        console.log('clicou em sim')
        modal.classList.add('escondido')
        btn.textContent = 'INSCREVER-SE'
        btn.classList.remove('inscrito')
    })
}