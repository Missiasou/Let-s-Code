class Inf_Animais {
    constructor(nome, especie, peso, idade, alimentacao) {
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.alimentacao = alimentacao;
    }
    login(usuario, senha) {
        if(usuario == "user123" && senha === 123){
            return "Usuário Logado com sucesso"
        } else {
            return "[Erro]: Usuário ou senha inválido"
        }
    }
}

class User extends Inf_Animais {
    constructor(nome, especie, peso, idade, alimentacao) {
        super(nome,especie, peso, idade, alimentacao)
    }
    
}

class Admin extends Inf_Animais {
    constructor(nome, especie, peso, idade, alimentacao, telefone) {
        super(nome,especie, peso, idade, alimentacao)
        this.telefone = telefone;
    }
}