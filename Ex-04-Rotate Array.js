function solve(input) {
    let rotations = input.pop() % input.length;

    for (let i = 0; i < rotations; i++) {
        let currentElement = input.pop();
        input.unshift(currentElement);
    }

    console.log(input.join(" "));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
);