
//Remove duplicate from array
const array =[1,3,5,3,3,42,42,4,5,2,4,5]
let temp =[];

for(let i of array){
    if(temp.indexOf(i) < 0){
        temp.push(i)
    }
    
}

