import React from 'react';
import './visitaLayout.css'


function VisitaLayout(props) {
   return (
     <div className="row">
        <div className="col md-12">
           <div className="card">
             <div className="card-header headerCard">
               <button type="button" onClick={props.handleClickDash} className="btn btn-info ">Menu Principal</button>
               <h4 className="tituloVisita">Completa tu Visita</h4>
             </div>
             <div className="card-body">
               {props.children}
             </div>
            </div>
          </div>
        </div>
   )
}



export default VisitaLayout;
