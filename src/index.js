import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyABsPapd8O9TfbMtdRwczCtsvcN1K3SeuI",
    authDomain: "freegram-d6640.firebaseapp.com",
    databaseURL: "https://freegram-d6640.firebaseio.com",
    projectId: "freegram-d6640",
    storageBucket: "freegram-d6640.appspot.com",
    messagingSenderId: "287037150898"
})

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
