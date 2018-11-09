import React from 'react';
import './visitaLayout.css'


function VisitaLayout(props) {
   return (
     <div className="row">
        <div className="col md-12">
           <div className="card">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">Aqui tienes la informacion Actual</h4>
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
