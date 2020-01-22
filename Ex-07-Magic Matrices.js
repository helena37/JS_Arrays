function solve(matrix) {
    const sum = matrix[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = matrix[row].reduce((a, b) => a + b, 0);
        let currentColSum = matrix.map(x => x[row]).reduce((a, b) => a + b, 0);

        if (currentRowSum !== sum || currentColSum !== sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);