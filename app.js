//create a variable fo the games state

let player1Score = 0;
let player2Score = 0
let player1Turn = true

//create a varibale to store the dom reference

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton () {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


//hockup a  click event listener to the roll dice button
rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random()*6) + 1

    if(player1Turn) { 
        player1Score += randomNumber
        player1Scoreboard.innerText = player1Score
        message.innerText = "Player 2 Turn"
        player1Dice.innerText = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
    } else {
        player2Score += randomNumber
        player2Scoreboard.innerText = player2Score
        message.innerText = "Player 1 Turn" 
        player2Dice.innerText = randomNumber
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
    }
    
    //============winning condittion==================//

    if(player1Score >=20 ) {
        message.textContent = "Player 1 won the match"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 1 won the match"
        showDisplayButton()
    }
    player1Turn = !player1Turn

})

resetBtn.addEventListener("click", () => {
    location.reload()
})