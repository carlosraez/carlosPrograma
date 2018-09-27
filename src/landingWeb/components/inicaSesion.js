import React from 'react';



function IniciaSesion (props) {
  return (
    <div className="card-body">
        <form id="formulario-sesion" className="card-body">
        <h3>Inicia sesion</h3>
        <div className="form-group">
           <input type="text" id="email" onChange={props.handleInput} placeholder="Correo Electronico" className="form-control" / >
        </div>
        <div className="form-group">
           <input type="pasword" id="contraseña" onChange={props.handleInput} placeholder="Contraseña" className="form-control" / >
        </div>
        <input type="submit" onClick={props.handleSubmitLogin} className="btn btn-primary btn-block" value="Inicia Sesion" />
       </form>
     </div>
  )
}

export default IniciaSesion
