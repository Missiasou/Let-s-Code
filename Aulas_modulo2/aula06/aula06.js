// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

const weekdays = ["mon", "tu", "wed", "thurs", "fri", "sat", "sun" ]
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }

  const propriedades = Object.keys(openingHours);
  console.log(propriedades)

  console.log(`Estamosa bertos por ${propriedades.length} dias`)

  const valores = Object.values(openingHours);
  console.log(valores);

  const entries = Object.entries(openingHours)
  console.log(entries)

  // Exercicios:
//   const notas = [Number(prompt('Digite a primeira nota')),
//   Number(prompt('Digite a primeira nota')),
//   Number(prompt('Digite a primeira nota')),
//   Number(prompt('Digite a primeira nota'))]

// const notas = [1,3,4,5]
  
//   const calcMedia = function(){
//       let soma = 0
//       for(let i = 0; i < notas.length; i++){
//           soma = soma + notas[i]

//       }
//       return x = soma/notas.length

//   }
//   calcMedia(notas);
//   console.log(x)
//   window.alert(`A média das notas é ${x}`)


  // outra forma mais simples

// const y = [10, 8, 9 ,9];
// let soma1 = 0;

// for(let i = 0; i < y.length; i++){
//     soma1 = soma1 + y[i];
// }

// const media = soma1 / y.length;
// console.log(media);

// Ex 2 
 const numeros = [ 1, 3, 4, 5, 6, 7];

 for(let i = 0; i < numeros.length; i++){
     let x = numeros[i];
     if( x % 2 !== 0)
     console.log(`o Número ${x} é impar`)
 }

 // ex 2 versao prof



 let count = 0;

 for( let i = 0; i < numeros.length; i++){
     if(numeros[i] % 2 !== 0){
         count++
     }
 }
 console.log(count);

 // ex 3

 const a = [ 2, 4, 6, 8];
 const b = [ 1, 3, 5, 7];
 let res = 0;

 for( let i = 0; i < a.length; i++){
     res = res + (a[i] * b[i])
    
 }
 console.log(res)

 // Ex 4

 function reverseString(str){
     let reversedString = '';

     for(let i = str.length -1; i >= 0; i--){
         reversedString = reversedString + str[i];
     }
     return reversedString;
 }

console.log(reverseString("rogerio"));

// Ex 5

function fatorial(num){
    let fat = 1;
   
        for(let i = num; i > 1; i--){
            fat = fat * i
            
        }
        return fat;
    }
    

    

console.log(fatorial(1));

// ex 5

function triangulo(n){
    
    for(let i = 1; i <= n; i++){
        let output = "";

        for(let j = 1; j <= i; j++){
            output += "*"
        }
        console.log(output);
    }
    

}
triangulo(5);
 

// ex 5 outra forma

function triangulo2(n){
    let acum = "";
    for(let i = 1; i <= n; i++){
        acum = acum + "*";
        console.log(acum);
    }
}

triangulo2(5);