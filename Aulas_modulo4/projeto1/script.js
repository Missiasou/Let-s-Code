// 1 red, 2 orange, 3 yellow, 4 green, 5 blue, 6 purple, 7 pink, 
const btn = document.querySelectorAll('.btn');
const btnInicio = document.querySelector('.botao_inicio')

let musicGod = ['red', 'red', 'yellow', 'orange', 'orange', 'orange', 
'green',  'yellow', 'yellow', 'yellow', 'blue', 'green', 'orange', 'green',
'yellow', 'orange', 'red'];

let count = 0;
let tocando = [musicGod[count]];

let tocandoMusica = [];




document.querySelector('.botao_inicio').addEventListener('click', function(){
   btnInicio.classList.add('hidden');
    animarBotao2(tocando); 
    
    
})

function animarBotao(tocando) {
    document.getElementById(tocando).classList.add("pressed");

    setTimeout(function () {
        document.getElementById(tocando).classList.remove("pressed");
    }, 300)
}

function animarBotao2(tocando) {
    document.getElementById(tocando).classList.add("pressed2");

    setTimeout(function () {
        document.getElementById(tocando).classList.remove("pressed2");
    }, 300)
}


function playSom(tocando) {
    const audio = new Audio(`sounds/${tocando}.mp3`);
    audio.play();
}

function proximaSequencia() {
    count++;
    tocando = musicGod[count];
   animarBotao2(tocando)

}

document.querySelectorAll('.btn').forEach(btnEl => {
    btnEl.addEventListener('click', function (event) {
        const botaoclicado = event.target.id;
        tocandoMusica.push(botaoclicado);
       
        // console.log(tocandoMusica);
        animarBotao(botaoclicado);
        playSom(botaoclicado);
        setTimeout(function () {
            proximaSequencia();
        }, 200)
        
        
        
        
        // checkar se a resposta está correta
        check(tocandoMusica.length - 1)

    })
});


function check(tam){
    if(tocandoMusica[tam] === musicGod[tam]) {
       if(tocandoMusica.length === musicGod.length){
        document.querySelector('.botao_inicio').textContent = `Parabéns!!!!`
        btnInicio.classList.remove('hidden');
       }
       
    } else{    
        document.querySelector('.botao_inicio').textContent = `Você errou :(   tente novamente`
        btnInicio.classList.remove('hidden'); 
        

}}