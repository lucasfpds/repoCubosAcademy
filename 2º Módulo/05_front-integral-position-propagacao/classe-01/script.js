
const botaoVerSenha = document.querySelector('.btnVerSenha');
botaoVerSenha.addEventListener('click', esconder)

const input = document.querySelector('#input2')
let senha = ""
let novoInputValue = ""

const teclas = ['Backspace', 'Enter','Shift','Delete']

input.addEventListener('keyup', function (event){
    if(!teclas.some(a => a === event.key)){
        novoInputValue += "*"    
        input.value = novoInputValue
        senha += event.key
    } else {
        senha = ""
        input.value = senha
        novoInputValue = ""
    }
})


function esconder() {
    document.querySelector('.img1').classList.toggle('esconder')
    document.querySelector('.img2').classList.toggle('esconder')

    if( document.querySelector('.img1').classList.contains("esconder")){
        input.value = novoInputValue        
    } else {
        console.log(senha)
        input.value = senha
    }    
};

