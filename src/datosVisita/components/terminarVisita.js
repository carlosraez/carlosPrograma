import React from 'react';
import './terminarVisita.css'




function TerminarVisita(props) {
   return (
     <div>
       <div className="row">
         <div className="col-md-3">
           <div className="form-group">
             <label>Marca del Ascensor</label>
            <input type="text" id="marca" onChange={props.handleChange} placeholder="Marca del Ascensor" className="form-control" />
              <div className="form-group">
                 <label>Empresa Mantenedora del Ascensor</label>
                 <input type="text" id="mantenedor" onChange={props.handleChange} placeholder="Mantenedor" className="form-control" />
              </div>
              <div className="form-group">
                    <label>Fecha de la ultima Inspeccion de Industria</label>
                    <input type="date" id="oca" onChange={props.handleChange}  className="form-control" />
              </div>
           </div>
         </div>
         <div className="col-md-3">
           <label>¿Cuanto es problable que se contrate?</label>
           <select multiple className="form-control" id="interes" onChange={props.handleChange}>
                <option defaultValue="Muy Interesados">Muy Interesados</option>
                <option defaultValue="Medio Interes">Medio Interes</option>
                <option defaultValue="Poco Interes">Poco Interes</option>
           </select>
         </div>
         <div className="col-md-3">
           <div className="form-group">
              <label>Fecha de La Proxima Accion</label>
              <input type="date" id="proxVisita" onChange={props.handleChange}  className="form-control" />
           </div>
         </div>
         <div className="form-group">
         <label >¿Como has quedado?</label>
          <textarea className="form-control" onChange={props.handleChange} id="textoInfoVista" rows="3"></textarea>
          </div>
          </div>
           <div className="row">
          <div className="col md-6">
           <button onClick={props.guardarYTerminar} className="btn btn-success btn-block">Terminar y Terminar</button>
           </div>
       </div>
     </div>

   )
}



export default TerminarVisita;
