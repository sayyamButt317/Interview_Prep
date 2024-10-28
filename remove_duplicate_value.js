
//Remove duplicate from array11
const array =[1,3,5,3,3,42,42,4,5,2,4,5]

function RemoveDuplicate(arr){
let uniquevalue =[];

for(let i of arr){
    if(uniquevalue.indexOf(i) ===-1){
        uniquevalue.push(i)
    }
    
}
console.log(uniquevalue)
}
RemoveDuplicate(array);
