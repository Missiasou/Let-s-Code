// Enunciado
// Dado um vetor de produtos que tem interesse em comprar, calcule quanto custaria comprar todos os produtos a vista.

const products = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const total = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(`O valor total de todos os produtos à vista é:  ${total}`);






// const total = function(item){
//     item.forEach(function(preco){
//     preco.price = preco.price
//     .reduce(function (acc, curr){
//         return acc + curr
//     },0);
    
//     })}