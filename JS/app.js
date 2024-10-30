function loadTodos () {
//     This function will get todos from browser memory if not it will create the one
    const todosCheck = JSON.parse(localStorage.getItem("todos"));

    if (!todosCheck) {
        console.log(todosCheck, "No value is there, created new");
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify({todoList: []}));
    }
    return JSON.parse(localStorage.getItem("todos"));
}

function addTodoToLocalStorage(todoText) {
    const todoTmp = loadTodos().todoList;
    if ((!(todoTmp.length !== 0 && todoTmp[todoTmp.length-1] === todoText)) && !duplicateChecker(todoText,todoTmp)) {
        todoTmp.push(todoText);
        localStorage.setItem("todos", JSON.stringify({todoList: todoTmp}));
        document.getElementById("todoInput").value = "";
        addTaskToHTML(todoText);
    } else {
        alert("This task is already present in task list please add another task!!")
    }
}

function duplicateChecker (text,arr) {
    for (const textElement of arr) {
        if (textElement === text) {
            return true;
        }
    }
}

function addTaskToHTML (todoText) {
    const todoList = document.getElementById("taskList");
    const task = document.createElement("li");
    task.textContent = todoText;
    todoList.appendChild(task);
}

function addOldTask () {
    let arr = loadTodos().todoList;
    if (arr.length > 0) {
        for (const arrElement of arr) {
            addTaskToHTML(arrElement);
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
    addOldTask();
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");

    submitButton.addEventListener("click", (event ) => {
        const todoText = todoInput.value;
        if (todoText === '') {
            alert("Please write something in ToDo text area");
        } else {
            addTodoToLocalStorage(todoText);
        }
    })

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value;
        event.target.value = todoText.trim();
    })
})