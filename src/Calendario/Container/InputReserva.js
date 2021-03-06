import React, { Component } from 'react';
import ModalContainer from '../../widgets/container/modal-container.js'
import ModalReserva from '../Components/ModalReserva.js'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';
import moment from 'moment'
import { Inputhoras } from './InputHoras.js';
import './InputLibreReserva.css'

export class InputReserva extends Component {
   state = {
     reservasFecha:this.props,
     modalVisible: false,
     nombreReservasBaseDatos: this.props.nombreReservasBaseDatos,
     fechaReservaModal:'',
     horaInicio:'',
     horaFin:'',
     poblacion:'',
     direccion:'',
     motivoReunion:'',
     tituloReserva:'',
     dia:this.props.dia,
     mes:this.props.mes,
     year:this.props.year,
   }

   handleChange = (event) => {
     const target = event.target
     const value = target.value
     const id =  target.id
     this.setState({
       [id]:value
     })

   }

   handleClickModalReserva = () => {
     const { horaReserva } = this.props
     const { year , mes , dia } = this.state
     const horaFinalSuma = moment(horaReserva, 'h:mm').add(1, 'hour').format('HH:mm')
     
     this.setState({
       modalVisible: true,
       horaInicio: horaReserva,
       horaFin:horaFinalSuma,
       fechaReservaModal: `${dia}/${mes}/${year}`
     })
   }

   handleClickCloseModal = () => {
     this.setState({
       modalVisible: false
     })
   }

   static getDerivedStateFromProps = (props, state) => {         
     return props
   }


   handleClickGuardarReserva = (event) => {
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     const {
       horaInicio ,
       horaFin ,
      fechaReservaModal ,
      tituloReserva,
      motivoReunion ,
      direccion ,
      poblacion
    } = this.state
  
     const nombreReunion = this.state.tituloReserva
     const nuevaReunion = {
          [nombreReunion] : {
          tituloReserva: tituloReserva,
          fechaReserva:fechaReservaModal,
          horaInicio:horaInicio,
          horaFin:horaFin,
          motivoReunion:motivoReunion,
          direccion: direccion,
          poblacion: poblacion
        }
     }

   ref.child(user.uid).child('reuniones').update(nuevaReunion)
     swal('La Reserva ha sido Guardada')
     this.setState({
       modalVisible:false
     })

   }

   handleClickBorrarReserva = (index) =>{ 
      const ref  = firebaseApp.database().ref('usuarios')
      const user = firebaseApp.auth().currentUser
      const { reservasFecha , nombreReservasBaseDatos } = this.state
      const nombreReserva = nombreReservasBaseDatos[index]
      ref.child(user.uid).child('reuniones').child(nombreReserva).remove()
      swal('La Reserva ha sido Borrada')
      const nuevoArrayReservas = reservasFecha.splice(index, 1)      
      if (reservasFecha ===  nuevoArrayReservas) {
        this.setState({
          reservasFecha:nuevoArrayReservas
        })
      } else {
        this.setState({
          reservasFecha:nuevoArrayReservas
        })
      }
      this.props.recargarComponenteCalendario()
   }
   
   reservas = () => {
      const { year,mes,dia, reservasFecha } = this.state
      const { horaReserva , 
        minutosTotales, 
        tituloReservaBaseDatos, 
        direccionReservaBaseDatos,
        horaInicioReunion, 
        horaFinalReunion,
        nombreReservasBaseDatos,
        recargarComponenteCalendario,
        } = this.props    
       
       const index = reservasFecha.indexOf(`${dia}/${mes}/${year} ${horaReserva}`) 
      
       if (index > -1) {     
       return (
        <td>
        <Inputhoras
        recargarComponenteCalendario={recargarComponenteCalendario}
        nombreReservasBaseDatos={nombreReservasBaseDatos[index]}
        minutosTotales={minutosTotales[index]}
        fecha={reservasFecha[index]}
        tituloReservaBaseDatos={tituloReservaBaseDatos[index]}
        verOcupado={this.verOcupado}
        direccionReservaBaseDatos={direccionReservaBaseDatos[index]} 
        horaInicioReunion={horaInicioReunion[index]}
        horaFinalReunion={horaFinalReunion[index]}
        handleClickBorrarReserva={() => { this.handleClickBorrarReserva(index) }}
        ></Inputhoras>
        </td>
       )
       } 
       
       else {
         return (
         <td onClick={this.handleClickModalReserva} className="inputReservar">
         Reserva
         </td> 
         )
       }
             
   }

   render() {     
     const { horaInicio , horaFin ,  fechaReservaModal, } = this.state
        
     return (
     this.state.modalVisible ?
     <ModalContainer>
       <ModalReserva
        handleClickCloseModal={this.handleClickCloseModal}
        handleChange={this.handleChange}
        horaInicio={horaInicio}
        horaFin={horaFin}
        fechaReserva={fechaReservaModal}
        handleClickGuardarReserva={this.handleClickGuardarReserva}
       />
     </ModalContainer>
     :
     this.reservas() 
     )
   }
}
