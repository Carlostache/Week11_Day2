import { ADD_TODO, ADD_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

// const todosReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);

    switch(action.type) {
        case ADD_TODOS:
            for (var todo in nextState) delete nextState[todo];
            for (const todo of action.todos) {
                nextState[todo.id] = todo
            }
        return nextState;

        case ADD_TODO:
            nextState[action.todo.id] = action.todo
        return nextState;

        case REMOVE_TODO:
            delete nextState[action.todo.id];
        return nextState;

        default: 
            return state;
    }
}




export default todosReducer;