const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: "",
    calcularValorFinal: "",
    
    verificaDesconto: function(){
        if(this.preco > 450){
            return this.hasDesconto = true;
        }else{
            return this.hasDesconto = false;
        }
    },

    calcularValorFinal: function(){
       const newPreco = this.hasDesconto ? this.preco * 0.90 : this.preco;
       console.log(`${this.loja} - ${this.produto} - ${this.quantidade} - Valor Total da Venda = ${newPreco} `)
    },

    
};

  venda.verificaDesconto();
  venda.calcularValorFinal();
  