import React from 'react';


function ConfiguradorItemLayout(props) {
   return (
     <div className="card cardStyle" >
        <div className="card-header">
           Básico Normal
        </div>
       <div className="card-body">
       <h1 className="card-title pricing-card-title">60€ <small className="text-muted">/ mes + Iva</small></h1>
       <p className="card-text">Cambia el precio y establece condiciones</p>
       <form>
            <div className="form-group">
             <label htmlFor="formControlRange">Modifica el precio</label>
             <input type="range" className="form-control-range" id="formControlRange" />
              </div>
            <div className="form-group">
               <label htmlFor="formControlRange">Paradas Maximas: 5</label>
               <input type="range" className="form-control-range" id="formControlRange" />
                </div>
            <div className="form-group">
                 <label htmlFor="formControlRange">Incremento por tramo de 5 paradas</label>
                 <input type="number" className="form-control-range" id="formControlRange" />
             </div>
           <button  className="btn btn-outline-info">Guardar Configuracion</button>
        </form>
       </div>
    </div>
   )
}



export default ConfiguradorItemLayout;
