// STRINGS

const primeiroNome = 'Rogerio';
const profissao = "Professor";
const anoNascimento = 1984;
const anoAtual = 2021;

const rogerio = "Sou " + primeiroNome + " um " + profissao;

console.log(rogerio);

// melhor com interpolação

const rogerioInter = `Sou ${primeiroNome} um ${profissao} que nasceu em ${anoNascimento}`
console.log(rogerioInter);

//CONDICIONAIS IF ELSE

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("pode tirar a carteira");
} else{
    const yearsLeft = 18 - age;
    console.log(`Muito novo, espere mais ${yearsLeft} anos`)
}

// CONVERSÃO DE TIPOS E COERÇÃO DE TIPOS

// CONVERSÃO DE TIPO: quando convertemos manualmente um tipo pro outro
// coerção de tipos: quando o javascript transforma por detras dos panos

const inputYear = '1991';
console.log(inputYear + 18);

// conversão de tipos
console.log(Number(inputYear) + 18);

// NAN: número inválido ... não é número

console.log(String(23) + 45);

//COERÇÃO DE TIPO

console.log("eu tenho " + 28 + " anos");

console.log("eu tenho " + "28" + " anos");

console.log(isNaN(3));

console.log("23" - "10" - 3);

console.log("10" - "-1");

// VALORES TRUTHY E FALSY

// 5 valores são falsy: 0, '', undefined, null, NaN
//Qualquer outro é truthy

const dinheiro = " ";

if (dinheiro) {
    console.log("oba, tenho din din");
} else {
    console.log("to liso!")
}

// OPERADORES DE IGUALDADE == VS. ===

const age2 = 18;

if (age2 === 18) {
    console.log('Você já é adulto!')
}

// === strict somente se o valor for exatamente igual ***USAR SEMPRE ESSE***
// == loose esse tem coerção de tipo ou seja 18 == '18'

// const numeroFavorito = prompt("Qual o seu número favorito?");
// console.log(numeroFavorito);

// para diferente usar !==

// Operadores Lógicos

// And Or not

// And &&                                        
// true true => true
// true false => false
// false true => false
// false false => false

// Or ||
// true true => true
// true false => true
// false true => true
// false false => false

// NOT
// true = false
// false = true


const possuiCarteiraMotorista = true;
const temBoaVisao = true;

console.log(possuiCarteiraMotorista && temBoaVisao);

// SWITCH

const diaSemana = "quarta";

switch(diaSemana) {
    case "segunda":
        console.log("Planejar curso...");
        break;
    case "terça":
        console.log("estudar");
        break;
    default:
        console.log("não é um dia da semana válida")
}

// STATEMENT(declaração) E EXPRESSÕES

// expressão : produz valor (4+ 3) , 1993, true, true && false...

//STATEMENT: pedaço de código que não produz valor: ex console.log(), const str = "23 é maior do que 10";

// operador ternário

const age3 = 28;
age3 >= 18 ? console.log('gosto') : console("não gosto")