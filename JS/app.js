function loadTodos () {
//     This function will get todos from browser memory if not it will create the one
    const todosCheck = JSON.parse(localStorage.getItem("todos"));

    if (!todosCheck) {
        console.log(todosCheck, "No value is there, created new");
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify({todos: []}));
    }

    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);

}

document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
})