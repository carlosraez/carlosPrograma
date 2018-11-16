import React from 'react';
import './AgendaComponent.css'


function AgendaComponentLayaout(props) {
   return (
           <div className="card cardStyle">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">{props.nombre}</h4>
             </div>
             <div className="card-body">
               {props.children}
             </div>
            </div>
   )
}



export default AgendaComponentLayaout
