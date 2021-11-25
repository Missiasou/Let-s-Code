class Animal {
    constructor(nome, peso, patas) {
        this.nome = nome;
        this.peso = peso;
        this.patas = patas;
    }

    getSobre(){
        return `O seu Animal se chama ${this.nome} e tem ${this.patas} patas`
    }

    getPeso(){
        return `${this.nome} tem ${this.peso} kilos`
    }

    getTeste(){
         return `O nome do seu animal começa com: ${[this.nome[0]]}`


}}

class Cat extends Animal{
    constructor(nome, peso, patas, age) {
        super(nome, peso, patas);
        this.age = age
    }
    getSobre(){
        return `O seu Animal se chama ${this.nome}, tem ${this.age} anos e tem ${this.patas} patas`
    }
}

class Dog extends Animal{
    constructor(nome, peso, patas, breed) {
        super(nome, peso, patas);
        this.breed = breed
    }
    getSobre(){
        return `O seu Animal se chama ${this.nome}, é da raça ${this.breed} e tem ${this.patas} patas`
    }
}


const cat1 = new Cat("Fred", 3, 4, 7);
console.log(cat1.getSobre());
console.log(cat1.getPeso());
console.log(cat1.getTeste());

const dog1 = new Dog("Leopoldo", 35, 4, "Pastor Alemão");
console.log(dog1.getSobre());
console.log(dog1.getPeso());
console.log(dog1.getTeste());