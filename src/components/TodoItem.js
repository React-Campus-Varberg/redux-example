import React from 'react';
import { useDispatch } from 'react-redux';
import { updateDone } from '../actions';
import styles from  './todo-item.module.css';

// {item} - kallas för destructering och kan användas för att plocka ut en egenskap från props-objektet
function TodoItem(props) {
    console.log(props);
    const dispatch = useDispatch();

    return (
        <li className={styles.item + ' ' + (props.done ? styles.done : '' )}
            onClick={ () => dispatch(updateDone(props.id)) }>
                { props.item }
        </li>
    )
}

export default TodoItem;