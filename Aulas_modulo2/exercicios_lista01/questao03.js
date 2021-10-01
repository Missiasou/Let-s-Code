// parte I
const lamina = 0.5;
const volumePiscina = function(largura, comprimento, profundidade){
   return volume = largura * comprimento * (profundidade - lamina)*1000;   
}
const qtdeProduto = function(volume){
    return produto = volume*0.0015*1000;
}

console.log(`Você vai precisar de ${qtdeProduto(volumePiscina(5,3,1.7))} mls de produto para essa piscina`);

// const dados = [
//     prompt("Entre com a Largura(em metros) da piscina"),
//     prompt("Entre com a comprimento(em metros) da piscina"),
//     prompt("Entre com a profundidade(em metros) da piscina"),
// ]

// volumePiscina(...dados);

// const qtdeProduto = function(volume){
//     return produto = volume*0.015*1000
// }

// window.alert(`Você vai precisar de ${qtdeProduto(volumePiscina(...dados))} mls de produto para essa piscina`)
// console.log(`Você vai precisar de ${qtdeProduto(volumePiscina(5,3,1.7))} mls de produto para essa piscina`)