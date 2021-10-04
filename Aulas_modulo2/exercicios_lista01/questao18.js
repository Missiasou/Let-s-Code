const teste1 = [2, 3, 4, 5];
const teste2 = [1, 3, 4, 2];

const verificarIguais = function(teste1, teste2){
    let count = 0

    for(let i = 0; i < teste1.length; i++){
        for(let j = 0; j<teste2.length; j++){
            if(teste2[j] === teste1[i]){
                count++;
            } else { 
                continue;
            }
        }
    }
    console.log(`Nós temos ${count} números repetidos`)
}

verificarIguais(teste1,teste2)