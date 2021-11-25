const string = ["paralelepipedo", "p"];
const [a,b] = string;

let novaString = "";

const verificaString = function(a,b){
    for(let i = 0; i <a.length; i++){
        if(a[i] === b){
            novaString += a[i].toUpperCase();
        
        } else {
            novaString += a[i]
        }
        
    }
    
   return novaString;
}

console.log(verificaString(a,b));



// console.log(d[i].toString());