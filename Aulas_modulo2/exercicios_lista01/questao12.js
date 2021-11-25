
const n = 5;
if(n <= 0 || n > 20){
    console.log(`[Erro]: Insira um valor entre 1 e 20`);
}else{
    function triangulo(n){
        let espacos = "                    "
        for(let i = 1; i <= n; i++){
            let output = espacos.slice(i-1, n-1) + "*";
            
            for(let j = 2; j <= i; j++){
                output += "**"
            }
            console.log(output);
        }
    }

}

triangulo(n);



