import React from "react";
import ReactDOM from 'react-dom';
import { addTodos, addTodo, removeTodo } from "../frontend/actions/todo_actions";
import configureStore from "./store/store";
import App from './components/app';
import Root from './components/root';
import allTodos from './reducers/selectors';
import TodoList from './components/todos/todo_list'


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")

    const todoStore = configureStore()
    window.store = todoStore;
    window.addTodos = addTodos;
    window.addTodo = addTodo;
    window.removeTodo = removeTodo;
    window.allTodos = allTodos;
    ReactDOM.render(<Root />, content)
})