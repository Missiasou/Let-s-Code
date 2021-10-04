const string = ["papai", "p"];
const [a,b] = string;

let d = b.toUpperCase();

const verificaString = function(){
    for(let i = 0; i <a.length; i++){
        if(a[i] === b){
        console.log(d);
        } else {
            console.log(a[i])
        }
        
    }
    
}

verificaString(a);

