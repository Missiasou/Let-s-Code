// desafio

const Carro = function(velocidade, marca){
    this.velocidade = velocidade
    this.marca = marca
}

Carro.prototype.acelerar = function(vel){
    console.log(vel*10)
}

Carro.prototype.frear = function(vel){
    console.log(vel/5)
}

const x = new Carro(120, fiesta);