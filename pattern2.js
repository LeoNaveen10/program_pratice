// Ex.  INPUT  :  5

//     OUTPUT  :

//             1            1   -       1
//            1 1           2   -      1   1
//           1 2 1          3   -   1   2   1
//          1 3 3 1         4   -   1   3   3   1
//         1 4 6 4 1        5

//   Ex.  INPUT  :  7

//     OUTPUT  :

//             1
//            1 1
//           1 2 1
//          1 3 3 1
//         1 4 6 4 1
//        1 5 10 10 5 1
//       1 6 15 20 15 6 1

function printPattern(rows) {
	/**
	 * space list , 1 - 4 , 2 -3 , 3 - 2, 4 - 1 , 5-0
	 */

	for (let i = 1; i <= rows; i++) {
		let result = '';
		let space = rows - i;
		while (space >= 1) {
			result += ' ';
			space--;
		}
		for (let j = 1; j <= i; j++) {
            if(j==i || j ==1){
                result += '1' + ' ';
            }else{
                result += i-1 + ' ';
            }
		}

		console.log(result);
	}
}

printPattern(5);


//chatGPT answer
const rows = 5;

for (let i = 0; i < rows; i++) {
    let row = '';

    for (let j = 0; j < rows - i - 1; j++) {
        row += '  ';  
    }

    let number = 1;

    /**
     * i=2
     * j=0,1,2
     * 
     *  num = 1 * (2-0)/1 = 2
     *  num  = 2 * (2 -1)/2 = 1
     *  num = 2 * (0/2) = 0
     */


    /***
     * i=3
     * j=0,1,2,3
     *  
     *  num = 1 * 3/1 = 3
     *  num = 3 * 2/2  = 3
     *  num = 3 * 1/3 = 1
     *  num = 1 * 0/4 = 0
     */


    for (let j = 0; j <= i; j++) {
        row += `${number}   `;
        number = number * (i - j) / (j + 1);
    }

    console.log(row);
}



