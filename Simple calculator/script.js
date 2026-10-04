const display = document.querySelector('h2')
const buttons = document.querySelectorAll('button')
let string = '';

function clickEvent() {
    buttons.forEach((elements) => {
        elements.addEventListener("click", (e) => {
            keyHandlers(e.target.textContent) 
        }) 
    });
}

document.addEventListener('keydown' , (e) => {
        if(e.key === 'Backspace') {
            keyHandlers('BACKSPACE')
        } else if (e.key === 'Enter') {
            e.preventDefault()
            keyHandlers('ENTER')
        } else if (e.key >= '0' && e.key <= '9') {
            keyHandlers(e.key)
        } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '%' || e.key === '*') {
            keyHandlers(e.key)
        }
})


function keyHandlers(input) {
    if(input === '=' || input === 'ENTER') {

    if (string === '') {
        display.textContent = 'Write something !'
        return
    }

    let result = eval(string)

    if (Number.isNaN(result)) {
        display.textContent = 'Invalid Calculation !'
        string = ''
        return
    }

    string = String(result)
    
    } else if (input === 'AC') {
        string = ''
    } else if (input === '⌫' ||  input === 'BACKSPACE') {
        string = string.slice(0, -1)
    } else if (input === '÷')  {
        string += '/'
    }
    
    else {
        string = string + input
    }
    display.textContent = string.replace(/\*/g, 'x')
}


clickEvent()
