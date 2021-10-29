// 1 red, 2 orange, 3 yellow, 4 green, 5 blue, 6 purple, 7 pink, 
const btn = document.querySelectorAll('.btn');
const btnInicio = document.querySelector('.botao_inicio')
const red = document.querySelector('.red')
const orange = document.querySelector('.orange')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
let coresEscolhidas = [];

let musicGod = ['red', 'red', 'yellow', 'orange', 'orange', 'orange', 
'green',  'yellow', 'yellow', 'yellow', 'blue', 'green', 'orange', 'green',
'yellow', 'orange', 'red'];



document.querySelector('.botao_inicio').addEventListener('click', function(){
   btn.forEach(btn => btn.classList.add('hidden'));
   btnInicio.classList.add('hidden');

//    document.querySelector(`.${musicGod[0]}`).classList.remove('hidden')
   
sequenciaMusica(musicGod);
     
})


// sequenciaMusica();

function sequenciaMusica(event) {
    event.forEach((elem) => 
    
    
        document.querySelector(`.${elem}`).classList.remove('hidden'))
 
   
}
