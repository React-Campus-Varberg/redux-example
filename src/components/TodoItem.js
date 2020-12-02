import React from 'react';
import { useDispatch } from 'react-redux';
import { updateDone } from '../actions';

// {item} - kallas för destructering och kan användas för att plocka ut en egenskap från props-objektet
function TodoItem(props) {
    console.log(props);
    const dispatch = useDispatch();

    return (
        <li className={'todo-item' + (props.done ? ' done' : '' )}
            onClick={ () => dispatch(updateDone(props.id)) }>
                { props.item }
        </li>
    )
}

export default TodoItem;