const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
}


function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✘";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);  -> <li><span>newTodo text</span></li>
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);

    // input의 현재 value를 새로운 변수에 복사하는 것
    const newTodo = toDoInput.value;

    // toDoInput.value 비워져도 newTodo 값이 비워지는것은 아님 
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach(sayHello);
}