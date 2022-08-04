import { connect } from "react-redux";
import TodoForm from "./todo_form";
import { addTodo } from "../../actions/todo_actions";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    }
};

export default connect(null, mapDispatchToProps)(TodoForm)