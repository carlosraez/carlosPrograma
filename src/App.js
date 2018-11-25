import React, { Component } from 'react';
import Landing from './landingWeb/container/landing.js'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nabar-light bg-light">
           <a className="navbar-brand" href="">Aplicacion para Comerciales de Ascensores</a>
        </nav>
       <Landing />
      </div>
    );
  }
}

export default App;
