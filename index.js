/* let player = {
    name: "Leon",
    chips: 300
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let message = document.getElementById("message")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips





function getRandomCard() {  
    let randomIndex = Math.floor(Math.random() * 13) + 1
    if (randomIndex === 1) {
        return 11
    } else if (randomIndex > 10) {
        return 10
    }
    return randomIndex
}

function startGame() {
    renderGame()
}

function renderGame()  {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message.textContent = "Do you want to draw another card?"
    } else if (sum === 21) {
        message.textContent = "You've got blackjack!"
    } else {
        message.textContent = "You're out of the game!"
    }
}


function newCard() {
    if (sum < 21) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
 */