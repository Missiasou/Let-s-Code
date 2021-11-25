const temp = [Number(prompt('Digite a temperatura:'))];

const verificarTemperatura = function(temperatura){
    if(temperatura >= 26){
        console.log(`Como hoje a temperatura está elevada, a atividade apropriada para você é NATAÇÃO!!! não se esqueça do traje de piscina e aproveite seu dia!`);
    } if(temperatura >= 15 && temperatura < 26){
        console.log(`Hoje é um ótimo dia para uma atividade anaeróbica, a atividade apropriada para você é TÊNIS!!! Aproveite seu dia!`);
    }if(temperatura >= 5 && temperatura < 15) {
        console.log(`A atividade apropriada para você hoje é GOLF!!! Aproveite seu dia e curta nossa drinks especiais!`)
    } else if (temperatura < 5) {
        console.log(`Tenho certeza que você está muito animado para essa atividade de hoje! a atividade apropriada para você é ESQUI!!! Não se esqueça do agasalho, caso não tenha procure na nossa loja as melhores opções... Aproveite seu dia!`)
    }
}

verificarTemperatura(temp);
