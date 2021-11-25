const numeros = [2,6,8,9]; 

function verificar(elemento) {
      
    for (let i = 0; i < elemento.length; i++) { 
          for (let j = 0; j < (elemento.length - i - 1); j++) { 
                   if(elemento[j] > elemento[j+1]) {
                           let temp = elemento[j]; 
                elemento[j] = elemento[j+1]; 
                elemento[j+1] = temp; 
            }
        }        
    }
}


verificar(numeros);
console.log(numeros);


