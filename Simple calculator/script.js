let display = document.querySelector('h2')
let buttons = document.querySelectorAll('button')
let string = '';


Array.from(buttons).forEach((elements) => {  
    elements.addEventListener('click' , (e) => {
    keyBoardKeyPress(e.target.textContent )
    })
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace') {
        keyBoardKeyPress('BACKSPACE')
    } else if (e.key === "Enter") {
        e.preventDefault();
        keyBoardKeyPress('ENTER')
    }
})


function keyBoardKeyPress(input) {
    if(input === "=" || input === 'ENTER') {
        string = String(eval(string))
    } else if (input === 'AC') {
        string = '';
    } else if (input === 'x') {
        string = string + '*'
    } else if (input === '÷') {
        string = string + '/'
    } else if (input === '⌫' || input === 'BACKSPACE') {
        string = string.slice(0, -1)
    } else {
        string = string + input
    }
    display.textContent = String(string).replace(/\*/g, 'x')
} 
    