import React from 'react';
import './AgendaComponent.css'


function AgendaComponentLayaout(props) {
   return (
           <div className="card cardStyle">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">{props.nombre}</h4>
             </div>
             <div className="card-body">
             <h5 className="card-title">{props.fechaActual}</h5>
             <p className="card-text"><button className="btn btn-info" onClick={props.handleClickAnterior} >{props.verAnterior}</button> | <button className="btn btn-info" onClick={props.handleClickSiguiente}  >{props.verSiguiente}</button>  {props.mes}</p>

               {props.children}
             </div>
            </div>
   )
}



export default AgendaComponentLayaout
