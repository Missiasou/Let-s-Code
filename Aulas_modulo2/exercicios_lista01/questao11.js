const num = 51;

const contador = function(numero){
    if(numero < 50){
        console.log(`[Erro]: insira um número maior que 49!`)
    }else{
        let count = 1;
        let total = 0;
        while(count <= numero){
            total = total + count;
            count++;
        }
        console.log(total);
    }
}

contador(num);