const cep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const cidade = document.querySelector('#cidade');
const h1 = document.querySelector('h1')


cep.addEventListener('change', function() {
    if(cep.value.length != 8){
        h1.textContent = "O CEP está incompleto"
        h1.classList.remove('escondido')
        return
    } else {
        document.querySelector('h1').classList.add('escondido')
    }
    const api = fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    api.then(function(retorno){
        const promisseRetorno = retorno.json();

        promisseRetorno.then(function(body){
            rua.value = body.logradouro
            cidade.value = body.localidade
            if(body.erro){
                h1.textContent = "O CEP está incorreto"
                h1.classList.remove('escondido')
                return
            }
        })
    });

    
})