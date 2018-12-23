import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './Reservas.css'
import { firebaseApp } from '../../index.js'
import moment from 'moment'


export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 2,
       horaInicioReunion:this.props.horaInicioReunion,
       tituloReservaBaseDatos: this.props.tituloReservaBaseDatos, 
       direccionReservaBaseDatos: this.props.direccionReservaBaseDatos,
       movimientoArriba:0,
       fecha:this.props.fecha

   }
   
  tiempoInicialCalculo = () => {      
     const { movimientoArriba, horaInicioReunion  } = this.state
     const tiempoDeAumento = Math.trunc(movimientoArriba / 2) 
     const horaFinal = moment(horaInicioReunion, 'hh:mm').subtract(tiempoDeAumento, 'minutes').format('HH:mm')
     
     return horaFinal

  }

  tiempoFinalCalculo = () => {
    const { horaInicioReunion, height, movimientoArriba } = this.state 
            
     const tiempoDeAumento = Math.trunc((height - movimientoArriba) / 2)
     const horaFinal =  moment(horaInicioReunion, 'hh:mm').add(tiempoDeAumento, 'minutes').format('HH:mm')
    
     return horaFinal
    
   }

  modificacionDiaYTiempo  =  (x,y) => {    
      const { fecha  } =  this.state           
      const minutosMovidos = Math.trunc(y / 2)  
      const diasMovidos = Math.trunc(x / 213)  
      const fechaFinal =  moment(fecha, 'DD/MM/YYYY h:mm').add(diasMovidos, 'days').format('DD/MM/YYYY')
      const horaInicialFinal =  moment(fecha, 'DD/MM/YYYY h:mm').add(minutosMovidos, 'minutes').format('HH:mm')
     
      this.setState({ 
          horaInicioReunion: horaInicialFinal, 
          movimientoArriba:0, 
          movimientoAbajo: 0,
        })
    
      this.guardarHorasFirebase(fechaFinal)       
          
  }
   

   guardarHorasFirebase = (fechaFinal) => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser
    const nombreReserva = this.props.nombreReservasBaseDatos
    const { fecha  } =  this.state  
    const horaFinal = this.tiempoFinalCalculo()
    const horaInicial = this.tiempoInicialCalculo()
    const fechaActual = moment(fecha, 'DD/MM/YYYY h:mm').format('DD/MM/YYYY')
    console.log(fechaActual) 
    console.log(fechaFinal);
    if (fechaActual === fechaFinal) {
        const reservaHoraInicio = {
            fechaReserva:fechaActual,
            horaInicio:horaInicial,
            horaFin: horaFinal,
        }
        ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraInicio)
    } else {
        const reservaHoraInicio = {
            fechaReserva:fechaFinal,
            horaInicio:horaInicial,
            horaFin: horaFinal,
        }
        ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraInicio)
     }
 
   }
  

   modificarTituloReserva = () => {
    const titulo = prompt('Escribe tu nuevo titulo')
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const tituloModificado = {
        tituloReserva: titulo
    }
   
   ref.child(user.uid).child('reuniones').child(nombreReserva).update(tituloModificado)
   this.props.recargarComponenteCalendario()     
   }
   modificarDireccion = () => {
    const direccion = prompt('Escribe tu nuevo Dirección')
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const direccionModificada = {
        direccion: direccion
    }
   ref.child(user.uid).child('reuniones').child(nombreReserva).update(direccionModificada)
   this.props.recargarComponenteCalendario()
   }

   
   render() {
    const { tituloReservaBaseDatos , direccionReservaBaseDatos } = this.state     
   // const {  handleClickBorrarReserva   } = this.props

     return (
    <Rnd
    enableResizing={{bottom:true,top:true}}
    disableDragging={false}
    size={{ height: this.state.height, width:213 }}
    minHeight={66}
    dragGrid={[1, 7]}
    onDragStop={ (event,{x,y}) => { this.modificacionDiaYTiempo(x,y) }}
    className='reservaBorder' 
    onResize={(e, direction, ref, delta, position) => {     
    const alturaActualModificada = this.state.height  - parseInt(ref.style.height,10)
    const { movimientoArriba , } = this.state        
     if (direction === 'top') {
            const movimientoNuevo =  (movimientoArriba - alturaActualModificada) 
            this.setState({
                movimientoArriba: movimientoNuevo ,
                height: parseInt(ref.style.height,10)
            });           
        }
        else {
        this.setState({
            height: parseInt(ref.style.height,10),
        });
        } 
      }}
    onResizeStop={this.guardarHorasFirebase}
    >
    <h5 className="tituloReserva">{/*<span><button type="button" onClick={handleClickBorrarReserva}  className="btn btn-danger btn-sm">Borrar</button></span>*/}{`${this.tiempoInicialCalculo()} - ${this.tiempoFinalCalculo()}`}</h5>
    <p onDoubleClick={this.modificarTituloReserva}>{tituloReservaBaseDatos}</p>  
    <p onDoubleClick={this.modificarDireccion}>{direccionReservaBaseDatos}</p> 
    </Rnd>
     )
   }
}


