import React, { Component } from 'react';
import DatosVisita from '../components/datosVisita.js'
import SmartAscensor from '../components/smartAscensor.js'
import TerminarVisita from '../components/terminarVisita.js'
import VisitaLayout from '../components/visitaLayout.js'
import swal from 'sweetalert';


class Visita extends Component {

  state = {
      mostrarDatosVisita:true,
      mostradDatosAscensor: true,
  }


handleReturnDatosVisita = () => {
  this.setState({
    mostrarDatosVisita:true
  })

}

handleReturnDatosAscensor = () => {
  this.setState({
   mostradDatosAscensor : true,

  })
}
handleClickContinuar = () => {
  swal({
   title: "¿Has terminado de rellenar los datos?",
   text: "Por favor rellena los datos del ascensor o los de Finca Sin Ascensor",
  icon: "warning",
 buttons: true,
 dangerMode: true,
})
.then((escritoAscensores) => {
 if (escritoAscensores && this.props.cantidadAscensoresGuardados > 0) {
   this.setState({
     mostradDatosAscensor: false,
   })
   swal("Muy Bien!! ya queda poco", {
     icon: "success",
   });
 } else {
    swal('Me lo imaginaba, no has terminado...Por favor termina de rellenar los datos... o Pulsa en Edificio sin Ascensor')
 }
   });

}

 handleClickDatosVisita = () =>  {
    this.setState({
      mostrarDatosVisita:false
    })
 }



  render() {
    return (
              <VisitaLayout
               handleClickDash={this.props.handleClickDash}
              >
                  {
                  this.state.mostrarDatosVisita ?
                  <DatosVisita
                  handleClickDatosVisita={this.handleClickDatosVisita}
                  handleChange={this.props.handleChange}
                  checked={this.state.checked}

                  />
                  :
                  this.state.mostradDatosAscensor ?
                  <SmartAscensor
                     handleChangeUpload={this.props.handleChangeUpload}
                     imagenesAscensor={this.props.imagenesAscensor}
                     cantidadDeAscensoresIncluidos={this.props.cantidadAscensoresGuardados}
                     handleClickSiguienteAscensor={this.props.handleClickSiguienteAscensor}
                     handleReturnDatosVisita={this.handleReturnDatosVisita}
                     handleChange={this.props.handleChange }
                     handleClickContinuarYTerminar={this.handleClickContinuar}
                    />
                   :
                     <TerminarVisita
                      handleChange={this.props.handleChange }
                      guardarYTerminar={this.props.handleClickTerminarVisita}
                      />
                  }
            </VisitaLayout>
    );
  }
}

export default Visita;
