function printUniqueMatrix(rows, columns, matrix) {
    const uniqueRows = new Set();

    for (let i = 0; i < rows; i++) {
        let rowString = '';

        for (let j = 0; j < columns; j++) {
            rowString += matrix[i][j] + ' ';
        }

        if (!uniqueRows.has(rowString)) {
            uniqueRows.add(rowString);
            console.log(rowString.trim());
        }
    }
}

// Example usage:
const rows = parseInt(prompt("Enter Row Size:"), 10);
const columns = parseInt(prompt("Enter Column Size:"), 10);

console.log("Enter the matrix:");
const matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = prompt(`Enter row ${i + 1} (${columns} values separated by spaces):`).split(' ').map(Number);
}

console.log("\nOUTPUT:");
console.log("Unique Matrix:");
printUniqueMatrix(rows, columns, matrix);
