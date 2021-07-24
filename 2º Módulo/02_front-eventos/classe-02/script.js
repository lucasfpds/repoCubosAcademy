const inputs = document.querySelectorAll('input');


inputs.forEach(input => {
    input.addEventListener('change', function(event){
        const inputAtual = event.target;
        console.log(inputAtual.dataset.resposta)
        console.log(inputAtual.value)

        if(inputAtual.value === inputAtual.dataset.resposta){
            inputAtual.classList.add('acerto')
        } else {
            inputAtual.classList.remove('acerto')
        }

    }) 
});