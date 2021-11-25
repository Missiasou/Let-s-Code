// Enunciado
// Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.

// [1, 2, 3, 4] -> "1234"

const vetor = [1, 2, 3, 4];

const vetorNumerico = vetor.reduce((acc, curr) => acc + `${curr}`)

console.log(vetorNumerico);