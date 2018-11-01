import React from 'react';
import './AltaAdministradorLayout.css'


function AltaAdministradorLayout(props) {
   return (
     <div className="row">
        <div className="col md-12">
           <div className="card">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">Completa los Campos</h4>
             </div>
             <div className="card-body">
               {props.children}
             </div>
            </div>
          </div>
        </div>
   )
}



export default AltaAdministradorLayout
