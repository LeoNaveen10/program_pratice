let arr1 = [
	[1, " ", 3],
	[4, " ", 6],
	[7, " ", 9],
];

for (let index = 0; index < arr1.length; index++) {
	for (let j = arr1.length-1; j >=0; j--) {
        console.log(arr1[j][index])
    }
}
