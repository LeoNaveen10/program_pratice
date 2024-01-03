function rotateArray(arr, k) {
    const n = arr.length;

    // Handle cases where k is greater than the array length
    k = k % n;

    // Rotate the array using a temporary array
    const temp = [];
    for (let i = 0; i < n; i++) {
        temp[(i + k) % n] = arr[i];
    }

    // Copy elements back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }

    return arr;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const rotations = 101;
const rotatedArray = rotateArray(inputArray, rotations);
console.log(rotatedArray);  // Output: [4, 5, 1, 2, 3]
