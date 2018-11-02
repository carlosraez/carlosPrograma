import React from 'react';
import './AltaAdministradorLayout.css'


function AltaAdministradorLayout(props) {
   return (
     <div className="row">
        <div className="col md-12">
           <div className="card">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">Busca el administrador o dalo de Alta</h4>
             </div>
             <div className="card-body">
               {props.children}
             </div>
             <button className="btn btn-info btn-block" onClick={props.handleClickAlta}>Dar de Alta</button>
            </div>
          </div>
        </div>
   )
}



export default AltaAdministradorLayout
