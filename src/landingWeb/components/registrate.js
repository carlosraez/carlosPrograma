import React from 'react';



function Registrate (props) {
  return (
    <div className="card-body">
       <form id="formulario-sesion" className="card-body" >
       <h3>Puedes Registrarte Ahora</h3>
         <div className="form-group">
            <input type="text" id="nombre" onChange={props.handleInput} placeholder="Nombre y Apellidos" className="form-control" / >
         </div>
       <div className="form-group">
          <input type="email" id="email" onChange={props.handleInput} placeholder="Correo Electronico" className="form-control" / >
       </div>
       <div className="form-group">
          <input type="pasword" id="contraseña" onChange={props.handleInput} placeholder="Contraseña" className="form-control" / >


       </div>
       <div className="form-group">
          <input type="pasword" id="contraseñaFinal" placeholder="Repite Contraseña" className="form-control" / >
       </div>
       <input type="submit" className="btn btn-primary btn-block" value="Registrate"  onClick={props.handleSignup}/>
      </form>
    </div>

  )
}

export default Registrate
