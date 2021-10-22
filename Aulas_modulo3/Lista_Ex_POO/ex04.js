class Animal {
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
    adicionar(animais, nome, especie, peso, idade, alimentacao){
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.idade = idade;
        this.alimentacao = alimentacao;

        animais.push(this);
    }
    excluir(animais){
        animais.delete(this)
    }
    
}


class User  {
    constructor(usuario, senha, telefone, admin = false) {
        this.usuario = usuario;
        this.senha = senha;
        this.admin = admin;
        if(admin){
            this.telefone = telefone;
        }

    }

    login(usuario1, senha) {
        if(usuario1 === this.usuario && senha === this.senha){
            return "Usuário Logado com sucesso"
        } else  {
            return "[Erro]: Usuário ou senha inválido";
        }    
}

class Main{
    iniciar(){
        const usuarioA = new User("teste", "123");
        const usuarioB = new User("admin", "123", "4336-7411", true);
        const animais =[{nome:"ted",especie:"cachorro",peso:3,idade:4,alimentacao:"frutas"},{nome:"bob",especie:"gato",peso:2,idade:10,alimentacao:"ração"}]


        if(usuarioA.admin){
            usuarioA.excluir()
        }


    }
}


console.log(roger);
roger.alterarAnimal("", "tetqqtpwoe");
console.log(roger)



// class Admin extends User {
//     constructor(nome, especie, peso, idade, alimentacao, telefone) {
//         super(nome,especie, peso, idade, alimentacao)
//         this.telefone = telefone;
//     }
//     login(usuario, senha) {
//         if(usuario == "admin" && senha === admin123){
//             return "Usuário Logado com sucesso"
//         } else {
//             return "[Erro]: Usuário ou senha inválido"
//         }
//     }
// }

