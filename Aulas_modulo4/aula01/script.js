let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){ // falsy value - se não for um número
        document.querySelector('.message').textContent = "Insira um número correto"
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Número correto!!!";
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Você escolheu um número maior";
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "Você perdeu o jogo";
            document.querySelector('.score').textContent = 0;
        }
        
        
    } else if(guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "Você escolheu um número menor";
        score--;
        document.querySelector('.score').textContent = score;

        }  else{
            document.querySelector('.message').textContent = "Você perdeu o jogo";
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Comece a advinhar...";
    document.querySelector('.guess').value = '';
    

})