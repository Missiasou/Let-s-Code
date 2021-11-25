const greet = (greeting) => (name) => console.log(`(${greeting} ${name})`);


// desafio

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkdogs = function(dogsJulia,dogsKate){
    const JuliaSemGatos = dogsJulia.slice(1,3);
    const totalIdades = JuliaSemGatos.concat(dogsKate);
    console.log(totalIdades);
    totalIdades.forEach(function (dog, i) {
        if(dog >= 3){
            console.log(`O Dog número ${i + 1} é adulto e tem ${dog} anos de idade`)
        } else{
            console.log(`O Dog número ${i + 1} é filhote e tem ${dog} anos de idade`)
        }
    })
}

checkdogs(julia, kate)

        
   
     
        
  


checkdogs(julia,kate);