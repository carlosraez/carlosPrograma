import React from 'react';


function ConfiguradorItemPrecioLayout(props) {
   return (
     <div className="card cardStyle" >
        <div className="card-header">
           {props.nombre}
        </div>
       <div className="card-body">
       <h1 className="card-title pricing-card-title">{props.precioBasicoOfertaTotal}€ <small className="text-muted">/ mes + Iva</small></h1>
       <p className="card-text">Cambia el precio y establece condiciones</p>
       <form>
           {props.children}
        </form>
       </div>
    </div>
   )
}



export default ConfiguradorItemPrecioLayout;
