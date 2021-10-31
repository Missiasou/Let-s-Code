// 1 red, 2 orange, 3 yellow, 4 green, 5 blue, 6 purple, 7 pink, 
const btn = document.querySelectorAll('.btn');
const btnInicio = document.querySelector('.botao_inicio')

let musicGod = ['red', 'red', 'yellow', 'orange', 'orange', 'orange', 
'green',  'yellow', 'yellow', 'yellow', 'blue', 'green', 'orange', 'green',
'yellow', 'orange', 'red'];

let count = 0;
let tocando = musicGod[count];
let tocandoMusica = [];




document.querySelector('.botao_inicio').addEventListener('click', function(){
   btnInicio.classList.add('hidden');
    animarBotao(tocando); 
  
    
})

function animarBotao(tocando) {
    document.getElementById(tocando).classList.add("pressed");

    setTimeout(function () {
        document.getElementById(tocando).classList.remove("pressed");
    }, 200)
}


function playSom(tocando) {
    const audio = new Audio(`sounds/${tocando}.mp3`);

    audio.play();
}

function proximaSequencia() {
    
    let tocar = musicGod[count];
    console.log(tocar)
    console.log(count)
    
    // // criar animação de piscar
    // animarBotao(tocando);
    // // criar som
    // playSom(tocando);
}

document.querySelectorAll('.btn').forEach(btnEl => {
    btnEl.addEventListener('click', function (event) {
        const botaoclicado = event.target.id;
        tocandoMusica.push(botaoclicado);
        // console.log(tocandoMusica);
        animarBotao(botaoclicado);
        playSom(botaoclicado);
        proximaSequencia(musicGod);
        count++;

        // checkar se a resposta está correta
        // checar()

    })
});


