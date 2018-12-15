import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './InputReserva.css'
import { firebaseApp } from '../../index.js'
import moment from 'moment'


export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 3.3,
       fechaFinalReunion:this.props.fechaFinalReunion,
       tituloReservaBaseDatos: this.props.tituloReservaBaseDatos, 
       direccionReservaBaseDatos: this.props.direccionReservaBaseDatos,
       movimientoArriba:0,
       movimientoAbajo:0
   }
   
  tiempoIncialCalculo = () => {
     const { movimientoArriba } = this.state
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     const nombreReserva = this.props.nombreReservasBaseDatos
     const { fechaInicioReunion } = this.props
     const tiempoDeAumento = Math.trunc(movimientoArriba / 3.3) 
     const horaFinal = moment(fechaInicioReunion, 'h:mm').subtract(tiempoDeAumento, 'minutes').format('HH:mm')
     const reservaHoraInicio = {
        horaInicio: horaFinal
    }
    ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraInicio)
    return horaFinal
         
  }
  
   tiempoFinal = () => {
    const { fechaFinalReunion ,movimientoAbajo } = this.state 
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser; 
    const tiempoDeAumento = Math.trunc(movimientoAbajo / 3.3)
    const horaFinal = moment(fechaFinalReunion, 'h:mm').add(tiempoDeAumento, 'minutes').format('HH:mm')
    const reservaHoraFin = {
        horaFin: horaFinal
    }
    ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraFin)
    return horaFinal 
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

   static getDerivedStateFromProps = (props, state) => {         
    return props
  }
   
   render() {
    const { tituloReservaBaseDatos , direccionReservaBaseDatos, movimientoArriba , movimientoAbajo } = this.state
    const {  handleClickBorrarReserva   } = this.props
     
     return (
    <Rnd
    enableResizing={{bottom:true,top:true}}
    disableDragging={true}
    size={{ height: this.state.height, width:170 }}
    minHeight={66}
    className='reservaBorder' 
    onResizeStop={(e, direction, ref, delta, position) => { 
        if (direction === 'top') {
            const movimientoNuevo = delta.height + movimientoArriba
            this.setState({
                movimientoArriba: movimientoNuevo ,
                height: parseInt(ref.style.height,10)
            }); 
        }
        else {
        const movimientoNuevo = delta.height + movimientoAbajo
        this.setState({
            height: parseInt(ref.style.height,10),
            movimientoAbajo: movimientoNuevo
        });
        }
      }}
    >
    <h5 className="tituloReserva"><span><button type="button" onClick={handleClickBorrarReserva}  className="btn btn-danger btn-sm">Borrar</button></span>{`${this.tiempoIncialCalculo()} - ${this.tiempoFinal()}`}</h5>
    <p onDoubleClick={this.modificarTituloReserva}>{tituloReservaBaseDatos}</p>  
    <p onDoubleClick={this.modificarDireccion}>{direccionReservaBaseDatos}</p> 
    </Rnd>
     )
   }
}


    // dragGrid={[1, 7]}
    /*onDragStop={ (event,{x,y}) => {
    if (x  < 125) {
        this.setState({x:0,  })
    }
    else if(x < 250){
        this.setState({x:179,  })
    }
    else if(x < 413){
        this.setState({x:373,  })
    }
    else if(x < 700){
        this.setState({x:613,  })
    }
    else if(x < 920){
        this.setState({x:809,  })
    }
    else {
        this.setState({x:1019,  })
    }
}}*/