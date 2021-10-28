// document.addEventListener('keypress', function(){

// })

// Condições iniciais

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const btn = document.querySelectorAll('.btn');


btn.forEach(btn1 => btn1.addEventListener('click', function (){

    setTimeout(function(){ 
        btn1.classList.toggle('pressed') 
    }, 100);
        btn1.classList.toggle('pressed')
    
}));

document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape' ) {
        // level 1
       setTimeout(function(){
           green.classList.toggle('visibility')
       }, 200)

           green.classList.toggle('visibility')
    }
})

