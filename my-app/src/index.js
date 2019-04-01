import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './helloWorld';
import * as serviceWorker from './serviceWorker';



// console root =
// ReactDOM.render(<App />, document.getElementById('root'));
const root = document.querySelector('#root');


 
ReactDOM.render(<HelloWorld name='vue.js'/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
