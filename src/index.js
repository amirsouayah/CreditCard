import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const greeting = React.createElement('h1',{},'Hello World')
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
