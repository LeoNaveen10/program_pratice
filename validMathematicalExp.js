// 4) Check whether a given mathematical expression is valid.

//     Eg.) Input  : (a+b)(a*b)
//          Output : Valid

//          Input  : (ab)(ab+)
//          Output : Invalid

//          Input  : ((a+b)
//          Output : Invalid 


function isValidMathExpression(expression) {
    const stack = [];

    // Iterate through the expression
    for (let char of expression) {
        if (char === '(') {
            // Push opening parenthesis onto the stack
            stack.push(char);
        } else if (char === ')') {
            // Pop from the stack and check for corresponding opening parenthesis
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }

    // Check for balanced parentheses
    return stack.length === 0;
}

// Example usage:
const input1 = "(a+b)(a*b)";
console.log(isValidMathExpression(input1));  // Output: true

const input2 = "(ab)(ab+)";
console.log(isValidMathExpression(input2));  // Output: false

const input3 = "((a+b)";
console.log(isValidMathExpression(input3));  // Output: false
