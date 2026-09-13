// const userInput = document.querySelector('input')
// const hint = document.querySelector('.hint')
// const score = document.querySelector('.score')
// const userButton = document.querySelector('.Submit-Button')
// const PreviousGuess = document.querySelector('#Previous-guess')
// const RemainingGuess = document.querySelector('#Remaining-guess')
// let TotalChances = 8
// let currentTry = 0

// const computerGuess = Math.floor((Math.random() * 100) + 1)

// function NumberGuessingGame() {

//     userButton.addEventListener('click', () => {

//     if (userInput.value === '') {
//             hint.textContent = 'Enter a number'
//             return
//         }

//         const guess = Number(userInput.value)

//         if (isNaN(guess)) {
//             hint.textContent = 'Enter a NUMBER'
//         }else if (currentTry >= TotalChances){
//             hint.textContent = 'No more chances left!'
//         } else if (guess > computerGuess) {
//             hint.textContent = 'Too High!'
//             currentTry++
//         } else if (guess < computerGuess) {
//             hint.textContent = 'Too Low!'
//             currentTry++

//         } else if (guess === computerGuess) {
//             hint.textContent = "Correct! Congratulations! You WON!"
//         }
//     })
// }
// NumberGuessingGame()

const userInput = document.querySelector('input')
const hint = document.querySelector('.hint')
const score = document.querySelector('.score')
const userButton = document.querySelector('.Submit-Button')
const PreviousGuess = document.querySelector('#Previous-guess')
const RemainingGuess = document.querySelector('#Remaining-guess')
let TotalChances = 8
let currentTry = 0
let pastGuesses = []

const computerGuess = Math.floor((Math.random() * 100) + 1)

function NumberGuessingGame() {

    userButton.addEventListener('click', () => {
        if (userInput.value === '') {
            hint.textContent = 'Enter a number'
            return
        }

        const guess = Number(userInput.value)

        if (isNaN(guess)) {
            hint.textContent = 'Enter a NUMBER'
        }else if (guess > 100 || guess < 1) {
            hint.textContent = 'Select between 1 to 100'
        } else if (currentTry >= TotalChances) {
            hint.textContent = 'No more guesses left!'
        } else if (guess > computerGuess) {
            hint.textContent = 'Too High!'
            currentTry++
            pastGuesses.push(guess)
        } else if (guess < computerGuess) {
            hint.textContent = 'Too Low!'
            currentTry++
            pastGuesses.push(guess)
        } else if (guess === computerGuess) {
            hint.textContent = "Correct! Congratulations! You WON!"
            pastGuesses.push(guess)
            return
        }

        PreviousGuess.textContent = 'Previous guess : ' + pastGuesses.join(', ')
        RemainingGuess.textContent = 'Remaining guess : ' + (TotalChances - currentTry)
    })
}

NumberGuessingGame()    