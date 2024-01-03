// Eg 1: Input: 13,2 4,15,12,10,5
//         Output: 13,2,12,10,5,15,4
// Eg 2: Input: 1,2,3,4,5,6,7,8,9
//         Output: 9,2,7,4,5,6,3,8,1

let arr = [13, 2, 4, 15, 12, 10, 5];


arr = arr.sort((a, b) => a - b);

console.log(arr);
let result = [];
for (let index = 0, j = arr.length - 1; index < arr.length; index++, j--) {
	if (index > j) break;
	result.push(arr[j]);
	index !=j && result.push(arr[index]);
}

console.log(result);
