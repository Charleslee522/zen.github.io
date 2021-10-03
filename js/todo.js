const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function getSavedTodos() {
    const todos = localStorage.getItem(TODOS_KEY);
    if (todos === null) return [];
    else return JSON.parse(todos);
}

function saveTodos(todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintSavedToDos() {
    paintToDos(getSavedTodos());
}

function insert(newTodoObj) {
    const savedTodos = getSavedTodos();
    savedTodos.push(newTodoObj);
    
    saveTodos(savedTodos);
}

function onBtnClick(event) {
    const li = event.target.parentElement;
    li.remove();
    const todos = getSavedTodos().filter(element => {
        return parseInt(li.id) !== element.id;
    })
    saveTodos(todos);
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", onBtnClick);
    li.appendChild(button);

    const span = document.createElement("span");
    span.innerText = ' ' + newTodoObj.text;
    li.appendChild(span);

    toDoList.appendChild(li);
}

function paintToDos(toDos) {
    if (toDos === null) return;
    toDos.forEach((element) => {
        paintToDo(element);
    })
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    insert(newTodoObj);
    paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
paintSavedToDos();
