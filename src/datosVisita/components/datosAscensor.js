import React from 'react';
import FileUpload from '../../fileUpload/container/index.js'
import './datosAscensor.css'

function DatosAscensor(props) {
   return (
     <div>
     <div className="form-group">
     <h2>Escribe los datos de cada Ascensor</h2><h3>Numero de Ascensores Añadidos: <span>{props.cantidadDeAscensoresIncluidos}</span></h3>
     </div>
     <form id="formulario-ascensor" className="card-body">
       <div className="row">
         <div className="col-md-3">
           <div className="form-group">
               <label>Numero de Personas</label>
              <input type="number" id="personas" onChange={props.handleChange}  placeholder="Introduce las Personas" className="form-control" / >
           </div>
           <div className="form-group">
              <label>Paradas del Ascensor</label>
              <input type="number" onChange={props.handleChange} id="paradas"  placeholder="Introduce la cantidad de Paradas" className="form-control" />
           </div>
         </div>
         <div className="col-md-3">
           <div className="form-group">
              <label>¿Puertas de Piso?</label>
              <input type="text" onChange={props.handleChange} id="puertasPiso"  placeholder="Puertas de Piso y su paso libre" className="form-control" />
           </div>
           <div className="form-group">
              <label>¿Puertas de Cabina?</label>
              <input type="text" onChange={props.handleChange} id="puertasCabina"  placeholder="Puertas de Cabina y su paso libre" className="form-control" />
           </div>
         </div>
         <div className="col-md-3">
           <div className="form-group">
               <label>Nº de Rae</label>
              <input type="number" id="rae" onChange={props.handleChange}  placeholder="0000"  className="form-control" />
           </div>
         </div>
         <div className="col-md-3">
           <label>Embarques</label>
           <select multiple className="form-control" id="embarques" onChange={props.handleChange}>
                <option defaultValue="embarqueUnico">Embarque Unico</option>
                <option defaultValue="embarque90">Doble Embarque a 90 Grados</option>
                <option defaultValue="embarque180">Doble Embarque a 180 Grados</option>
           </select>
         </div>
       </div>
       <div className="row">
         <div className="col-12 col-md-6">
           <label>Maquina o Tracción</label>
           <select multiple className="form-control" id="maquina" onChange={props.handleChange}>
                <option defaultValue="hidraulico">Ascensor Hidraulico</option>
                <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad</option>
                <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad con Variador de Freqüencia</option>
                <option defaultValue="maquina2Velocidades">Maquina 2 Velocidades</option>
                <option defaultValue="maquina2VelocidadesConVariador">Maquina 2 Velocidades Con Variador de Freqüencia</option>
                <option defaultValue="Maquina2VelocidadesGerarless">Maquina 2 Velocidades Gearless</option>
                <option defaultValue="Maquina2VelocidadesCintasPlanas">Maquina 2 Velocidades Cintas Planas</option>
           </select>
         </div>
         <div className="col-12 col-md-6">
           <label >Escribe Alguna Observacion que detectes...</label>
          <textarea className="form-control" id="observacionAscensor" onChange={props.handleChange} rows="3"></textarea>
         </div>
       </div>
       <div className="row rowFileUpload">
         <div className="col-12">
             <FileUpload
             imagenesAscensor={props.imagenesAscensor}
             />
         </div>
       </div>
     </form>
     <div className="row">
    <div className="col md-6">
       <input type="submit" onClick={props.handleClickSiguienteAscensor} className="btn btn-primary btnContinuar" value="Siguiente Ascensor" />
     </div>
   </div>
   </div>
   )
}



export default DatosAscensor;
