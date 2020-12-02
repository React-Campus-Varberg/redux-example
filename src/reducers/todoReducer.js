const initialState = {
    todos: []
}

let id = 0;

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id++,
                        task: action.payload,
                        done: false
                    }
                ]
            }
        case 'UPDATE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo;
                    }

                    return {
                        ...todo,
                        done: !todo.done
                    }
                })
            }
        default:
            return state;
    }
}

export default todoReducer;