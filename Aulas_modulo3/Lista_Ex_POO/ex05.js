class User {
    constructor(nome, especie, peso, idade, alimentacao) {
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.alimentacao = alimentacao;
    }

    alterar(nome, especie, peso, idade, alimentacao){
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.alimentacao = alimentacao;

    }
    
    
}


class Admin extends User {
    constructor(nome, especie, peso, idade, alimentacao, telefone) {
        super(nome,especie, peso, idade, alimentacao)
        this.telefone = telefone;
    }
    login(usuario, senha) {
        if(usuario == "admin" && senha === admin123){
            return "Usuário Logado com sucesso"
        } else {
            return "[Erro]: Usuário ou senha inválido"
        }
    }

    adicionar(nome, especie, peso, idade, alimentacao, telefone){
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.alimentacao = alimentacao;
        this.telefone = telefone;
    
    }
    excluir(animais){
        animais.delete(this)
    }
}

const cachorro = new User("Ted", "Cachorro", 3, 5, "Racao")
console.log(cachorro);
cachorro.alterar("Bob", "Cachorro", 3, 5, "Racao")
console.log(cachorro);


const urso = new Admin();
urso.adicionar("Thor", "urso", 34, 10, "frutas", "4336-4756");
console.log(urso)



