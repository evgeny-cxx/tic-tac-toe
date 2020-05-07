import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let title = "Крестики-Нолики";
let contacts = ['Copyright by cxx_BY', "+375298174777", "evgeny.cxx@gmail.com"];

ReactDOM.render(
  <React.StrictMode>
    <App title={title}
      contacts={contacts}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
