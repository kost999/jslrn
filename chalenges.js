var scores, roundScore, activePlayer, gamePlaying, lastDice

init()

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // Random number
        dice = Math.floor(Math.random() * 6) + 1;
        // Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'
        
        if (dice === 6 && lastDice === 6) {
            // player looses the score
            scores[activePlayer] = 0
            document.getElementById('score-' + activePlayer).textContent = '0'
            nextPlayer()
        }else if (dice !== 1) {
            // add score
            roundScore += dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            // next player
            nextPlayer()
        }
        
        lastDice = dice
    }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore
        // update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

        var input = document.querySelector('.final-score').value
        var winningScore
        
        if (input) {
            winningScore = input
        } else {
            winningScore = 100
        }
        
        // check if player win the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        } else {
            // next player
            nextPlayer()
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init)

function nextPlayer() {
    // next player
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}

function init() {
    scores = [0,0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.player-1-panel').classList.remove('active')
}
