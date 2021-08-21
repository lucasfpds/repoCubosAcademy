
const root = document.querySelector('body');
const divPesquisa = document.createElement('div');
divPesquisa.classList.add('pesquisa');
const input = document.createElement('input');
root.append(divPesquisa);
document.querySelector('.pesquisa').appendChild(input);

fetch('https://restcountries.eu/rest/v2/all').then(function(response){
    const promisseResponse = response.json();

    const divPaises = document.createElement('div');
    divPaises.classList.add('paises');
    root.append(divPaises);
    

    promisseResponse.then(function(body){
        
        body.forEach(element => {

            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const spanRegion = document.createElement('span');
            const spanCapital = document.createElement('span');
            const p = document.createElement('p');
            const img = document.createElement('img');

    
            h2.textContent = element.name;
            spanRegion.textContent = element.region;
            spanCapital.textContent = element.capital;
            p.textContent = element.population;
            img.src = element.flag;
    
            divPaises.append(div);
            div.append(h2,spanRegion,spanCapital,p,img);

            
            input.addEventListener('keydown', function(event){
                if(event.key === 'Enter'){
                    if(!(input.value === element.name)){
                        div.remove();
                    };
                };
            });

        });
        
    });
});

    console.log(root)


// input.addEventListener('keydown', function(keyPress){
//     if(keyPress.key === 'Enter'){

//         const li = document.createElement('li');
//         const p = document.createElement('p');
//         const button = document.createElement('button');

//         p.textContent = input.value;
//         button.textContent = 'X';

//         ul.append(li);
//         li.append(p, button);
//         console.log(ul);

//         button.addEventListener('click', function(){
//                 li.remove();
//         });

//         p.addEventListener('click', function(){
//             p.classList.add('riscado')
//         });      

//         input.value = ''
//     }
// })
