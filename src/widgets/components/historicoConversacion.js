import React from 'react'
import './historicoConversacion.css'


function ModalHistoricoConversacion(props) {
  return (
   <div>
    <button type="button" onClick={props.handleClickVolverModal}  className="btn btn-info botonVolverAModal">Volver A Visita</button><h3 className="tituloHistorico">Historico Conversaciones</h3>
    <ul className="list-group">
      <li className="conversacion list-group-item">{props.fechaConversacionAntigua}: {props.conversacionAntigua}<span><button type="button" className="btn btn-danger btn-sm">Borrar</button></span></li>
     </ul>
   </div>
  )
}

export default ModalHistoricoConversacion
