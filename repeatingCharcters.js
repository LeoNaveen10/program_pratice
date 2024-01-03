// Eg 1: Input: a1b10
//        Output: abbbbbbbbbb
// Eg: 2: Input: b3c6d15
//           Output: bbbccccccddddddddddddddd
// The number varies from 1 to 99.


function expandString(input) {
    let result = '';
    let currentChar = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (isNaN(char)) {
            currentChar = char;
        } else {
            if(i<input.length && !isNaN(input[i+1])){
                char +=input[i+1];
                i++;
            }
            const repeatCount = parseInt(char, 10);
            if (repeatCount >= 1 && repeatCount <= 99) {
                result += currentChar.repeat(repeatCount);
            } else {
                console.error('Invalid repeat count:', repeatCount);
                return 'Invalid input';
            }
        }
    }

    return result;
}

console.log(expandString('a1b10'));
console.log(expandString('b3c6d15')); 
