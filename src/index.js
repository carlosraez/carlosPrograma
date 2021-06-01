import React from 'react';
import ReactDOM from 'react-dom';
import RutasApp from './router/Routes.js'
import firebase from 'firebase/app'
import registerServiceWorker from './registerServiceWorker';

var config = {
 apiKey: "",
 authDomain: "crm-ascensores-71c08.firebaseapp.com",
 databaseURL: "https://crm-ascensores-71c08.firebaseio.com",
 projectId: "crm-ascensores-71c08",
 storageBucket: "crm-ascensores-71c08.appspot.com",
 messagingSenderId: "794706743230"
};

export const firebaseApp = firebase.initializeApp(config)

ReactDOM.render(<RutasApp />, document.getElementById('home-container'));
registerServiceWorker();
