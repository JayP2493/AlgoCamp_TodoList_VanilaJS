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
    const todos = loadTodos().todoList;
    if (!(todos.length !== 0 && todos[todos.length-1] !== todoText)) {
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    console.log(todos);
}


document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
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
        console.log(event.target.value);
    })
})