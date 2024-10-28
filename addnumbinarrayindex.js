const array = [12, 2, 3, 4, 5, 6];

function check(arr) {
    // Add value to the last index
    arr[arr.length - 1] = arr[arr.length - 1] + 2; // or whatever value you want to add
    
    // Map over the array and do something with each item
    const result = arr.map((item, index) => {
        return arr[index];
    });

    return result;
}

console.log(check(array));


const secarray = [12, 2, 3, 4, 5, 6];

function check(arr) {
    // Add a new value to the array
    arr.push(7); // Add the value 7 to the end of the array
    
    // Map over the array and do something with each item
    const result = arr.map((item, index) => {
        return item; // Modify this line if you want to do something with each item
    });

    return result;
}

console.log(check(array)); // Output will be [12, 2, 3, 4, 5, 6, 7]


