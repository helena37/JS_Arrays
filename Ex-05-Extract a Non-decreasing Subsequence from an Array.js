function solve(input) {
    let result = [];
    let currentElement = 0;

    for (let x of input) {
        if (x >= currentElement) {
            result.push(x);
            currentElement = x;
        }
    }
    console.log(result.join("\n"));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);