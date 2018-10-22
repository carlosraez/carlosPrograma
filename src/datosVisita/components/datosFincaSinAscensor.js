import React from 'react';
import FileUpload from '../../fileUpload/container/index.js'
import './datosFincaSinAscensor.css'


function FincaSinAscensor(props) {
   return (
     <div>
     <div className="form-group">
     <h3>Informacion del Edificio Sin Ascensor</h3>
     <h5 className="textoInfo">Escribe los datos de la obra, Si van dos ascensores añade el siguiente</h5><h5>Numero datos Incluidos: <span>{props.cantidadDeAscensoresIncluidos}</span></h5>
     </div>
     <form id="formulario-ascensor" className="card-body">
       <div className="row">
         <div className="col-md-3">
           <div className="form-group">
               <label>Numero de Paradas</label>
              <input type="number" id="personas" onChange={props.handleChange}  placeholder="4" className="form-control" / >
           </div>
           <div className="form-group">
              <label>Ancho Hueco</label>
              <input type="number" onChange={props.handleChange} id="anchoHueco"  placeholder="" className="form-control" />
           </div>
           <div className="form-group">
              <label>Fondo Hueco</label>
              <input type="number" onChange={props.handleChange} id="fondoHueco"  placeholder="" className="form-control" />
           </div>
         </div>
         <div className="col-md-3">
         <div className="form-group">
          <label>Embarques</label>
          <select multiple className="form-control" id="embarques" onChange={props.handleChange}>
               <option defaultValue="embarqueUnico">Embarque Unico</option>
               <option defaultValue="embarque90">Doble Embarque a 90 Grados</option>
               <option defaultValue="embarque180">Doble Embarque a 180 Grados</option>
          </select>
         </div>
         </div>
         <div className="col-md-3">
           <label >Escribe Alguna Observacion que detectes...</label>
          <textarea className="form-control" id="observacionAscensor" onChange={props.handleChange} rows="3"></textarea>
         </div>
       </div>
       <FileUpload
       imagenesAscensor={props.imagenesAscensor}
       />
     <div className="row">
    <div className="col md-6">
       <input type="submit" onClick={props.handleClickSiguienteAscensor} className="btn btn-primary" value="Guarda los datos finca sin Ascensor" />
     </div>
   </div>
</form>
    </div>
   )
}



export default FincaSinAscensor;
