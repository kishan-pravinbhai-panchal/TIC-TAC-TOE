let boxes = document.querySelectorAll('.btn');
let resetbtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#New-game');
let msgcontainer = document.querySelector('.m-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];

const resetgame = () => {
    turnO = true;
    click_count=0;
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((btn) => {
    btn.addEventListener(('click'), () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    })

})
const disableboxes = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
}
const enableboxes = () => {
    for (let btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner} `
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    let isDraw = true;
    for (let patterns of winPatterns) {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return;
            }
        } else {
            isDraw = false;
        }
    }

    if (isDraw) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
}


newGameBtn.addEventListener("click" , resetgame)
resetbtn.addEventListener("click" , resetgame)