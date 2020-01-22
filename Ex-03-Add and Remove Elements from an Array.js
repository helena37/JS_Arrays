function solve(input) {
    let commands = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) => [...arr.slice(0, arr.length - 1)]
    };

    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;
    },[]);

    return result.length === 0 ? "Empty" : result.join("\n");
}

// function solve(input) {
//     let initialNum = 0;
//     let arr = [];
//
//     for (let i = 0; i < input.length; i++) {
//         initialNum++;
//         switch (input[i]) {
//             case "add": arr.push(initialNum); break;
//             case "remove": arr.pop(); break;
//         }
//     }
//
//     if (arr.length === 0) {
//         console.log("Empty");
//     } else {
//         console.log(arr.join("\n"));
//     }
// }

let test0 = ['add',
    'add',
    'add',
    'add'];

let test1 = ['add',
    'add',
    'remove',
    'add',
    'add'];

let test2 = ['remove',
    'remove',
    'remove'];

console.log(solve(test0));