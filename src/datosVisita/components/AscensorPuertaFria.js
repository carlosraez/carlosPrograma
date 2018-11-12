import React, { Component } from 'react';
import DatosAscensor from '../components/datosAscensor.js'
import './smartAscensor.css'


export class AscensorPuertaFria  extends Component {
  render() {
    return (
      <div>
        <DatosAscensor
        imagenesAscensor={this.props.imagenesAscensor}
        cantidadDeAscensoresIncluidos={this.props.cantidadDeAscensoresIncluidos}
        handleChange={this.props.handleChange }
        handleClickSiguienteAscensor={this.props.handleClickSiguienteAscensor}
        />
      <div className="row">
     <div className="col md-6">
        <input type="submit" onClick={this.props.handleReturnDatosVisita} className="btn btn-info  btnContinuar" value={this.props.botonVolverAscensor} />
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
