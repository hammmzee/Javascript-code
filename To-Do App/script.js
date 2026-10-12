const myTextBox = document.querySelector('#writing-area')
const myAddTask = document.querySelector('#task-adder')
const myAllTasks = document.querySelector('#all-tasks')
const myActiveTasks = document.querySelector('#active-tasks')
const myCompletedTasks = document.querySelector('#completed-tasks')
const myclearCompleted = document.querySelector('#clear-everything')
const noTasks = document.querySelector('#no-tasks')
const myRemaining = document.querySelector('.task-clearer span')
let tasksArea = document.querySelector('#main-area')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let editingTask = null   // the task currently being edited


// it saves the task in the Local Storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Display every task on the screen
function displayTasks() {
    tasksArea.replaceChildren()   // empty the list first

    // decide which tasks to show, based on the selected filter button
    let filteredTasks = tasks
    if (myActiveTasks.classList.contains('active')) {
        filteredTasks = tasks.filter(task => !task.completed)
    } else if (myCompletedTasks.classList.contains('active')) {
        filteredTasks = tasks.filter(task => task.completed)
    }

    // build one row for each task
    filteredTasks.forEach(task => {
        let newItems = document.createElement('li')
        newItems.style.listStyle = 'none'

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = task.completed

        // show an input box while editing, otherwise normal text
        let taskText
        if (task === editingTask) {
            taskText = document.createElement('input')
            taskText.type = 'text'
            taskText.value = task.text
        } else {
            taskText = document.createElement('span')
            taskText.textContent = task.text
            if (task.completed) {
                taskText.style.textDecoration = 'line-through'
            }
        }

        // edit Button along with the text
        let editButton = document.createElement('button')
        if (task === editingTask) {
            editButton.textContent = 'Save'
        } else {
            editButton.textContent = 'Edit'
        }

        // also delete button along with the text
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'

        // tick / untick
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked
            saveTasks()
            displayTasks()
        })

        // Edit / Save
        editButton.addEventListener('click', () => {
            if (task === editingTask) {
                if (taskText.value.trim() !== '') {
                    task.text = taskText.value.trim()
                }
                editingTask = null
                saveTasks()
            } else {
                editingTask = task
            }
            displayTasks()
        })

        // Event listenner on the delete button
        deleteButton.addEventListener('click', () => {
            DeleteTasks(task)
        })

        newItems.appendChild(checkbox)
        newItems.appendChild(taskText)
        newItems.appendChild(editButton)
        newItems.appendChild(deleteButton)
        tasksArea.appendChild(newItems)
    })

    // Displaying "no items to show if there is no tasks"
    removeNotasks(filteredTasks.length)

    // update the "tasks remaining" counter
    if (myRemaining) {
        let notDone = tasks.filter(task => !task.completed).length
        if (notDone === 1) {
            myRemaining.textContent = '1 task remaining'
        } else {
            myRemaining.textContent = notDone + ' tasks remaining'
        }
    }
}

myAddTask.addEventListener('click', () => {
    addTask()
});

myTextBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        addTask()
    }
})

// Now addTask only adds the data. displayTasks displays it.
function addTask() {
    let text = myTextBox.value.trim()

    if (text === '') {
        return
    }

    tasks.push({
        text: text,
        completed: false
    })

    saveTasks()
    myTextBox.value = ''
    displayTasks()
}

function DeleteTasks(task) {
    tasks = tasks.filter(item => item !== task)
    editingTask = null
    saveTasks()
    displayTasks()
}

// Removes only the completed tasks (button which says "Clear Completed")
function clearCompleted() { 
    tasks = tasks.filter(task => !task.completed)
    editingTask = null
    saveTasks()
    displayTasks()
}

// Shows the "no tasks" message only when there is nothing to display
function removeNotasks(count) {
    if (count === 0) {
        noTasks.style.display = 'block'
    } else {
        noTasks.style.display = 'none'
    }
}

myclearCompleted.addEventListener('click', () => {
    clearCompleted()
})

// Filter buttons =  highlight the clicked one, then Display :)
function setActiveFilter(clickedButton) {
    myAllTasks.classList.remove('active')
    myActiveTasks.classList.remove('active')
    myCompletedTasks.classList.remove('active')
    clickedButton.classList.add('active')
    editingTask = null
    displayTasks()
}

myAllTasks.addEventListener('click', () => setActiveFilter(myAllTasks))
myActiveTasks.addEventListener('click', () => setActiveFilter(myActiveTasks))
myCompletedTasks.addEventListener('click', () => setActiveFilter(myCompletedTasks))

// When the page first loads
myAllTasks.classList.add('active')
displayTasks()