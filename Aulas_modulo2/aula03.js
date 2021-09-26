


// //calculo de média
// const calculoAverage = (score1,score2,score3) => (score1 + score2 + score3)/3;

// const scoreDolphins = calculoAverage(85,54,41);
// const scoreKoalas = calculoAverage(23,34,27);

// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2* avgKoalas){
//         console.log(`Dolphins vence ${avgDolphins} vc ${avgKoalas}`)
//     }else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas vence ${avgKoalas} vc ${avgDolphins}`)
//     }else {
//         console.log(`Ninguém venceu`);
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas);

// Calculadora de Gorjeta

// const conta = 275;
// const gorjeta = conta >= 50 && conta <= 300 ? conta*0.15 : conta*0.2;

// console.log(`O valor da sua conta foi de ${conta} reais, a sua gorjeta foi de ${gorjeta} reais e o valor total pago foi de ${conta+gorjeta}`);

const calcGorjeta = function (conta) {
    return conta >= 50 && conta <= 300 ? conta*0.15 : conta*0.2;
    
};
// console.log(calcGorjeta(275));

const contas = [125, 555, 44];
const gorjetas = [
    calcGorjeta(contas[0]),
    calcGorjeta(contas[1]),
    calcGorjeta(contas[2])
];

console.log(contas);
console.log(gorjetas);

const totals = [
    gorjetas[0] + contas[0],
    gorjetas[1] + contas[1],
    gorjetas[2] + contas[2],
]

console.log(totals);