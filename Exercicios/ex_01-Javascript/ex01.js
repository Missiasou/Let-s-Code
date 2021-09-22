let markPeso = 78;
let markAltura = 1.69;
let jonhPeso = 92;
let jonhAltura = 1.95;

let imcMark = markPeso/(markAltura*markAltura);
let imcJonh = jonhPeso/(jonhAltura*jonhAltura);

let markMaiorImc;

if (imcMark > imcJonh){
    console.log(`O IMC do Mark é maior`)
    
 } else {
    console.log(`O IMC do Mark é menor`) 
 }
 console.log(`Mark tem IMC ${imcMark} e Jonh tem IMC ${imcJonh}`)


 