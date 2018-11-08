import React from 'react';


function LeedMantenimiento(props) {
   return (
     <div>
       <div className="row">
       <div className="col-12">
       <div>
          <div className="form-group">
             <label>Direccion</label>
             <input type="text" id="direccionLeed" onChange={props.handleChange}  className="form-control" />
             <label>Poblacion</label>
             <input type="text" id="poblacionLeed" onChange={props.handleChange}  className="form-control" />
             <label>Mantenedor</label>
             <input type="text" id="mantenedorLeed" onChange={props.handleChange}  className="form-control" />
             <label>Presidente</label>
             <input type="text" id="nombrePresidenteLeed" onChange={props.handleChange}  className="form-control" />
             <label>Telefono Presidente</label>
             <input type="text" id="telefonoPresidenteLeed" onChange={props.handleChange}  className="form-control" />
             <label >Escribe Alguna Observacion que detectes...</label>
            <textarea className="form-control" id="observacionLeedManimiento" onChange={props.handleChange} rows="3"></textarea>
           </div>
            <button className="btn btn-success btn-block" onClick={props.HandleClickGuardarLeedMantenimiento}>Guardar</button>
          </div>
        </div>
       </div>
     </div>

   )
}



export default LeedMantenimiento;
