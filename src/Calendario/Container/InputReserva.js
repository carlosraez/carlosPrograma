import React, { Component } from 'react';
import ModalContainer from '../../widgets/container/modal-container.js'
import ModalReserva from '../Components/ModalReserva.js'

export class InputReserva extends Component {
   state = {
     modalVisible: false,
     fechaDefault:'',
     horaInicioTiempo:'',
     horaFinTiempo:'',
     dia:this.props.dia,
     mes:this.props.mes,
     year:this.props.year,
   }

   handleClickModalReserva = () => {
     const { horaReserva } = this.props
     const { year , mes , dia } = this.state
      const horaNumero  = parseInt(horaReserva,10)
      const horaSuma = horaNumero + 1
      if (horaSuma === 9) {
        this.setState({
          horaFinTiempo:`0${horaSuma}:00`
        })
      }
      else {
        this.setState({
          horaFinTiempo:`${horaSuma}:00`
        })

      }

     this.setState({
       modalVisible: true,
       horaInicioTiempo: horaReserva,
       fechaDefault: `${year}-${mes}-${dia}`
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


   render() {
     const { horaInicioTiempo , horaFinTiempo ,  fechaDefault } = this.state
     return (
     <td>
     {
     this.state.modalVisible ?
     <ModalContainer>
       <ModalReserva
        handleClickCloseModal={this.handleClickCloseModal}
        handleChange={this.props.handleChange}
        horaInicioTiempo={horaInicioTiempo}
        horaFinTiempo={horaFinTiempo}
        fechaDefault={fechaDefault}
       />
     </ModalContainer>
     :

       <button onClick={this.handleClickModalReserva} className="btn btn-link  btn-block">Reservar</button>
     }
     </td>
     )
   }
}
