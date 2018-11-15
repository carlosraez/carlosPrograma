import React from 'react';


function ConfiguradorItemPrecioLayout(props) {
   return (
     <div className="card cardStyle" >
        <div className="card-header">
           {props.nombre}
        </div>
       <div className="card-body">
       <h3 className="card-title pricing-card-title">{props.precioBasicoOfertaTotal}€ <small className="text-muted">/ mes + Iva Básico</small></h3>
       <h3 className="card-title pricing-card-title">{props.precioSemiRiesgoOfertaTotal}€ <small className="text-muted">/ mes + Iva SemiRiesgo</small></h3>
       <h3 className="card-title pricing-card-title">{props.precioTodoRiesgoOfertaTotal}€ <small className="text-muted">/ mes + Iva TodoRiesgo</small></h3>
       <p className="card-text">Cambia el precio y establece condiciones</p>
       <form>
           {props.children}
        </form>
       </div>
    </div>
   )
}



export default ConfiguradorItemPrecioLayout;
