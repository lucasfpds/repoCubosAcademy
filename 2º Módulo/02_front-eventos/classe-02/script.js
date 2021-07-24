const inputs = document.querySelectorAll('input');


inputs.forEach(input => {
    input.addEventListener('change', function(event){
        const inputAtual = event.target;

        if(inputAtual.value === inputAtual.dataset.resposta){
            inputAtual.classList.add('acerto')
        } else {
            inputAtual.classList.remove('acerto')
        }

    }) 
});