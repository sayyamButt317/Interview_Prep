// program to check if the string is palindrome or not

function checkPalindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    // check if first and last string are same
    if (input[i] !== input[input.length -1- i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const input = "madam";

// call the function
const value = checkPalindrome(input);

console.log(value);
