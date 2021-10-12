// Enunciado
// Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const somaDiagonal = matrix.reduce((acc, curr, i) =>  acc + curr[i], 0)


console.log(`A soma da diagonal da matriz é ${somaDiagonal}`)

// const somaDiagonal = matrix.reduce(function (acc, curr, i){
//     return acc + curr[i]
// },0)


// console.log(`A soma da diagonal da matriz é ${somaDiagonal}`)

// const verificar = function(mat){
//    let x = 0
//     for(let i = 0; i<mat.length; i++){
        
//         for(let j = 0; j<mat.length; j++){
            
//             if(i==j){
//                 x = x + mat[i][j]
//             console.log(mat[i][j]) 
//     }
//     }   
// }
// console.log(`A soma da diagonal da matriz é ${x}`)
// }
// verificar(matrix);
