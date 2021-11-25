// const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const gorgetas = [];
// const totais = [];

// const calcGorgeta = function(conta){
//   return conta = conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.20;
// }

//   for(let i= 0; i < contas.length; i++){
//     const gorj = calcGorgeta(contas[i]);
//     gorgetas.push(gorj);
//     totais.push(gorj + contas[i])
//     console.log(`O valor da sua conta foi de ${contas[i]} reais, a gorgeta calculada foi de ${gorj} reais e o valor total pago foi de ${totais[i]}`);
//   } 

// const calcMedia = function(arry){
//   let soma = 0;
//   for(let i = 0; i < arry.length; i++){
//     soma = soma + arry[i];
//   }
//   return soma/arry.length;
// }

// console.log(calcMedia(totais))

// const calcGorgeta = function(conta){
//   return conta = conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.20;
// }

const melhoresComidas = ["Maçã", "Mamão", "Melão", "Banana"];
const testeMaca = function(x){
  return  x = melhoresComidas.includes("Maçã") ? "Maçã é uma das melhores comidas" : "Maçã não é uma das melhores comidas"
      
}

  console.log(testeMaca(melhoresComidas))

