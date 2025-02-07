
//Remove duplicate from array
const array =[1,3,5,3,3,42,42,4,5,2,4,5]


let removevalue = array.filter((item,index) => array.indexOf(item) ===index)
console.log(removevalue)

