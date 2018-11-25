import React from 'react';
import InputsAgenda from './InputsAgenda.js'
import './ModalReserva.css'


function ModalReserva(props) {
   return (
     <div className="Modal">
     <div className="container">
      <h1 className="tituloPrincipal">Reserva tu cita</h1>
      <div className="row">
      <div className="col-12 col-md-6">
       <InputsAgenda
       label={'Introduce el Titulo'}
       type={'text'}
       id={'tituloReserva'}
       handleChange={props.handleChange}
       />
       <InputsAgenda
       label={'hora de quedada'}
       type={'time'}
       defaultValue={'08:00'}
       id={'horaInicio'}
       handleChange={props.handleChange}
       />
       <InputsAgenda
       label={'hora de Terminacion'}
       type={'time'}
       defaultValue={'10:00'}
       id={'horaFin'}
       handleChange={props.handleChange}
       />

      </div>
      <div className="col-12 col-md-6">
      <InputsAgenda
      label={'Motivo de Reunión'}
      type={'text'}
      id={'motivoReunion'}
      handleChange={props.handleChange}
      />
      <InputsAgenda
      label={'Direccion'}
      type={'text'}
      id={'direccion'}
      handleChange={props.handleChange}
      />
      <InputsAgenda
      label={'Poblacion'}
      type={'text'}
      id={'poblacion'}
      handleChange={props.handleChange}
      />
      </div>
     </div>
     <button type="button"  className="btn btn-danger botonReservar">Reservar</button>
     </div>
     <div>
      <button type="button" onClick={props.handleClickCloseModal} className="Modal-close"></button>
      </div>
     </div>
   )
}



export default ModalReserva
