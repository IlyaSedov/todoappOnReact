import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ToDoList from './components/ToDoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <ToDoList />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
