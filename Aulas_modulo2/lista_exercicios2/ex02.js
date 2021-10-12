// Lista de Exercícios 02

// Questão 02

const x = [3,4,7,1,5];

const y = [4,3,1];


const calcular = function(array1,array2){
    
    const arr1 = array1.length < array2.length ? array1 : array2 
    const arr2 = array1.length > array2.length ? array1 : array2

   return arr1.map((num, i) => num*arr2[i]) 
}

console.log(calcular(x,y));


