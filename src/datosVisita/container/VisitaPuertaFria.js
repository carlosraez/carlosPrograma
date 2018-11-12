import React, { Component } from 'react';
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';
import DatosVisita from '../components/datosVisita.js'
import { AscensorPuertaFria  } from '../components/AscensorPuertaFria.js'
import TerminarVisita from '../components/terminarVisita.js'
import VisitaLayout from '../components/visitaLayout.js'


export class VisitaPuertaFria extends Component {
  state = {
      usuario: '',
      calle: '',
      poblacion:'',
      postal:'',
      interes:'Medio Interesados',
      nombrePresidente:'',
      telefonoPresidente:'',
      emailPresidente:'',
      tipoPresupuesto:'Mantenimiento',
      horaVisita:'',
      nombreAdministrador:'',
      marca:'',
      mantenedor:'',
      oca:'',
      proxVisita: '',
      ascensor: [],
      imagenesAscensor: [],
      textoInfoVista: '',
      observacionAscensor:'',
      paradas: '',
      personas:'',
      rae:'',
      visita:[],
      embarques:'',
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
     text: "Por favor rellena los datos del ascensor, tienes que pulsar en siguiente ascensor para registralo",
    icon: "warning",
   buttons: true,
   dangerMode: true,
  })
  .then((escritoAscensores) => {
   if (escritoAscensores && this.state.ascensor.length > 0) {
     this.setState({
       mostradDatosAscensor: false,
     })
     swal("Muy Bien!! ya queda poco", {
       icon: "success",
     });
   } else {
      swal('No has terminado..Tienes que pulsar en Siguiente Ascensor para registrarlo')
   }
     });

  }

  handleClickDatosVisita = () =>  {
     this.setState({
       mostrarDatosVisita:false
     })
  }


 handleClickTerminarVisita = () => {
   this.guardarVisita()
 }




  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const id = target.id
    this.setState({
     [id] : value
    })

  }


  guardarVisita = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const nuevaVisita = {
      calle: this.state.calle || '',
      poblacion: this.state.poblacion || '',
      postal:this.state.postal || '',
      interes:this.state.interes || '',
      nombrePresidente:this.state.nombrePresidente || '',
      telefonoPresidente:this.state.telefonoPresidente || '',
      emailPresidente:this.state.emailPresidente || '',
      tipoPresupuesto:this.state.tipoPresupuesto || '',
      nombreAdministrador:this.state.nombreAdministrador || '',
      marca:this.state.marca || '',
      ascensor:this.state.ascensor || ''  ,
      mantenedor:this.state.mantenedor || '',
      oca:this.state.oca || '',
      conversacion:{
            0 :{
            proxVisita:this.state.proxVisita || '',
            textoInfoVisita:this.state.textoInfoVisita || ''
           }
       }
    }
    ref.child(user.uid).child('visitas').child('puertaFria').push(nuevaVisita)
    swal('Se ha guardado , ahora realiza un buen seguimiento para poder cerrar la venta')
    this.setState({
      usuarioMakeVisita:false,
      calle: '',
      poblacion:'',
      postal:'',
      interes:'Medio Interesados',
      nombrePresidente:'',
      telefonoPresidente:'',
      emailPresidente:'',
      tipoPresupuesto:'Mantenimiento',
      horaVisita:{value: 'Preferiblemente por la Mañana'},
      nombreAdministrador:'',
      marca:'',
      mantenedor:'',
      oca:'',
      proxVisita: '',
      ascensor: [],
      textoInfoVista: '',
      observacionAscensor:'',
      paradas: '',
      personas:'',
      rae:'',
      embarques:'',
    })
  }


     handleClickfincaSinAscensor = (event) => {
       this.nuevoAscensor()
       this.handleClickDash()

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

  render() {
     return (
       <VisitaLayout
       >
           {
           this.state.mostrarDatosVisita ?
           <DatosVisita
           handleClickDatosVisita={this.handleClickDatosVisita}
           handleChange={this.handleChange}
           checked={this.state.checked}
           />
           :
           this.state.mostradDatosAscensor ?
           <AscensorPuertaFria
              handleChangeUpload={this.handleChangeUpload}
              imagenesAscensor={this.state.imagenesAscensor}
              cantidadDeAscensoresIncluidos={this.state.ascensor.length}
              handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
              handleReturnDatosVisita={this.handleReturnDatosVisita}
              handleChange={this.handleChange }
              handleClickContinuarYTerminar={this.handleClickContinuar}
              botonVolverAscensor={'Vuelve a datos del cliente'}
             />
            :
              <TerminarVisita
               handleChange={this.handleChange }
               guardarYTerminar={this.handleClickTerminarVisita}
               />
           }
     </VisitaLayout>
     )
  }
}
