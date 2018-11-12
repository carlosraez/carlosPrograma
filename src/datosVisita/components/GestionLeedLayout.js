import React from 'react';



function GestionLeedLayout(props) {
   return (
     <div className="row">
        <div className="col-12">
           <div className="card">
             <div className="card-header headerCard">
               <h4 className="tituloVisita">Por Favor Pulsa en hacer Visita Cuando Visites al cliente</h4>
             </div>
             <div className="card-body">
               {props.children}
             </div>
            </div>
          </div>
        </div>
   )
}



export default GestionLeedLayout;
