const dolphinsJogo1 = 99;
const dolphinsJogo2 = 112;
const dolphinsJogo3 = 101;

const mediaDolphins = (dolphinsJogo1 + dolphinsJogo2 + dolphinsJogo3)/3

const koalasJogo1 = 97;
const koalasJogo2 = 112;
const koalasJogo3 = 101; 

const mediaKoalas = (koalasJogo1 + koalasJogo2 + koalasJogo3)/3

if (mediaDolphins > mediaKoalas && mediaDolphins >= 100) {
    console.log("O Dolphis foi o vencedor")
} else if (mediaKoalas > mediaKoalas && mediaKoalas >= 100) {
    console.log("O Koalas foi o vencedor")
}else if(mediaDolphins === mediaKoalas && mediaDolphins >= 100 && mediaKoalas >= 100 ) {
    console.log("Empate")
} else {
    console.log("não houve vencedor");
}
