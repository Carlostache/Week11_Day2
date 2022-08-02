import React from "react";
import ReactDOM from 'react-dom';
import { addTodos, addTodo, removeTodo } from "../frontend/actions/todo_actions";
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")

    const todoStore = configureStore()
    window.store = todoStore;
    window.addTodos = addTodos;
    window.addTodo = addTodo;
    window.removeTodo = removeTodo;
    ReactDOM.render(<h1>Todos</h1>, content)
})