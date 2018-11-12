import React  from 'react';
import './datosVisita.css'

function DatosVisita(props) {
   return (
     <div>
       <div className="row">
         <div className="col-md-6">
           <div className="form-group">
              <label>Direccion del Ascensor</label>
              <input type="text" id="calle"  onChange={props.handleChange} placeholder=" Nombre de la calle" className="form-control" / >
           </div>
           <div className="form-group">
              <label>Poblacion</label>
              <input type="poblacion" step="0.01" onChange={props.handleChange} id="poblacion" placeholder="Poblacion" className="form-control" />
           </div>
           <div className="form-group">
              <label>Codigo Postal</label>
              <input type="number" id="postal" onChange={props.handleChange} defaultValue="46000" min="00000" max="99999" placeholder="Codigo Postal" className="form-control" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-group">
              <label>Nombre del Presidente</label>
              <input type="text" id="nombrePresidente" onChange={props.handleChange} placeholder="Nombre Presidente y Pta" className="form-control" />
           </div>
           <div className="form-group">
             <label>Telefono del Presidente</label>
              <input type="number" id="telefonoPresidente" onChange={props.handleChange} placeholder="Telefono del Presidente" className="form-control" />
           </div>
           <div className="form-group">
             <label>Email Presidente</label>
              <input type="email" id="emailPresidente" onChange={props.handleChange} placeholder="Correo Electronico Presidente" className="form-control" />
           </div>
         </div>
       </div>
    <input type="submit"  onClick={props.handleClickDatosVisita} className="btn btn-info btnContinuar" value="Continuar" />
  </div>
   )
}





export default DatosVisita
