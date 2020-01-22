function solve(input) {
    let dashboard = [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let counter = 0;
    let isWinner = false;

    for (let i = 0; i < input.length; i += 2) {
        counter++;

        let firstPlayer = input[i].split(" ");
        let firstRow = Number(firstPlayer[0]);
        let firstCol = Number(firstPlayer[1]);

        let secondPlayer = input[i + 1].split(" ");
        let secondRow = Number(secondPlayer[0]);
        let secondCol = Number(secondPlayer[1]);

        if (dashboard[firstRow][firstCol] === false) {
            dashboard[firstRow][firstCol] = "X";
        } else {
            console.log("This place is already taken. Please choose another!");
        }

        if (dashboard[secondRow][secondCol] === false) {
            dashboard[secondRow][secondCol] = "O";
        } else {
            console.log("This place is already taken. Please choose another!");
        }

        if (counter === 3) {
            for (const x of dashboard) {
                let currentElement = "";
                for (const x1 of x) {
                    if (typeof x1 === "undefined") {
                        currentElement = x1;
                    } else if (currentElement === x1) {
                        isWinner = true;
                    }
                }
                if (isWinner === true && currentElement === "X") {
                    console.log("Player X wins!");
                    break;
                } else if (isWinner === true && currentElement === "O") {
                    console.log("Player O wins!");
                    break;
                }
            }
        }
    }

    if (isWinner === false) {
        console.log("The game ended! Nobody wins :(");
    }
    for (let x of dashboard) {
        let str = "";
        for (let x1 of x) {
            str += x1 + "\t";
        }
        console.log(str.trim());
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);