import React from "react";
import ToDoListContainer from './todos/todo_list_container';
import TodoFormContainer from "./todos/todo_form_container";


const App = () => {
    return (
        <div>
            <ToDoListContainer />
            <TodoFormContainer />
        </div>
    )
}

export default App;