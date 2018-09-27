import React from 'react'
import './modalVisita.css'

function ModalVisita(props) {
  return (
   <div>
    <div className="row">
    <div className="col-12 col-md-6">
      <p><strong>Poblacion:</strong><input id="poblacion" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.poblacion}</p>
      <p><strong>Codigo Postal:</strong><input id="postal" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.codigoPostal}</p>
      <p><strong>Direccion:</strong><input id="calle" onChange={props.handleChange} className={props.cssEdicion} type="text"/>  {props.direccion}</p>
      <p><strong>Nombre del Presidente:</strong><input id="nombrePresidente" onChange={props.handleChange} className={props.cssEdicion} type="text"/>  {props.nombrePresidente}</p>
      <p><strong>Telefono del Presidente:</strong><input id="telefonoPresidente" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.telefonoPresidente}</p>
      <p><strong>Correo electronico:</strong><input id="emailPresidente" onChange={props.handleChange} className={props.cssEdicion} type="email"/> {props.correElectronico}</p>
      <p><strong>Hora de Visita:</strong><select multiple className={props.cssEdicion} id="horaVisita" onChange={props.handleChange}>
           <option defaultValue="Mañanas">Solo por las Mañana</option>
           <option defaultValue="medioDia">Solo a Medio Dia</option>
           <option defaultValue="medioDiaYMañana">Medio Dia y Mañana</option>
           <option defaultValue="medioDiaYTarde">Medio Dia y Tarde</option>
           <option defaultValue="medioDiaYTodaTarde">Toda la Tarde</option>
           <option defaultValue="medioDiaYMediaTarde">A partir de las 18:00</option>
           <option defaultValue="ultimaHoraTardes">A ultima hora de la tarde</option>
           <option defaultValue="todasHoras">A cualquier hora</option>
      </select> {props.horaVisita}</p>
    <p><strong>Nombre Administrador:</strong><input id="nombreAdministrador" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.administrador}</p>
      <p><strong>Tipo de Presupuesto:</strong><select multiple  className={props.cssEdicion} id="tipoPresupuesto" onChange={props.handleChange}>
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
      </select> {props.tipoPresupuesto}</p>
    <p><strong>Marca Ascensor:</strong><input id="marca" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.marcaAscensor}</p>
      <p><strong>Empresa Mantenedora:</strong><input id="mantenedor" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.mantenedor}</p>
    </div>
    <div className="col-12 col-md-6">
       <p>En esta comunidad hay {props.numeroAscensores} ascensores</p>
       <h3 className="tituloDeConversacion">Conversacion  <button type="button" onClick={props.historicoConversacion} className="btn btn-info btn-sm">Historico Conversaciones</button></h3>
     <ul className="list-group">
       <li className="conversacion list-group-item">{props.fechaConversacion}: {props.conversacion}</li>
      <label>Fecha de La Proxima Accion</label>
      <input type="date" id="proxVisita" onChange={props.handleChange}  className="form-control" />
      <textarea className="form-control" onChange={props.handleChange} id="textoInfoVista" rows="3"></textarea>
      <button type="button" onClick={props.handleNuevaConversacion} className="btn btn-info btn-sm">Subir Conversacion</button>
     </ul>
    </div>
    </div>
    <div>
    <button type="button" onClick={props.handleVerLosAscensores} className="btn btn-info">Ver los Ascensores</button>
    <button type="button" onClick={props.handleModificarVisita} className="btn btn-info botonModificar">Modificar Visita</button>
    <button type="button" onClick={props.handleGuardarModificacion} className="btn btn-primary botonModificar">Guardar Modificacion</button>
    </div>
  </div>
  )
}

export default ModalVisita
