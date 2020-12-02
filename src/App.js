import React, { useState } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { useSelector } from 'react-redux';

/**
 1. När användaren lägger till en ny todo i AddTodo
 2. Skicka "upp" denna todo parent (App) och uppdatera state med
    den nya todo:n
 */


function App(props) {
    const todos = useSelector(state => state.todo.todos);

    const [latestTodo, setLastestTodo] = useState('');

    async function addTodo(todo) {
        console.log('I addTodo: ', todo);  
        setLastestTodo(todo.task);
    }

    return (
        <article className="todo-app">
            <h1>{props.title}</h1>
            <ul className="todo-list">
                { todos.map((todo, index) => {
                    return <TodoItem item={ todo.task } key={ index } id={ todo.id } done={ todo.done } />
                }) }
            </ul>

            <p>Senast tillagda: {latestTodo}</p>

            <AddTodo updateState={addTodo} />
        </article>
    )
}

export default App;
