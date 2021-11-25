// Enunciado
// Transforme o vetor de eleitores em uma contagem de quantas pessoas participaram na votação.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const contador = voters.filter((votou) => {
    if(votou.voted ){
        return [votou.name]
    }    
})
.reduce((acc, curr, i) => `${i+1} pessoas votaram`, 0);


console.log(contador);