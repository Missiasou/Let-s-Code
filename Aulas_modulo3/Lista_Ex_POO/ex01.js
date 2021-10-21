class Dog {
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    bark(){
        return `Au au`
    }

    getSummary(){
        return `O cachorro ${this.name} possui ${this.age} anos e é um ${this.breed}.`;
    }
}

const dog1 = new Dog("Snoop", 4, "Buldogue");
console.log(dog1.bark());
console.log(dog1.getSummary());

const dog2 = new Dog("Ted x", 10, "Labrador");
console.log(dog2.bark());
console.log(dog2.getSummary());