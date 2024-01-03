// 4. Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else return -1.

// Eg 1:Input:
//         String 1: test123string
//          String 2: 123
//         Output: 4
// Eg 2: Input:
//         String 1: testing12
//         String 2: 1234
//         Output: -1

function subString(string, compareString) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] == compareString[0]) {
			let temp = i,j=1
			while (j < compareString.length){
				if (string[++temp] !== compareString[j++]) {
					break;
				}
			}
            if(j == compareString.length && temp < string.length){
                console.log(`index is ${i}`);
                return;
            }
		}
	}
    console.log(`not found: -1`);
}

subString('test123string', 'ngl');
