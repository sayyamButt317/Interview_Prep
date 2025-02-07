function palandrom(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] === input[input.length - 1 - i]) {
      return "palandrom";
    }
  }
}

console.log(palandrom("madam"));


function checkreverse(input) {
  let temp = '';
  for (let i = 0; i<input.length; i++) {
    temp += input[input.length-1-i];
  }
  return temp;
}

console.log(checkreverse("madammmmm"));


function max(input){
  let high=[];
  for(let i=0; i<input.length; i++){
    if(input[i] > high){
      high = input[i];
    }
  }
  return high;
}

console.log(max([1, 2, 43, 4, 5]));