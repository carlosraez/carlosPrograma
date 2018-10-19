import React from 'react'
import './modalVisita.css'
import { Conversacion } from './Conversacion.js'


function ModalVisita(props) {
  return (
   <div>
    <div className="row">
    <div className="col-12 col-md-6">
      <p><strong>Poblacion:</strong><input id="poblacionModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.poblacion}</p>
      <p><strong>Codigo Postal:</strong><input id="postalModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.codigoPostal}</p>
      <p><strong>Direccion:</strong><input id="calleModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/>  {props.direccion}</p>
      <p><strong>Nombre del Presidente:</strong><input id="nombrePresidenteModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/>  {props.nombrePresidente}</p>
      <p><strong>Telefono del Presidente:</strong><input id="telefonoPresidenteModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.telefonoPresidente}</p>
      <p><strong>Correo electronico:</strong><input id="emailPresidenteModi" onChange={props.handleChange} className={props.cssEdicion} type="email"/> {props.correElectronico}</p>
      <p><strong>Hora de Visita:</strong><select multiple className={props.cssEdicion} id="horaVisitaModi" onChange={props.handleChange}>
           <option defaultValue="Mañanas">Solo por las Mañanas</option>
           <option defaultValue="medioDia">Solo a Medio Dia</option>
           <option defaultValue="medioDiaYMañana">Medio Dia y Mañana</option>
           <option defaultValue="medioDiaYTarde">Medio Dia y Tarde</option>
           <option defaultValue="medioDiaYTodaTarde">Toda la Tarde</option>
           <option defaultValue="medioDiaYMediaTarde">A partir de las 18:00</option>
           <option defaultValue="ultimaHoraTardes">A ultima hora de la tarde</option>
           <option defaultValue="todasHoras">A cualquier hora</option>
      </select> {props.horaVisita}</p>
    <p><strong>Nombre Administrador:</strong><input id="nombreAdministradorModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.administrador}</p>
      <p><strong>Tipo de Presupuesto:</strong><select multiple  className={props.cssEdicion} id="tipoPresupuestoModi" onChange={props.handleChange}>
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
    <p><strong>Marca Ascensor:</strong><input id="marcaModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.marcaAscensor}</p>
      <p><strong>Empresa Mantenedora:</strong><input id="mantenedorModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.mantenedor}</p>
    </div>
    <div className="col-12 col-md-6">
       <p>En esta comunidad hay {props.numeroTotalAscensores} ascensores</p>
       <h3 className="tituloDeConversacion">Conversacion  <button type="button" onClick={props.historicoConversacion} className="btn btn-info btn-sm">Historico Conversaciones</button></h3>
      <Conversacion
        vistitaPulsada={props.vistitaPulsada}
        idVisitaPulsada={props.idVisitaPulsada}
        nuevaPosicionConversacion={props.nuevaPosicionConversacion}
      />
    </div>
    </div>
  </div>
  )
}

export default ModalVisita
