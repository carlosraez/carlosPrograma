import React, { Component } from 'react'
import Visita from './visitaList.js'
import ModalContainer from '../../widgets/container/modal-container.js'

class FiltrarMantenedor extends Component {
  state = {
    modalVisible: false,
    vistitaPulsada: 0,
  }

   handleVerClickFiltradoMantenedor = (event) => {
    const numeroPulsadoTipoPresupuesto = event.target.id
    this.setState({
      modalVisible:true,
      vistitaPulsada: numeroPulsadoTipoPresupuesto
    })
  }

  handleCerrarModal = () =>{
    this.setState({
      modalVisible:false
    })
  }

  render () {
    const listaCompleta =  this.props.listaDeVisitas
      const filtrado = listaCompleta.filter((item) => {
      const usuarioBuscaMantenedor = this.props.letras.charAt(0).toLowerCase()
      const datosMantenedor = item.mantenedor.charAt(0).toLowerCase()
      return datosMantenedor === usuarioBuscaMantenedor
    })
    if (this.state.modalVisible) {
      return (
        <ModalContainer>
    
        </ModalContainer>
      )
    }
    return (

            filtrado.map((item, i) => {
              let contador = i + 1;
              return (
                <Visita
                direccion={item.calle}
                 poblacion={item.poblacion}
                 mantenedor={item.mantenedor}
                 codigoPostal={item.postal}
                 tipoPresupuesto={item.tipoPresupuesto}
                 importancia={item.interes}
                 administrador={item.nombreAdministrador}
                 proxVisita={item.proxVisita}
                 handleVerClick={this.handleVerClickFiltradoMantenedor}
                 key={i}
                 contador={contador}
                 numeroDeVisita={i}
                />
              )
            })
        )
    }
  }


export default FiltrarMantenedor
