// Enunciado
// Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.

const x = [ 10, 2, 5, 6, 8 ,9];

const arrayPares = x.filter(mov => mov % 2 == 0);

console.log(arrayPares);