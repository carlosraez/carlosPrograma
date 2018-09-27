import React  from 'react';
import './datosVisita.css'

function DatosVisita(props) {
   return (
     <div>
       <div className="row">
         <div className="col-md-6">
           <div className="form-group">
              <label>Direccion del Ascensor</label>
              <input type="text" id="calle" onChange={props.handleChange} placeholder=" Nombre de la calle" className="form-control" / >
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
       <div className="form-group">
        <label>Horario de Visita Preferible</label>
        <select multiple className="form-control" id="horaVisita" onChange={props.handleChange}>
             <option defaultValue="Mañanas">Solo por las Mañana</option>
             <option defaultValue="medioDia">Solo a Medio Dia</option>
             <option defaultValue="medioDiaYMañana">Medio Dia y Mañana</option>
             <option defaultValue="medioDiaYTarde">Medio Dia y Tarde</option>
             <option defaultValue="medioDiaYTodaTarde">Toda la Tarde</option>
             <option defaultValue="medioDiaYMediaTarde">A partir de las 18:00</option>
             <option defaultValue="ultimaHoraTardes">A ultima hora de la tarde</option>
             <option defaultValue="todasHoras">A cualquier hora</option>
        </select>
       </div>
       <div className="form-group">
          <label>Nombre del Administrador</label>
          <input type="text" id="nombreAdministrador" onChange={props.handleChange} placeholder="Escribe el nombre del Administrador, Si no tiene escribe no tiene" className="form-control" />
       </div>
       <label>¿Que tipo de Presupuesto Necesita?</label>
         <select multiple required className="form-control" id="tipoPresupuesto" onChange={props.handleChange}>
              <option defaultValue="Mantenimiento">Mantenimiento</option>
              <option defaultValue="edificoSinAscensor">Acta de Industria</option>
              <option defaultValue="edificoSinAscensor">Bobinado</option>
              <option defaultValue="edificoSinAscensor">Cables</option>
              <option defaultValue="Cota 0">Cota 0</option>
              <option defaultValue="Cuadro Maniobre">Cuadro de Maniobra</option>
              <option defaultValue="Maquina">Maquina</option>
              <option defaultValue="Modernizacion">Modernizacion</option>
              <option defaultValue="edificoSinAscensor">Edificio sin Ascensor</option>
              <option defaultValue="nada">No quiere presupuesto</option>
         </select>
    <input type="submit"  onClick={props.handleClickDatosVisita} className="btn btn-info btnContinuar" value="Continuar" />
  </div>
   )
}





export default DatosVisita
