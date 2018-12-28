import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import { ReservasFilas } from './ReservasFilas.js'
import { firebaseApp } from '../../index.js'
import Dia from '../Components/Dia.js'
import moment from 'moment'
import '../../../src/locale.js'

const DIAS = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      reservasFecha:[],
      titulosReuniones:[],
      horaInicioReunion:[],
      horaFinalReunion:[],
      minutosTotales:[],
      direccionReservaBaseDatos:[],
      nombreReservasBaseDatos:[],
      fechaReserva:[]
   }

   calcularFecha =  () => {
     const fecha = moment().format('LLLL')
     return `Hoy es ${fecha}`

   }

   handleClickSiguiente = () => {
      this.setState({
        siguienteSemana:this.state.siguienteSemana + 1
      })
   }


   handleClickAnteriorSemana = () => {
     this.setState({
       siguienteSemana:this.state.siguienteSemana - 1
     })
   }

   componentDidMount = ()  => {       
     this.recargarCalendario()
 }

    recargarCalendario = () => {
      const ref  = firebaseApp.database().ref('usuarios')
      const user = firebaseApp.auth().currentUser;
      let reservas = []
      const fechasReuniones = []
      const titulos = []
      const inicio = []
      const horaFinalReserva = []
      const minutosTotales = []
      const direcionReserva = []
      const fechaReserva = []
      ref.child(user.uid).child('reuniones').on('child_added', (sanpshot) => {     
        const reserva = sanpshot.key 
        const fechaInicio = sanpshot.val().fechaReserva	     
        const horaInicial = sanpshot.val().horaInicio	     
        const horaFinal  = sanpshot.val().horaFin	  
        const reunionNombres  = sanpshot.val().tituloReserva 
        const direccion  = sanpshot.val().direccion  
        const principio = moment.duration(horaInicial);	        
        const final = moment.duration(horaFinal)	     
        const diferencia = moment.duration( final - principio).asMinutes()	
        fechaReserva.push(fechaInicio)                   
        minutosTotales.push(diferencia)
        fechasReuniones.push(`${fechaInicio} ${horaInicial}`)
        titulos.push(reunionNombres)
        inicio.push(horaInicial)
        horaFinalReserva.push(horaFinal)
        direcionReserva.push(direccion) 
        reservas.push(reserva)  
       this.setState({
        nombreReservasBaseDatos:reservas,
         reservasFecha:fechasReuniones,
         titulosReuniones:titulos,
         horaInicioReunion:inicio,
         horaFinalReunion:horaFinalReserva,
         minutosTotales:minutosTotales,
         direccionReservaBaseDatos:direcionReserva,
         fechaReserva
         })  
       })
    }

    reserva = () => {
     const semana = []
     const mesActual = []
     const year = []
     const hoy = moment().format('L')
     for (var i=0 ;i < 7; i++){
     var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
     var mes = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MM")
     var ano = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("YYYY")
     mesActual.push(mes)
     semana.push(dia)
     year.push(ano)
     }
       

      const horasTotales = ['08:00']
      horasTotales.push(moment(horasTotales, 'h:mm').add(30, 'minutes').format('HH:mm'))
      for (let index = 1; index < 30; index++) {
        horasTotales.push(moment(horasTotales[index], 'h:mm').add(30, 'minutes').format('HH:mm'))  
      }
      
    
      const { reservasFecha , 
        titulosReuniones ,
         horaInicioReunion , 
         horaFinalReunion,
          minutosTotales,
          direccionReservaBaseDatos,
          nombreReservasBaseDatos,
        } = this.state
   
      return (
         <table className="table table-bordered table-hover table-sm">
          <thead>
             <tr>
          <th scope="col">Hora</th>
           {
              DIAS.map( (dia,i) => {
                let index = i + 1
                return (
                  <Dia
                  key={dia}
                  semana={semana[index]}
                  dia={dia}
                  year={year[index]}
                  mesActual={mesActual[index]}
                  hoy={hoy}
                  />
                )
              })
           }
           </tr>
            </thead>
         <tbody>
        {
          horasTotales.map((hora,i) => {  
           
            return (
             <ReservasFilas
             recargarComponenteCalendario={this.recargarCalendario}
             nombreReservasBaseDatos={nombreReservasBaseDatos}
             reservasFecha={reservasFecha}
             tituloReservaBaseDatos={titulosReuniones}
             horaInicioReunion={horaInicioReunion}
             horaFinalReunion={horaFinalReunion}
             direccionReservaBaseDatos={direccionReservaBaseDatos}
             semana={semana}
             key={hora}
             hora={hora}
             mes={mesActual}
             year={year}
             handleClickReserva={this.handleClickReserva}
             minutosTotales={minutosTotales}
             />
            )
          })
         }
       </tbody>
      </table>
     )
   }
  

   render() {   
     console.log('soy el render del componente Calendario');
               
     return (
       <div className="row">
       <div className="col-12">
           <AgendaComponentLayaout
            nombre={'dias libres'}
            fechaActual={this.calcularFecha()}
            verSiguiente={'Siguiente Semana'}
            verAnterior={'Anterior Semana'}
            handleClickSiguiente={this.handleClickSiguiente}
            handleClickAnterior={this.handleClickAnteriorSemana}
           >
           <div className="table-responsive">
           {this.reserva()}
           </div>
          </AgendaComponentLayaout>
        </div>
      </div>
     )
   }
}