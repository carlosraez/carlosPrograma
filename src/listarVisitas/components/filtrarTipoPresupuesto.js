import React, { Component } from 'react'
import Visita from './visitaList.js'
import ModalContainer from '../../widgets/container/modal-container.js'

class FiltrarTipoPresupuesto extends Component {
  state = {
    modalVisible: false,
    vistitaPulsada: 0,
  }

  handleVerClickFiltradoTipoPresupuesto = (event) => {
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
      const usuarioBuscaTipoPresupuesto = this.props.letras.charAt(0).toLowerCase()
       const datosTipoPresupuesto = item.tipoPresupuesto.charAt(0).toLowerCase()
       return datosTipoPresupuesto === usuarioBuscaTipoPresupuesto
       })
       console.log(this.state.vistitaPulsada);
       console.log(filtrado[this.state.vistitaPulsada]);
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
                 handleVerClick={this.handleVerClickFiltradoTipoPresupuesto}
                 key={i}
                 contador={contador}
                 numeroDeVisita={i}
                />
              )
            })
    )


    }
  }




export default FiltrarTipoPresupuesto
