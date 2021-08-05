const moeda = document.querySelector('select');
const span = document.querySelector('span');


moeda.addEventListener('change', function() {
    if(!moeda.value){
        span.textContent = ''
        return
    }    
    
    const api = fetch(`https://www.mercadobitcoin.net/api/${moeda.value}/ticker/`);

    api.then(function(retorno){
        const promisseRetorno = retorno.json();

        promisseRetorno.then(function(body){
            span.textContent = Number(body.ticker.high).toFixed(2)
        })
   })
})