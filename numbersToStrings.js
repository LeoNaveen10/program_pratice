function numberToWords(number) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convertLessThanHundred(num) {
        if (num < 10) {
            return units[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const tenDigit = Math.floor(num / 10);
            
            const unitDigit = num % 10;
            return `${tens[tenDigit]} ${units[unitDigit]}`;
        }
    }

    function convertLessThanThousand(num) {
        const hundredDigit = Math.floor(num / 100);
        const remaining = num % 100;

        if (hundredDigit === 0) {
            return convertLessThanHundred(remaining);
        } else {
            let remaing_result = convertLessThanHundred(remaining);
            if(remaing_result.length == 0){
                return `${units[hundredDigit]} Hundred`;
            }
            return `${units[hundredDigit]} Hundred and ${convertLessThanHundred(remaining)}`;
        }
    }

    if (number === 0) {
        return "Zero";
    }

    if (number < 100) {
        return convertLessThanHundred(number);
    }

    return convertLessThanThousand(number);
}

// Example usage:
const words = numberToWords(401);
console.log(`in words: ${words}`);
