import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



// axios.defaults.baseURL = 'https://api.instagram.com/v1/users/self/media';
// axios.defaults.headers.common['Authorization'] = '?access_token=285502478.8001032.48720ae4588d48c9be566f37274a24ff';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
