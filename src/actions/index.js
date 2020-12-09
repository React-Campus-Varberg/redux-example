export const addTodo = (todo) => {
    return {
        type: 'ADD',
        payload: todo
    }
}

export const updateDone = (id) => {
    return {
        type: 'UPDATE',
        payload: id
    }
}

export const getTodos = (todos) => {
    return {
        type: 'FETCH_TODOS',
        payload: todos
    }
}