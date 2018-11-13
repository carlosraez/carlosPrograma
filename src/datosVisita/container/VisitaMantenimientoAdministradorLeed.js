import React, { Component } from 'react';
import { firebaseApp } from '../../index.js'
import VisitaLayout from '../components/visitaLayout.js'
import { AscensorPuertaFria  } from '../components/AscensorPuertaFria.js'
import moment from 'moment'
import swal from 'sweetalert';


export class VisitaMantenimientoAdministradorLeed extends Component {
   state = {
     ascensor: [],
     imagenesAscensor: [],

   }

   handleChange = (e) => {
     const target = e.target
     const value = target.type === 'checkbox' ? target.checked : target.value
     const id = target.id
     this.setState({
      [id] : value
     })

   }

      guardarVisitaLeedMantenimiento = () => {
        const ref  = firebaseApp.database().ref('usuarios')
        const user = firebaseApp.auth().currentUser;
        const fecha = moment().format("DD/MM/YYYY");
        const visitaLeedMantenimiento = {
          administrador:this.props.administrador,
          fechaGestion:fecha,
          ascensor:this.state.ascensor || ''  ,
        }
        const leedActualActualizar = this.props.nombreLeed
        ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leedsPorpresupuestar').update(visitaLeedMantenimiento)
        swal('Se ha guardado , ahora realiza un buen seguimiento para poder cerrar la venta')
        ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').child(leedActualActualizar).remove()

      }


   handleClickContinuar = () => {
     swal({
      title: "¿Has terminado de rellenar los datos?",
      text: "Por favor rellena los datos del ascensor/es",
     icon: "warning",
    buttons: true,
    dangerMode: true,
   })
   .then((escritoAscensores) => {
    if (escritoAscensores && this.state.ascensor.length > 0) {
      this.setState({
        mostradDatosAscensor: false,
      })
      this.guardarVisitaLeedMantenimiento()
      swal("Muy Bien!! Felcidades", {
        icon: "success",
      });
    } else {
       swal('No has terminado..Tienes que pulsar en Siguiente Ascensor para registrarlo')
    }
      });

   }

   nuevoAscensor(){
     let actualAscensor = [{
        paradas: this.state.paradas || '',
        personas: this.state.personas || '',
        rae: this.state.rae || '',
        puertasPiso: this.state.puertasPiso || '',
        puertasCabina:this.state.puertasCabina || '',
        observacionAscensor: this.state.observacionAscensor || '',
        anchoHueco: this.state.anchoHueco || '',
        fondoHueco: this.state.fondoHueco || '',
        observacionAscensorSinAscensor: this.state.observacionAscensorSinAscenso || '',
        embarques:this.state.embarques || '',
        maquina:this.state.maquina || '',
        imagenesAscensor:this.state.imagenesAscensor || '',
      }]
     this.setState({
       ascensor: this.state.ascensor.concat(actualAscensor),

     })
   }

   handleClickSiguienteAscensor = (event) => {
        event.preventDefault()
        this.nuevoAscensor()
        this.resetFormulario()
        this.setState({
          imagenesAscensor: []
        })
      }
      resetFormulario = () => {
       const botonAscensorMas = document.getElementById('formulario-ascensor')
       botonAscensorMas.reset()
     }

   render() {
     console.log(this.state.listaLeeds);
     return (
       <VisitaLayout
        titulo={'Completa la visita de mantenimiento del administrador'}
       >
       <AscensorPuertaFria
          handleChangeUpload={this.handleChangeUpload}
          imagenesAscensor={this.state.imagenesAscensor}
          cantidadDeAscensoresIncluidos={this.state.ascensor.length}
          handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
          handleReturnDatosVisita={this.props.handleVerLeed}
          handleChange={this.handleChange }
          handleClickContinuarYTerminar={this.handleClickContinuar}
          botonVolverAscensor={'Ver Leed'}
         />
    </VisitaLayout>
     )
   }
}
