const numeros = [1,4,5,6];

const verificar = function(x){
    let count = 1;
    while(count <= x.length){
        console.log(`${x[count-1] % 2 === 0 ? `O numero ${x[count-1]} é par` : ""}`)
        count++;
        
    }
}

verificar(numeros);
    
