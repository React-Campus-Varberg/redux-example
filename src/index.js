import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//REDUX EXEMPEL

// //Reducers
// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + action.payload
//     default: 
//       return state; 
//   }
// }

// //Store
// const store = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// //Actions
// const increment = (count) => {
//   return {
//     type: 'INCREMENT',
//     payload: count
//   }
// }

// //Dispatch
// store.dispatch(increment(1));
// store.dispatch(increment(1));

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
