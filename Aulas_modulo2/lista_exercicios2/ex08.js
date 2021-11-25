// Enunciado
// Dado um vetor de objetos que representam pessoas, filtre as pessoas que não fazem parte do clube.

const people = [
    { name: "Angelina Jolie", member: true},
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const clubeOn = people.filter((menb) => {
    if(!menb.member ){
        console.log(`${menb.name} Não faz parte do Clube`)
    }
    
})



// const clubeOn = function(clubMenb){
//     clubMenb.forEach(function(menb){
//     if(menb.member == true)
//     return menb.member
//     // .filter(Boolean)
//     console.log(menb)  
    
// })}

// const clubeOn = people.filter(function(obj){
    
//     return !obj.member;
// });
        


//    const x = menb.menber.filter( item => item == true)
    //    return item
    //   })
    //    console.log(menb)
       
        