import React from 'react';
import './GestionLeedComponents.css'


function GestionLeedComponents(props) {
  return (
    <div>
       <div className="row">
       <div className="col-12 col-md-6">
    <p><strong>Fecha:</strong><input id="fechaModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/> {props.fechaLeed}</p>
    <p><strong>Nombre Administrador:</strong><input id="nombreAdministradormodi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/> {props.nombreAdministrador}</p>
    <p><strong>Tipo de Leed:</strong><input id="tipoLeedModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/> {props.tipoLeed}</p>
    <p><strong>Direccion:</strong><input id="direccionModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/>  {props.direccion}</p>
    <p><strong>Poblacion:</strong><input id="poblacionModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/> {props.poblacion}</p>
       </div>
       <div className="col-12 col-md-6">
    <p><strong>Nombre Presidente:</strong><input id="nombrePresidenteModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="text"/> {props.nombrePresidente}</p>
    <p><strong>Telefono Presidente:</strong><input id="telefonoPresidenteModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar} type="number"/> {props.telefonoPresidente}</p>
    <p><strong>Observaciones:</strong><textarea id="observacionesModi" onChange={props.handleChangeModi} className={props.cssEdicionModificar}></textarea> {props.observacionleed}</p>
    <button className={'btn btn-success'}  onClick={props.handleClickGuardarModificacion} >Guardar Modificacion</button>
        </div>
        </div>
    <button className="btn btn-success" onClick={props.HandleClicRealizarVisita}>Hacer Visita</button>
    <button className="btn btn-info botonVolver" onClick={props.HandleClickModificar}>Modificar</button>
    <button className="btn btn-info botonVolver" onClick={props.HandleVolverALista}>Volver A Lista</button>
    <button className="btn btn-danger botonVolver" onClick={props.HandleVolverALista}>Borrar</button>
  </div>
  )
}

export default GestionLeedComponents
