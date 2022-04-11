import React from 'react';
//for React 18
// import {createRoot} from 'react-dom/client';
//for React 17
import ReactDOM from 'react-dom';
import App from './App.js';
//For new react 18
// const container = document.getElementById('app');
// const root = createRoot(container);

// root.render(<App/>, container, function() {
//     //called after initial render
//     console.log('App has been rendered')
// });
//for react 17 which will work just fine
const container = document.getElementById('root');

ReactDOM.render(<App/>, container, function() {
    //called after initial render
    console.log('App has been rendered')
});