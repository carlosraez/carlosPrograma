import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import { Reservas } from './Reservas.js'
import  { QuedadaCliente }  from './QuedadaCliente.js'
import moment from 'moment'
import swal from 'sweetalert';
import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      reservados: [],
      diaQedada:'',
      horaQuedada:'',
      direccionQedada:'',
      poblacionQedada:'',
      motivoQedada:'',
      tipoCliente:'',

   }

   handleChange = (event) => {
     const target = event.target
     const value  = target.value
     const id     = target.id
     this.setState({
       [id]: value
     })
   }

   calcularFecha =  () => {
     const fecha = moment().format('LLLL')
     return fecha

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

   handleClickReserva = (event,dia,mes,year,hora) => {
    const { reservados } =  this.state
    let reserva = reservados
    reserva.push(`${dia} ${mes} ${year} ${hora}`)
    this.setState({
     reservados: reserva,
     })

   }

   handleClickReservaForm = (event) => {
     event.preventDefault()
     const { reservados, horaQuedada, diaQedada } =  this.state
     const diaReserva = moment(diaQedada).format('DD')
     const mesReserva = moment(diaQedada).format('MM')
     const anoReserva = moment(diaQedada).format('YYYY')
     let reserva = reservados
     reserva.push(`${diaReserva} ${mesReserva} ${anoReserva} ${horaQuedada}`)
     this.setState({
      reservados: reserva,
      })
      swal('La visita ha sido efectuada')
   }

   reserva = () => {
     const semana = []
     const mesesActual = []
     const year = []
     for (var i=0;i < DIAS.length;i++){
     var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
     var mes = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MM")
     var ano = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("YYYY")
     mesesActual.push(mes)
     semana.push(dia)
     year.push(ano)
     }
     const horas = [
     '08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30'
     ,'13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45',
    '19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00']
     return (
         <table className="table table-bordered table-sm table-striped">
          <thead>
             <tr>
          <th scope="col">Hora</th>
          <th scope="col">Lunes: {semana[1]}</th>
          <th scope="col">Martes: {semana[2]}</th>
          <th scope="col">Miercoles: {semana[3]}</th>
          <th scope="col">Jueves: {semana[4]}</th>
          <th scope="col">Viernes: {semana[5]}</th>
          <th scope="col">Sabado: {semana[6]}</th>
           </tr>
            </thead>
         <tbody>
        {
          horas.map((hora) => {
            return (
             <Reservas
             semana={semana}
             key={hora}
             hora={hora}
             mes={mesesActual}
             year={year}
             handleClickReserva={this.handleClickReserva}
             reservados={this.state.reservados}
             />
            )
          })
         }
       </tbody>
      </table>
     )
   }



   render() {
     console.log(this.state.diaQedada);
     return (
       <div className="row">
       <div className="col-12 col-md-8">
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
        <div className="col-12 col-md-4">
            <QuedadaCliente
              handleChange={this.handleChange}
              handleClickReservaForm={this.handleClickReservaForm}
            />
        </div>
      </div>
     )
   }
}
