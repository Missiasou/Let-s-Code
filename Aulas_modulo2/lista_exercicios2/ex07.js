// Enunciado
// Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.

const x = ["hoje", "amanha", "paralelo", "vencedor", "ceu", "mesa"];

const str5carac = x.filter((str) => {
    return str[5];
});

console.log(str5carac);



            