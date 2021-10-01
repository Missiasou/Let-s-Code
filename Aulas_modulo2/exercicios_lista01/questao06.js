const frutas = ["Maçã", "Mamão", "Melão", "Banana"];
const vegetais = ["Cenoura", "Couve", "Brócolis", "Alface"];

const listarComidas = function(fruit,veget){
    const fruites = fruit;
    const vegets = veget;

/* a */    vegets.shift();
/* b */    fruites.pop();
/* c */    const c = fruites.indexOf("Mamão")
/* d */    fruites.unshift(c);
/* e */    const e = fruites.length;
/* f */    fruites.push(e);
/* g */    const comidas = [...vegets,...fruites];  
/* h */    const melhoresComidas = comidas.slice(2,5);
/* i */    const testeMaca = function(x){
                return  x = melhoresComidas.includes("Maçã") ? "Maçã é uma das melhores comidas" : "Maçã não é uma das melhores comidas";
            }
/* j */    melhoresComidas.reverse();


            console.log(testeMaca(melhoresComidas));

            console.log(melhoresComidas)

/* k */ return melhoresComidas;
}

listarComidas(frutas,vegetais);

