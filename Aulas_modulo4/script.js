

console.log(document.querySelector(".message").textContent)

// Seleciona e manipula elemtos HTML

// document.querySelector(".message").textContent = "Número Correto"

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value= 23;

// lida com eventos click

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function (){
    // document.querySelector('.message').textContent = 'Número correto';

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){ // 0 falsy value
        document.querySelector('.message').textContent = "Nenhum Número"
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Número correto';

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Muito alto!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'Você perdeu o jogo';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess < secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = 'Muito baixo!'
        score--;
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'Você perdeu o jogo';
            document.querySelector('.score').textContent = 0;
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Comece a advinhar...';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})
