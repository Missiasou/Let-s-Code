// // Desestruturação de arry
// const arry = [2,3,4];

// const [x, y, z] = arry;

// console.log(x);

// // operador spread ...arr

// const menuRestaurante = ["Macarrão", "Sopa", "Sushi", "Pao"]

// const newMenu = [...menuRestaurante, "Pizza"]

// const menu = [...menuRestaurante,...newMenu];

// console.log(menu);


const rogerio = {
    firstName: "Rogério",
    lastName: "Oliveira",
    age: 2021 - 1984,
    job: "Professor",
    friends: ["Edivania", "Larissa", "Filipe"],

    calculandoAge: function(){
        return 2021 - this.nasc;
    },
};
console.log(rogerio.calculandoAge());


//console.log(`${rogerio.firstName} tem ${rogerio.friends.length} amigos e o melhor amigo é o ${rogerio.friends[1]}`);

const interessadoEm = prompt(
  "O que você quer saber sobre Rogério? Escolha entre firstName, lastName, age, job e friends"
);

console.log(rogerio[interessadoEm]);

if (rogerio[interessadoEm]) {
  console.log(rogerio[interessadoEm]);
} else {
  console.log(
    "Requisição inválida! Escolha entre firstName, lastName, age, job ou friends"
  );
}