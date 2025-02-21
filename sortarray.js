const arr = [9, 7, 4, 90, 87, 56, 5, 0];
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);
function sorting() {
  let temp = [0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
      console.log(temp)
    }
  }
  
 
}

sorting()