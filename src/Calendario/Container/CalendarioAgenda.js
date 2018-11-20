import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import DiaSemana from '../Components/DiaSemana.js'
import Horas from '../Components/Horas.js'
import DiaReserva from '../Components/DiaReserva.js'
import moment from 'moment'
import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      mesActual:0,
      estilo:'libre',
      textoBoton:'Reservar',
      id:'',
      name:'',
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



   calcularMes = () => {
     for (var i = 0; i < DIAS.length; i++) {
     var mes =  moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MMMM")
   }
     return mes
   }

   handleClickLibreLunes = (event) => {
     const target = event.target
     const  id = target.id
     const name = target.name
     this.setState({
       id:id,
       name:name
     })
   }

   reserva = () => {
     const semana = []
     for (var i=0;i < DIAS.length;i++){
     var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
     semana.push(dia)
     }
     const horas = [
     '8:00','8:15','8:30','8:45','9:00','9:15','9:30','9:45','10:00','10:15','10:30','10,45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30'
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
           <Horas
          key={hora}
          lunes={semana[1]}
          martes={semana[2]}
          miercoles={semana[3]}
          jueves={semana[4]}
          viernes={semana[5]}
          sabado={semana[6]}
          hora={hora}
          handleClickLibreLunes={this.handleClickLibreLunes}
          textoBoton={this.state.textoBoton}
          estilo={this.state.estilo}
           />
          )
        })
       }
     </tbody>
    </table>
     )
   }



   render() {
     console.log(this.state.id, this.state.name);
     return (
       <AgendaComponentLayaout
        nombre={'dias libres'}
        fechaActual={this.calcularFecha()}
        mes={this.calcularMes()}
        verSiguiente={'Siguiente Semana'}
        verAnterior={'Anterior Semana'}
        handleClickSiguiente={this.handleClickSiguiente}
        handleClickAnterior={this.handleClickAnteriorSemana}
       >
       <div className="table-responsive">
          {this.reserva()}
       </div>
      </AgendaComponentLayaout>
     )
   }
}
