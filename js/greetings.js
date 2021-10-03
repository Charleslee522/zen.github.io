const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function paintGreeting(savedUsername) {
    loginForm.classList.add(HIDDEN);
    greeting.innerText = `Hello ${savedUsername}!`;
    greeting.classList.remove(HIDDEN);

    userLogedIn();
}

function userLogedIn() {
    todoForm.classList.remove(HIDDEN);
}

function onSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.addEventListener("submit", onSubmit);
} else {
    paintGreeting(savedUsername);
}

