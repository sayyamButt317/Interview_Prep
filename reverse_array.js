const array = [1,2,3,4,5,6,7,8,9,10];
const result = array.map((index)=>array[array.length-index])
console.log(result)