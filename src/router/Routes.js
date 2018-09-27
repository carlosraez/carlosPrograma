import React, { Component } from "react";
import App from '../App.js'
import Dashboard from '../dashboard/container/dashboard.js'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import firebase from 'firebase';
import PrivateRoute from './Private.js'

class RutasApp extends Component {
  state =
   {
     authenticated: false,
     user: null
   };

 componentWillMount() {
 firebase.auth().onAuthStateChanged(user => {
   if (user) {
     this.setState({
       authenticated: true,
       currentUser: user,
     });
   } else {
     this.setState({
       authenticated: false,
       currentUser: null,
     });
       }
    });

  }

  render() {
    const { authenticated } = this.state

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/Dashboard"
            component={Dashboard}
            authenticated={authenticated}
          />
          <Route exact path="/"  component={App} />
        </div>
      </Router>
    )
  }
}




export default RutasApp
