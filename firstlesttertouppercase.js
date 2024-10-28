const string =('enter a name')

function UpperLetter(str){
    const capatalized = str.charAt(0).toUpperCase()+str.slice(1)
    return capatalized
}
const result =UpperLetter(string)
console.log(result)