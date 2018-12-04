import React, { Component } from 'react';
import ModalContainer from '../../widgets/container/modal-container.js'
import ModalReserva from '../Components/ModalReserva.js'
import { firebaseApp } from '../../index.js'
import './InputReserva.css'
import swal from 'sweetalert';
import { Inputhoras } from './InputHoras.js';



export class InputReserva extends Component {
   state = {
     reservasFecha:[],
     reservaFin:[],
     modalVisible: false,
     fechaReserva:'',
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
      const horaNumero  = parseInt(horaReserva,10)
      const horaSuma = horaNumero + 1

      if (horaSuma === 9) {
        this.setState({
          horaFin:`0${horaSuma}:00`
        })
      }
      else {
        this.setState({
          horaFin:`${horaSuma}:00`
        })

      }

     this.setState({
       modalVisible: true,
       horaInicio: horaReserva,
       fechaReserva: `${year}-${mes}-${dia}`
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
      fechaReserva ,
      tituloReserva,
      motivoReunion ,
      direccion ,
      poblacion
    } = this.state
     const nombreReunion = this.state.tituloReserva
     const nuevaReunion = {
          [nombreReunion] : {
          tituloReserva: tituloReserva,
          fechaReserva:fechaReserva,
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

   componentDidMount = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     const listaReunionesBaseDatos = []
     const horaFin = []
     ref.child(user.uid).child('reuniones').on('child_added', (sanpshot) => {
     const fechaInicio = sanpshot.val().fechaReserva
     const hora = sanpshot.val().horaInicio
     const fin  = sanpshot.val().horaFin
     listaReunionesBaseDatos.push(`${fechaInicio} ${hora}`)
     horaFin.push(`${fechaInicio} ${fin}`)
     this.setState({
       reservasFecha:listaReunionesBaseDatos,
       reservaFin:horaFin
     })
    })

  }

   reservas = () => {
      
      const { year,mes,dia, reservasFecha, reservaFin  } = this.state
      const { horaReserva } = this.props

    console.log(reservasFecha);
    console.log(reservaFin);
    
      
    const index = reservasFecha.indexOf(`${year}-${mes}-${dia} ${horaReserva}`) 
    
    
                    
       if (index > -1) {
       return <td className='ocupadoReserva'>
        <Inputhoras
        verOcupado={this.verOcupado} 
        cssReserva={'OcupadoReserva'} 
        indice={index}
        ></Inputhoras>
        </td>
       } 
       else if(3 > 6) {
       return  <td className='CeldaReserva'>
       <Inputhoras
       verOcupado={this.verOcupado} 
       cssReserva={'OcupadoReserva'} 
       indice={index}
       ></Inputhoras>
       </td>

       }   
       else {
         return <td onClick={this.handleClickModalReserva}>
         Reservar
         </td> 
      
       }
             
   }

   verOcupado = () => {
     swal('Hola')
   }


   render() {
     console.log('soy el render');
     
     const { horaInicio , horaFin ,  fechaReserva, } = this.state
     return (
     this.state.modalVisible ?
     <ModalContainer>
       <ModalReserva
        handleClickCloseModal={this.handleClickCloseModal}
        handleChange={this.handleChange}
        horaInicio={horaInicio}
        horaFin={horaFin}
        fechaReserva={fechaReserva}
        handleClickGuardarReserva={this.handleClickGuardarReserva}
       />
     </ModalContainer>
     :
     this.reservas() 
     )
   }
}
