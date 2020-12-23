import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './reducer/Reducer';

let initState = [
    {
        id: 1,
        first: "Pavithra",
        last: "A S",
        email: "pavithra@gmail.com",
        mobile: "9988774455"
    },
    {
        id:2,
        first: "Mahesh",
        last: "Kumar",
        email: "mahesh@gmail.com",
        mobile: "8877445522"
    },
    {
        id:3,
        first: "Deepika",
        last: "D",
        email: "deepika@gmail.com",
        mobile: "9988665544"
    }
  ];

  if(localStorage.getItem("users") === null) {
      //if their is no data
      localStorage.setItem("users", JSON.stringify(initState));
  } else {
    // return the data
    initState = JSON.parse(localStorage.getItem("users"));
  }

  // create store const
  const store  = createStore(userReducer,initState);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
