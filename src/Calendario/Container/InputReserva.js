import React, { Component } from 'react';
import ModalContainer from '../../widgets/container/modal-container.js'
import ModalReserva from '../Components/ModalReserva.js'

export class InputReserva extends Component {
   state = {
     modalVisible: false,
     horaInicioTiempo:''
   }

   handleClickModalReserva = () => {
     this.setState({
       modalVisible: true
     })
   }

   handleClickCloseModal = () => {
     this.setState({
       modalVisible: false
     })
   }

   render() {
     console.log(this.state.modalVisible);
     return (
     <td>
     {
     this.state.modalVisible ?
     <ModalContainer>
       <ModalReserva
        handleClickCloseModal={this.handleClickCloseModal}
        handleChange={this.props.handleChange}
        horaInicioTiempo={this.state.horaInicioTiempo}
       />
     </ModalContainer>
     :

       <button onClick={this.handleClickModalReserva} className="btn btn-link  btn-block">Reservar</button>
     }
     </td>
     )
   }
}
