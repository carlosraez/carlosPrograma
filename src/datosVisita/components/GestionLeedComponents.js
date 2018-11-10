import React from 'react';


function GestionLeedComponents(props) {
  return (
    <div>
    <p><strong>Nombre Administrador:</strong> {props.nombreAdministrador}</p>
    <p><strong>tipo de Leed:</strong> {props.tipoLeed}</p>
    <p><strong>Direccion:</strong>  {props.direccion}</p>
    <p><strong>Poblacion:</strong> {props.poblacion}</p>
    <p><strong>Observaciones:</strong> {props.observacionleed}</p>
    <button className="btn btn-success" onClick={props.HandleClicRealizarVisita}>Hacer Visita</button>
    <button className="btn btn-info botonVolver" onClick={props.HandleVolverALista}>Modificar</button>
    <button className="btn btn-info botonVolver" onClick={props.HandleVolverALista}>Volver A Lista</button>
    <button className="btn btn-danger botonVolver" onClick={props.HandleVolverALista}>Borrar</button>
   </div>
  )
}

export default GestionLeedComponents
