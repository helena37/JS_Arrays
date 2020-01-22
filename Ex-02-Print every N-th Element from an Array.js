function solve(input) {
    let step = Number(input.pop());

    return input
        .filter((element, index) => index % step === 0).join("\n");
    // for (let i = 0; i < input.length; i += step) {
    //     console.log(input[i]);
    // }
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
));