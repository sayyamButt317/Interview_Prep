
//Reverse teh String 
const string =(" hello buddy ,how's you doing");

function reverseString(str){
    let newstring =""

    for(let i = str.length -1; i>0 ;i--){
        newstring += str[i]
    }
    return newstring
    }
const result =reverseString(string)
console.log(result)

