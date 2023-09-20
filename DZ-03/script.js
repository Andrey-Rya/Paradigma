let playerSymbol = "X";
let gameEnded = false;
let countSteps = 0;
// we announce winning positions
let winPos = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];

// start of the game
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function () {
            countSteps++;
            if (this.innerHTML === "" && !gameEnded) {
                this.innerHTML = playerSymbol; // placing a symbol on the field
                this.classList.add(playerSymbol.toLowerCase()); // apply style to cell

                checkWin();

                console.log(countSteps)
                console.log(gameEnded)
                if (!gameEnded && countSteps === 9) {
                    setTimeout(function () {
                        alert("У Вас Ничья");
                    }, 100);
                } else if (!gameEnded) {
                    if (playerSymbol === "X")
                    playerSymbol = "O"
                else
                    playerSymbol = "X"
                }
            }
        }
    );
}

function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
        // checking winning combinations
        if (
            document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol
        ) {
            // highlight winning cells if there is a winner
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win");
            gameEnded = true;

            setTimeout(function () {
                alert(`"${playerSymbol}" Выиграли`);
            }, 100);
        }
    }
}

// make a button to reset the field and game
document.getElementById("reset").addEventListener(
    "click",
    function() {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            document.getElementById(i.toString()).classList.remove("win");
            gameEnded = false;
            countSteps = 0;
        }
    }
);
