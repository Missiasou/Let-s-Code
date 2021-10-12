const markPeso = 48;
const markAltura = 1.69;
const jonhPeso = 92;
const jonhAltura = 1.95;

const imcMark = markPeso/(markAltura*markAltura);  // pode usar o toFixed(2) para arredondar.
const imcJonh = jonhPeso/(jonhAltura*jonhAltura);

const markMaiorImc = imcMark > imcJonh

if (markMaiorImc) {
   console.log(`O IMC de Mark (${imcMark.toFixed(2)}) é maior que o de Jonh (${imcJonh.toFixed(2)})`);
} else {
   console.log(`O IMC de Jonh (${imcJonh.toFixed(2)}) é maior que o de Mark (${imcMark.toFixed(2)})`);
}

// console.log(markMaiorImc)

// if (imcMark > imcJonh){
//     console.log(`O IMC do Mark é maior`)
    
//  } else {
//     console.log(`O IMC do Mark é menor`) 
//  }
//  console.log(`Mark tem IMC ${imcMark} e Jonh tem IMC ${imcJonh}`)


//  const roger = 15;
//  console.log(roger);