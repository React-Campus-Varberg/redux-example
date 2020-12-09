import { getTodos, addTodo } from '../actions';

export function fetchTodos() {
    return async dispatch => {
        const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
        const data = await response.json();
        dispatch(getTodos(data));

        return data;
    }
}

export function postTodo(todo) {
    const settings = { 
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        } 
    }

    return async dispatch => {
        const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks', settings);
        const data = await response.json();
        dispatch(addTodo(todo.task));

        return data;
    }
}