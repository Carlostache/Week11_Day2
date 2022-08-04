import React from "react";
import { removeTodo } from "../../actions/todo_actions";

class ToDoListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.removeTodo({id: this.props.todo.id});
    }

    render() {
        return (
        <li>
            Title: {this.props.todo.title} <button onClick={this.handleClick}>Delete</button>
        </li>
        )
    }
}

export default ToDoListItem;
