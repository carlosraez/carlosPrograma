import React from 'react';
import InputsAgenda from './InputsAgenda.js'
import './ModalReserva.css'



function ModalReserva(props) {
  const { fechaReserva , handleChange , horaInicio , horaFin } = props
   
   return (
     <div className="Modal">
     <div className="container">
      <h1 className="tituloPrincipal">Reserva tu cita</h1>
      <InputsAgenda
      label={'Fecha Reunión'}
      type={'date'}
      id={'fechaReserva'}
      defaultValue={fechaReserva.split('/').reverse().join('-')}
      handleChange={handleChange}
      />
      <div className="row">
      <div className="col-12 col-md-6">
       <InputsAgenda
       label={'¿Con quien has Quedado?'}
       type={'text'}
       placeholder={'Escribe la parsona con la que vas a quedar'}
       id={'tituloReserva'}
       handleChange={handleChange}
       />
       <InputsAgenda
       label={'hora de Reunión'}
       type={'time'}
       defaultValue={horaInicio}
       id={'horaInicio'}
       handleChange={handleChange}
       />
       <InputsAgenda
       label={'hora de Terminacion'}
       type={'time'}
       defaultValue={horaFin}
       id={'horaFin'}
       handleChange={props.handleChange}
       />

      </div>
      <div className="col-12 col-md-6">
      <InputsAgenda
      label={'Motivo de Reunión'}
      type={'text'}
      id={'motivoReunion'}
      handleChange={handleChange}
      />
      <InputsAgenda
      label={'Dirección'}
      type={'text'}
      id={'direccion'}
      handleChange={handleChange}
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
