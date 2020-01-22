function solve(input) {
    input.sort((a, b) => a.length - b.length
        || a.toLowerCase().localeCompare(b.toLowerCase())
        ).forEach(e => console.log(e));
}

solve(['test',
    'Deny',
    'omen',
    'Default']
);