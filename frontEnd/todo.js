class Todo {

    constructor(title, user) {
        this.title = title;
        this.user = user;
        this.done = false;
        this.date = new Date();
    }
}
let todos = new Array();
let done = new Array();
/**
 * This method will add todo element in our html page 
 */
function addTodo() {
    const todoTitleElement = document.getElementById('todoTitleInput');
    const todoUsernameElement = document.getElementById('todoUserInput');

    // todos.push(new Todo(todoTitleElement.value, todoUsernameElement.value))

    // localStorage.setItem('TODOS_DB', JSON.stringify(todos));

    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/todos";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var backEndTodos = JSON.parse(this.responseText);
            console.info('backend response post ', backEndTodos);
            if (!!backEndTodos) {
                todos = backEndTodos
            }
            reRenderUI();
            todoTitleElement.value = "";
            todoUsernameElement.value = "";

        }
    };
    xmlhttp.open("POST", url, true);

    xmlhttp.send(JSON.stringify({
        title: todoTitleElement.value,
        user: todoUsernameElement.value
    }));

}

/**
 * Method to mark todo as done
 * @param {number} index index of todo element in the array
 */
const markAsDone = (index) => {
    const toDeleteTodo = todos[index];
    toDeleteTodo.done = true;
    done.push(toDeleteTodo);
    todos.splice(index, 1);
    localStorage.setItem('TODOS_DB', JSON.stringify(todos));
    localStorage.setItem('DONE_DB', JSON.stringify(done));
    reRenderUI();
}

/**
 * This method will re-render our UI
 */
function reRenderUI() {
    //re-render todos list
    reRenderTodosList();

    // re-render done list
    reRenderDoneList();

}

/**
 * reRender done list method
 */
function reRenderDoneList() {
    const doneTodosElement = document.getElementById('done-todos');
    doneTodosElement.innerHTML = "";
    done.forEach((todo) => doneTodosElement.innerHTML += `<li class="list-group-item">${todo.title}</li>`);
    if (done.length === 0) {
        doneTodosElement.innerHTML = `
        <div class="alert alert-warning" role="alert">
  No done todo item found 
</div>`;
    }
}

/**
 * reRender Todos list method
 */
function reRenderTodosList() {
    const listTodosElement = document.getElementById('list-todos');
    listTodosElement.innerHTML = "";
    todos.forEach((todo, index) => {
        listTodosElement.innerHTML += `<a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-15">${todo.title}</h5>
                <small>${todo.date}</small>
            </div>
            <div class="d-flex w-100 justify-content-between">
                <p class="mb-1">Created by ${todo.user}</p>
                <button type="button" class="btn btn-success" onclick="markAsDone(${index})">Done</button>
            </div>
        </a>`;
    });

    if (todos.length === 0) {
        listTodosElement.innerHTML = `
        <div class="alert alert-warning" role="alert">
  No Todo item found
</div>`;
    }
}

const loadDataFromDB = () => {
    const strigifiedTodos = localStorage.getItem('TODOS_DB');
    const strigifiedDoneTodos = localStorage.getItem('DONE_DB');
    if (!!strigifiedTodos) {
        todos = JSON.parse(strigifiedTodos);
    }
    if (!!strigifiedDoneTodos) {
        done = JSON.parse(strigifiedDoneTodos);
    }
}

const loadDataFromBackend = () => {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/todos";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var backEndTodos = JSON.parse(this.responseText);
            console.info('backend response ', backEndTodos);
            if (!!backEndTodos) {
                todos = backEndTodos
            }
            reRenderUI();

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

loadDataFromBackend();


