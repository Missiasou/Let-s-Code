//Enunciado
// Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

// [["1", "2", "3"],[true], [4, 5, 6]] -> ["1", "2", "3", true, 4, 5, 6]

const vetor = [["1","2","3"],[true],[4,5,6]];

const newVetor = vetor.reduce((acc, curr) => acc.concat(curr));

console.log(newVetor);