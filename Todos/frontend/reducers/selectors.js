import { connect } from "react-redux";

const allTodos = (state) => {
    return Object.values(state.todos);
}

export default allTodos;