
const temp = [12, 34, 23, 59, 6];
let teste1 = ""
let teste2 = ""
let count = 0
let count2 = 0
for(let i = 0; i<= temp.length; i++){
    if(temp[i+ count] > temp[1 + count]) {
    teste1 = temp[i+ count];  
    count++;
}  
if(temp[i+ count2] < temp[1 + count2]) {
    teste2 = temp[i + count2]
    count2++;

}}


console.log(`A maior temperatura é ${teste1} e a menor temperatura é ${teste2}`)
    // console.log(`A maior temperatura é ${teste1} e a menor temperatura é  `)     
        




// for(let j = 0; j<= temp.length; j++){
            
//     if(temp[j+ count] < temp[1 + count2]) {
//         teste2 = temp[j + count2]
//         count2++    
        
//         } 