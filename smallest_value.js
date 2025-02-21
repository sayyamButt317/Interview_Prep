const array =[2,3,1,4,5,6]

let temp = array[0];

for(let i = 0;i<array.length;i++){
    if(array[i]<temp){
        temp=array[i]
    }
}
console.log(temp)