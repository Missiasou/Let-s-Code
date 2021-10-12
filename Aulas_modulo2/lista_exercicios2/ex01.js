// Lista de Exercícios 02

// Questão 01

const precoInicialProduto = [150, 300, 450, 500, 1600, 2500, 3000, 190, 690, 950];

const calcDescontos = precoInicialProduto.map((desc) => {
    if(desc < 200){
        return desc * 0.95;
    } if(desc >= 200 && desc < 400){
        return desc * 0.90;
    } if(desc >= 400 && desc < 2000){
        return desc * 0.85;
    } else if(desc > 2000){
        return desc * 0.80;
    }
}
)

console.log(calcDescontos);



