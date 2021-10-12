// // Lista de Exercícios 02

// // Questão 01
// Enunciado
// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

// 5% para produtos abaixo de R$ 200,00

// 10% para produtos abaixo de R$ 400,00

// 15% para produtos abaixo de R$ 2000,00

// 20% para produtos acima de R$ 2000,00

// Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

// Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

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



