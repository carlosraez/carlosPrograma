import React, { Component } from 'react';
import DatosAscensor from '../components/datosAscensor.js'
import FincaSinAscensor from '../components/datosFincaSinAscensor.js'
import './smartAscensor.css'


class SmartAscensor extends Component {
    state = {
      fincaSinAscensor: false,
      botonCambio:'Edifico sin Ascensor',
    }

  handleFincaSinAscensor = () => {
    this.setState({
      fincaSinAscensor:!this.state.fincaSinAscensor,
      botonCambio: this.state.fincaSinAscensor ? 'Edificio sin Ascensor' : 'Datos de Ascensor'
    })

  }

  render() {
    return (
      <div>
      {
        this.state.fincaSinAscensor ?
        <FincaSinAscensor
        imagenesAscensor={this.props.imagenesAscensor}
        handleClickSiguienteAscensor={this.props.handleClickSiguienteAscensor}
        handleChange={this.props.handleChange }
        cantidadDeAscensoresIncluidos={this.props.cantidadDeAscensoresIncluidos}
        />
        :
        <DatosAscensor
        imagenesAscensor={this.props.imagenesAscensor}
        cantidadDeAscensoresIncluidos={this.props.cantidadDeAscensoresIncluidos}
        handleChange={this.props.handleChange }
        handleClickSiguienteAscensor={this.props.handleClickSiguienteAscensor}
        />
      }
      <div className="row">
     <div className="col md-6">
        <input type="submit" onClick={this.props.handleReturnDatosVisita} className="btn btn-info  btnContinuar" value="Vuelve A datos Cliente" />
          <input type="submit" onClick={this.handleFincaSinAscensor} className="btn btn-info botonSwith" value={this.state.botonCambio} />
      </div>
      <div className="row">
     <div className="col md-6">
        <input type="submit" onClick={this.props.handleClickContinuarYTerminar} className="btn btn-info btnContinuar" value="Terminado los datos de los Ascensores" />
      </div>
   </div>
   </div>
      </div>
    )
  }
}



export default SmartAscensor;
