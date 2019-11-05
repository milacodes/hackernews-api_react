import React from 'react';
//grabbing just render instead of ReactDOM
import {render} from 'react-dom';
//using named import instead of just 'App' because I'm importing single function named App
import {App} from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.register();
