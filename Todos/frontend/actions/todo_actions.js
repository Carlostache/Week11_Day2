export const ADD_TODOS = "ADD_TODOS";

export const addTodos = (todos) => {
    return {
    type: ADD_TODOS,
    todos
    }
}

export const ADD_TODO = "ADD_TODO;"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: todo
    }
}

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo: todo
    }
}