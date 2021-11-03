// 1 red, 2 orange, 3 yellow, 4 green, 5 blue, 6 purple, 7 pink

const mensagemFinal = document.querySelector('.fim');
mensagemFinal.classList.add('hidden');
const musicaDeus = document.querySelector("#1");
const musicaBrilha = document.querySelector("#2");
const h3 = document.querySelector('h3');
const recomecar = document.querySelector('.recom');
const regras = document.querySelector('.regra')


let musicGod = ['red', 'red', 'yellow', 'orange', 'orange', 'orange', 
'green',  'yellow', 'yellow', 'yellow', 'blue', 'green', 'orange', 'green',
'yellow', 'orange', 'red'];

let musicBrilha = ['red', 'red', 'blue', 'blue', 'purple', 'purple', 'blue', 'blue', 'green', 'green', 'yellow',
'yellow', 'orange', 'orange', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'orange',
'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'orange', 'red', 'red', 'blue', 'blue', 'purple', 'purple', 'blue', 'blue', 'green', 'green', 'yellow',
'yellow', 'orange', 'orange', 'red']

let musica = [];
let count = 0;
let tocando = musica[count];
let tocandoMusica = [];



document.querySelectorAll('.musica').forEach(ele=>{
    ele.addEventListener('click', function(){
        musicaDeus.classList.add('hidden');
        musicaBrilha.classList.add('hidden');
        h3.classList.add('hidden');
        recomecar.classList.add('hidden');
        regras.classList.add('hidden');
        SelecionarMusica(element.id)     
    })
})

function SelecionarMusica(listaId){
    switch (listaId) {
        case 1:
            musica = musicGod;
            break;
        case 2:
            musica = musicBrilha;
            break;
        default:
            break;
    }    
    tocando = musica[count];
    animarBotao2(tocando);   
}


function animarBotao(tocando) {
    document.getElementById(tocando).classList.add("pressed");
    console.log(tocando)
    setTimeout(function () {
        document.getElementById(tocando).classList.remove("pressed");
    }, 300)
}

function animarBotao2(tocando) {
    console.log(count)
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
    tocando = musica[count];
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
    if(tocandoMusica[tam] === musica[tam]) {
       if(tocandoMusica.length === musica.length){
        mensagemFinal.classList.remove('hidden');
        document.querySelector('.fim').textContent = `Parabéns!!!`
        setTimeout(function () {
            recomecar.classList.remove('hidden');
            regras.classList.remove('hidden');
            mensagemFinal.classList.add('hidden');
        }, 2000)
        
       }
       
    } else{    
        mensagemFinal.classList.remove('hidden');
        document.querySelector('.fim').textContent = `Você errou :(,   tente novamente!`
        setTimeout(function () {
            recomecar.classList.remove('hidden');
            regras.classList.remove('hidden');
            mensagemFinal.classList.add('hidden');
            
        }, 2000)
    
}}

document.querySelector('.recom').addEventListener('click', function(){
    musica = [];
    count = 0;
    tocandoMusica = [];
    musicaDeus.classList.remove('hidden');
    musicaBrilha.classList.remove('hidden');
    h3.classList.remove('hidden');

})


