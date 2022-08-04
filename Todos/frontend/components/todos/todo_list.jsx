import React from "react";
import ToDoListItem from "./todo_list_item";
import { addTodo, removeTodo } from "../../actions/todo_actions";

const TodoList = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
                <ul>
                    {
                        props.todos.map(todo => {
                            return <ToDoListItem key={todo.id} todo={todo} addTodo={addTodo} removeTodo={props.removeTodo}/>})
                    }
                </ul>
        </div>
    )
};

export default TodoList;