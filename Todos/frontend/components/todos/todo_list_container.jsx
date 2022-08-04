import { connect } from "react-redux";
import TodoList from "./todo_list";
import { addTodo, removeTodo } from "../../actions/todo_actions";

const mapStateToProps = state => {

    return {
        todos: Object.values(state.todos)
    }
};

const mapDispatchToProps = dispatch => {

    return {
        addTodo: todo => dispatch(addTodo(todo)),
        removeTodo: todo => dispatch(removeTodo(todo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)