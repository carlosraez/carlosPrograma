import React from 'react';
import './header.css'


function Navegacion (props) {
  return (
      <nav className="navbar navbar-dark bg-dark">
       <a className="navbar-brand empresa">Ascensores Carlos</a>
       <h5 className="empresa" >Bienvenido {props.usuario}</h5>
      <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={props.handleLogOut}>Desconectarse</button>
      </nav>
  )
}

export default Navegacion
