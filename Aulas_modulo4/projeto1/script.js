// 1 red, 2 orange, 3 yellow, 4 green, 5 blue, 6 purple, 7 pink

const mensagemFinal = document.querySelector('.fim');
mensagemFinal.classList.add('hidden');
document.querySelector('p').classList.add('hidden');
const musicaDeus = document.querySelector('.musica1');
const musicaBrilha = document.querySelector('.musica2');
const musicaDoReMi = document.querySelector('.musica3');
const btn = document.querySelectorAll('.btn');
const h3 = document.querySelector('h3');
const recomecar = document.querySelector('.recom');
const regras = document.querySelector('.regra');


let musicGod = ['red', 'red', 'yellow', 'orange', 'orange', 'orange', 
                'green',  'yellow', 'yellow', 'yellow', 'blue', 'green', 'orange', 'green',
                'yellow', 'orange', 'red'];

let letraGod = ['Deus', 'é', 'tão', 'bom', 'Deus', 'é', 'tão', 'bom', 'Deus', 'é', 'tão', 'bom', 'é', 'tão', 'bom', 'pra', 'mim'];

let musicBrilha = ['red', 'red', 'blue', 'blue', 'purple', 'purple', 'blue', 'blue', 'green', 'green', 'yellow',
                    'yellow', 'orange', 'orange', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'orange',
                    'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'orange', 'red', 'red', 'blue', 'blue', 'purple', 'purple', 'blue', 'blue', 'green', 'green', 'yellow',
                    'yellow', 'orange', 'orange', 'red'];

let letraBrilha = ['Bri','Brilha', 'bri','brilha', 'es','estre','estreli','estrelinha','que','quero', 'ver', 'vo','você', 'bri','brilhar',
                    'Lá', 'no', 'al','alto', 'lá', 'no', 'céu', 'Num', 'de','dese','desenho', 'de', 'cor','cordel', 'Bri','Brilha', 'bri','brilha', 'es','estre','estreli','estrelinha','que','quero', 'ver', 'vo','você', 'bri','brilhar' ];

let musicDoReMi = ['red', 'orange', 'yellow', 'green', 'green','green','red', 'orange','red', 'orange','orange','orange','red', 'blue', 'green', 'yellow', 'yellow','yellow',
                    'red', 'orange', 'yellow', 'green', 'green','green'];

let letraDoReMi = ['Do', 'Ré', 'Mi', 'Fá', 'Fá','Fá','Do', 'Ré','Do', 'Ré','Ré','Ré','Do', 'Sol','Fá', 'Mi', 'Mi', 'Mi','Do', 'Ré', 'Mi', 'Fá', 'Fá','Fá' ];

let musica = [];
let count = 0;
let tocando = musica[count];
let tocandoMusica = [];
let letra = [];
let passandoLetra = letra[count];
let playing = true;
let botaoClic = [];
   

// quando clicar em um botao para escolher a música
document.querySelectorAll('.botoes').forEach(El => {
    El.addEventListener('click', function (event) {
        botaoClic = event.target.id;
        musicaDeus.classList.add('hidden');
        musicaBrilha.classList.add('hidden');
        musicaDoReMi.classList.add('hidden');
        h3.classList.add('hidden');
        recomecar.classList.add('hidden');
        regras.classList.add('hidden');
        document.querySelector('p').classList.remove('hidden');
        console.log(botaoClic)
                if(botaoClic === '1'){
                    document.querySelector('p').textContent = `Música: Deus é tão bom`;
                    musica = musicGod;
                    letra = letraGod;
                    contador();
                    animarBotao2(tocando);
                    
                } if(botaoClic === '2'){
                    document.querySelector('p').textContent = `Brilha brilha Estrelinha`;
                    musica = musicBrilha;
                    letra = letraBrilha;
                    contador();
                    animarBotao2(tocando);
                    
                } if(botaoClic === '3'){
                    document.querySelector('p').textContent = `DoRéMi`;
                    musica = musicDoReMi;
                    letra = letraDoReMi;
                    contador();
                    animarBotao2(tocando); 

                } else{
                    return `erro`
                }
                
    })})

    function contador(){
        tocando = musica[count];
        passandoLetra = letra[count];
        
    }
            
        function animarBotao(tocando) {
            if(playing){
                document.getElementById(tocando).classList.add("pressed");
                document.querySelector('p').textContent = `${passandoLetra}`;
                setTimeout(function () {
                    document.getElementById(tocando).classList.remove("pressed");
                }, 300)
            }else{
                return `travado`
            }
            
        };
        
        function animarBotao2(tocando) {
            if(playing){
                document.getElementById(tocando).classList.add("pressed2");
                setTimeout(function () {
                    document.getElementById(tocando).classList.remove("pressed2");
                }, 300)
            }else{
                return `travado`
            }
            
        };
        function playSom(tocando) {
            if(playing){
                const audio = new Audio(`sounds/${tocando}.mp3`);
                audio.play();
            }else{
                return `travado`
            }
            
        }
        
        function proximaSequencia() {
            count++;
            tocando = musica[count];
            passandoLetra = letra[count];
           animarBotao2(tocando);
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
        
      
      // Quando o botão recomeçar for clicado
        document.querySelector('.recom').addEventListener('click', function(){
            musica = [];
            count = 0;
            tocandoMusica = [];
            letra = [];
            botaoClic = [];
            playing=true;
            document.querySelector('p').classList.add('hidden');
            musicaDeus.classList.remove('hidden');
            musicaBrilha.classList.remove('hidden');
            musicaDoReMi.classList.remove('hidden');
            h3.classList.remove('hidden');
            document.querySelector('.boxRegra').classList.add('hidden');
            recomecar.classList.remove('hidden');
            regras.classList.remove('hidden');
        });

          // Quando o botão regras do jogo for clicado
          document.querySelector('.regra').addEventListener('click', function(){
            document.querySelector('.boxRegra').classList.remove('hidden');
            document.querySelector('p').classList.add('hidden');
            recomecar.classList.remove('hidden');
                    
        }); 

        // quando clicar no "X" do botao regras do jogo
        document.querySelector('.fecharbutton').addEventListener('click', function(){
            musica = [];
            count = 0;
            tocandoMusica = [];
            letra = [];
            playing=true;
            botaoClic = [];
            document.querySelector('p').classList.add('hidden');
            musicaDeus.classList.remove('hidden');
            musicaBrilha.classList.remove('hidden');
            musicaDoReMi.classList.remove('hidden');
            h3.classList.remove('hidden');
            document.querySelector('.boxRegra').classList.add('hidden');
            recomecar.classList.remove('hidden');
            regras.classList.remove('hidden');
        });


        function check(tam){
            if(tocandoMusica[tam] === musica[tam]) {
            if(tocandoMusica.length === musica.length){
                if(playing){
                    mensagemFinal.classList.remove('hidden');
                    document.querySelector('.fim').textContent = `Parabéns!!!`;
                    h3.classList.add('hidden');
                setTimeout(function(){
                    document.querySelector('p').classList.add('hidden');
                }, 1000)
                
                setTimeout(function () {
                    recomecar.classList.remove('hidden');
                    regras.classList.remove('hidden');
                    mensagemFinal.classList.add('hidden');
                }, 2000)
                playing = false;
                }else{
                    return `travado`
                }
                
                
            }
            
            } else{  
                playing = false;
                    mensagemFinal.classList.remove('hidden');
                    document.querySelector('.fim').textContent = `Você errou :(,   tente novamente!`
                    h3.classList.add('hidden');
                    document.querySelector('p').classList.add('hidden');
                    setTimeout(function () {
                        recomecar.classList.remove('hidden');
                        regras.classList.remove('hidden');
                        mensagemFinal.classList.add('hidden');
                        
                    }, 2000)
                
        }};