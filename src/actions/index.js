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