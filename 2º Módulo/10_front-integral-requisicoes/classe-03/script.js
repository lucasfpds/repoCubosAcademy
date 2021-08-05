const input = document.querySelector('input');
const nome = document.querySelector('.nome');
const img = document.querySelector('img');
const abilidades = document.querySelector('.abilidades');



input.addEventListener('change', function() {   
    
    const api = fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`);

    api.then(function(retorno){

        if(!retorno.ok){
            nome.textContent = 'Nenhum Pokemon Encontrado'
            img.src = ''
            abilidades.textContent = ''
            return
        }
        
        const promisseRetorno = retorno.json();

        promisseRetorno.then(function(body){
            nome.textContent = body.name
            img.src = body.sprites.front_default
            abilidades.textContent = body.abilities[0].ability.name

        })
   })
})