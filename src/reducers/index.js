import todoReducer from './todoReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});

export default reducer;