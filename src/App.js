import React, { useState, useEffect } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './api';
import './App.css';

/**
 1. När användaren lägger till en ny todo i AddTodo
 2. Skicka "upp" denna todo parent (App) och uppdatera state med
    den nya todo:n
 */


function App(props) {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const [latestTodo, setLastestTodo] = useState('');

    async function addTodo(todo) {
        console.log('I addTodo: ', todo);  
        setLastestTodo(todo.task);
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

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
