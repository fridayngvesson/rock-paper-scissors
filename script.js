function playGame(playerMove) {
    
    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

   
    if (playerMove === computerMove) {
        result = 'It\'s a tie!';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('computerChoice').textContent = `Computer chose: ${computerMove}`;
}
