
function triangulo(n){
  let triangulo = [];         
  for(let i = 0; i < n; i++){        
      let linha = [];
      for(let j = 0; j <= i; j++){
          if(j === 0) 
              linha.push(1);
          else{
                  const a =  !triangulo[i-1][j] ? 0 : triangulo[i-1][j];
                  const b = !triangulo[i-1][j-1] ? 0 : triangulo[i-1][j-1];
                  linha.push(a + b)                                       
              }
      }
      triangulo.push(linha);       
      console.log(triangulo[i].toString());
  }        
}
triangulo(8);