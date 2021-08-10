
const body = document.querySelector('body');
const input = document.querySelector('input');
const ul = document.createElement('ul');
body.append(ul);

input.addEventListener('keydown', function(keyPress){
    if(keyPress.key === 'Enter'){

        const li = document.createElement('li');
        const p = document.createElement('p');
        const button = document.createElement('button');

        p.textContent = input.value;
        button.textContent = 'X';

        ul.append(li);
        li.append(p, button);
        console.log(ul);

        button.addEventListener('click', function(){
                li.remove();
        });

        p.addEventListener('click', function(){
            p.classList.add('riscado')
        });      

        input.value = ''
    }
})
