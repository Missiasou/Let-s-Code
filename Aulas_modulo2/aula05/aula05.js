


// const rogerio = {
//     firstName: "Rogério",
//     lastName: "Oliveira",
//     birthYear: 1984,
//     job: "Professor",
//     friends: ["Edivania", "Larissa", "Filipe"],
//     hasCarteiraMotorista: false,
//     calculandoAge: function(){
//       this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//       return `${this.firstName} tem ${this.calculandoAge()} anos e ${this.hasCarteiraMotorista ? "possui" : "não possui"} carteira de motorista`;
//     }
//     };
  

// console.log(rogerio.calculandoAge());
// console.log(rogerio)
// console.log(rogerio.getSummary())


// const mark = {
//   nomeCompleto: "Mark Miller",
//   peso: 78,
//   altura: 1.69,
//   calcIMC: function () {
//     this.imc = this.peso/this.altura**2;
//     return this.imc;
//   },
// };

// const jonh = {
//   nomeCompleto: "Jonh Smith",
//   peso: 92,
//   altura: 1.95,
//   calcIMC: function (){
//     this.imc = this.peso/this.altura**2;
//     return this.imc;
//   },
  
// };
// mark.calcIMC();
// jonh.calcIMC();
// console.log(mark.imc, jonh.imc);

// if(mark.imc > jonh.imc){
//   console.log(`O imc de mark ${mark.imc.toFixed(2)} é maior que o de Jonh ${jonh.imc.toFixed(2)}`);
// } else {
//   console.log(`O imc de Jonh ${jonh.imc.toFixed(2)} é maior que o de mark ${mark.imc.toFixed(2)}`);
// }

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

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories)

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags, 
// } = restaurant;

// console.log(restaurantName, hours, tags);

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const gorgetas =[];
const totais = [];
const calcGorjeta = function (conta) {
  return conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
};

for(let i = 0; i < contas.length; i++) {
 const gorgeta = calcGorjeta(contas[i]);
 gorgetas.push(gorgeta);


 totais.push(gorgeta + contas[i]);
}
console.log("contas: " + contas);
console.log("gorgetas: " + gorgetas);
console.log("totais: " + totais);

const calcMedia = function(arr) {
  let soma = 0;
  
  for(let i =0; i < arr.length; i++){
    soma = soma + arr[i];
  }
  return soma / arr.length;
};

console.log(calcMedia(totais));

