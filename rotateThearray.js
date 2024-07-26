function rotateArray(arr, rotate) {
    const n = arr.length;

    // Handle cases where rotate is greater than the array length
    rotate = rotate % n;

    // Rotate the array using a temporary array
    const temp = [];
    for (let i = 0; i < n; i++) {
        temp[(i + rotate) % n] = arr[i];
    }

    // Copy elements back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }

    return arr;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5]; 
/***
 * if rotate =2 
 * 0 pos - 2  i = 0 + 2 % 5
 * 1 pos - 3  i = 1 + 2 % 5
 * 2 pos - 4  i = 2 + 2 % 5
 * 4 pos - 0  i = 3 + 2 % 5 = 0
 * 5 pos - 1  i = 4 +2%5 = 1
 */
const rotations = 101;
const rotatedArray = rotateArray(inputArray, rotations);
console.log(rotatedArray);  // Output: [4, 5, 1, 2, 3]
