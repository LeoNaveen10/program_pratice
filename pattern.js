// Eg 1: Input: 12345
//        Output:
// 1       5
//   2   4
//     3
//   2  4
// 1      5

function printPattern(input) {
	const length = input.length;

	// Iterate over rows
	for (let i = 0; i < length; i++) {
		// Initialize an empty row
		let row = '';

		// Iterate over columns
		for (let j = 0; j < length; j++) {
			// Check if the current position corresponds to a character in the input
			if (j === i || j === length - i - 1) {
				row += input[j];
			} else {
				row += ' ';
			}
		}

		// Print the current row
		console.log(row);
	}
}

printPattern('geeksforgeeks');

function printNumberPattern(rows) {
	for (let i = 1; i <= rows; i++) {
		let row = '';
		for (let j = 1; j <= i; j++) {
			row += j + ' ';
		}
		console.log(row);
	}
}

// Example usage:
printNumberPattern(5);

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';

          /**
         *  compare between i and space
         * 
         *  1 -- 4
         *  2 -- 3
         *  3 -- 2
         *  4 -- 1
         */
        for (let j = 1; j <= rows - i; j++) {
            row += ' ';
        }

        /**
         *  compare between i and *
         * 
         *  1 -- 1
         *  2 -- 3
         *  3 -- 5
         *  4 -- 7
         */
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}


// Example usage:
printPyramid(5);





// 1
// 22
// 333
// 4444
// 55555



function printPatternChatGptQuestion(rows){

    for(let i=1;i<= rows;i++){
        let result = '';

        for(let j=1;j<=i;j++){
            result+=i;
        }
        console.log(result);
    }
}

printPatternChatGptQuestion(6);

