const notas = [ 10, 9, 9 , 8];

const calcMedia = function(notas){
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma = soma + notas[i];    
    }
    const average = soma/notas.length;
    if(average >= 9){
        console.log("Parabéns - você está na lista de alunos destaque do curso");
       }else{
        console.log("Desculpe, você não entrou na lista de alunos destaque");
       }
  
       return average;
}
calcMedia(notas);



