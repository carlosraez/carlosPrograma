import React from 'react';
import InputsAgenda from './InputsAgenda.js'
import './ModalReserva.css'



function ModalReserva(props) {

   return (
     <div className="Modal">
     <div className="container">
      <h1 className="tituloPrincipal">Reserva tu cita</h1>
      <InputsAgenda
      label={'Fecha Reunión'}
      type={'date'}
      id={'fechaReserva'}
      defaultValue={props.fechaReserva}
      handleChange={props.handleChange}
      />
      <div className="row">
      <div className="col-12 col-md-6">
       <InputsAgenda
       label={'Introduce el Titulo'}
       type={'text'}
       placeholder={'Escribe un Titulo de Reserva'}
       id={'tituloReserva'}
       handleChange={props.handleChange}
       />
       <InputsAgenda
       label={'hora de Reunión'}
       type={'time'}
       defaultValue={props.horaInicio}
       id={'horaInicio'}
       handleChange={props.handleChange}
       />
       <InputsAgenda
       label={'hora de Terminacion'}
       type={'time'}
       defaultValue={props.horaFin}
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
      label={'Dirección'}
      type={'text'}
      id={'direccion'}
      handleChange={props.handleChange}
      />
      </div>
     </div>
     <button type="button" onClick={props.handleClickGuardarReserva} className="btn btn-danger botonReservar">Reservar</button>
     </div>
     <div>
      <button type="button" onClick={props.handleClickCloseModal} className="Modal-close"></button>
      </div>
     </div>
   )
}



export default ModalReserva
