class Todo {
    constructor(title, user) {
        this.title = title;
        this.user = user;
        this.date = new Date();
        this.done = false;
    }
}
let todos = []; // Array to store to-dos
let done = [];
function rerenderDOM(todos) {
    const todosContainer = document.getElementById('list-group');
    todosContainer.innerHTML = "";
    todos.forEach((todo, index) => {
        todosContainer.innerHTML += '<a href="#" class="list-group-item list-group-item-action" aria-current="true">' +
            '<div class="d-flex w-100 justify-content-between">' +
            '<h5 class="mb-15">' + todo.title + '</h5>' +
            '<small>' + todo.date + '</small>' +
            '</div>' +
            '<div class="d-flex w-100 justify-content-between">' +
            ' <p class="mb-1">Created by ' + todo.user + '</p>' +
            '<button type="button" class="btn btn-success" onclick="markAsDone(' + index + ')">Done</button>' +
            '</div>' +
            '</a>';
    });
    const doneContainer = document.getElementById('done-todos');
    doneContainer.innerHTML = "";
    done.forEach((todo) => {
        doneContainer.innerHTML += '<li class="list-group-item">' + todo.title + '</li>';
    });
}

function addTodo() {
    const todoTitle = document.getElementById('todoTitleInput');
    const todoUser = document.getElementById('todoUserInput');
    todos.push(new Todo(todoTitle.value, todoUser.value));
    console.info(todos);
    rerenderDOM(todos);
    todoTitle.value = "";
    todoUser.value = "";
}

function markAsDone(index) {
    console.info('marking as done this todo ', index);
    const toDeleteTodo = todos[index];
    toDeleteTodo.done = true;
    done.push(toDeleteTodo);
    todos.splice(index, 1);
    rerenderDOM(todos);
}

console.info('app.js script added');