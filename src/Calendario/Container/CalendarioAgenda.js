import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import { Reservas } from './Reservas.js'
import moment from 'moment'

import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,

   }


   calcularFecha =  () => {
     const fecha = moment().format('LLLL')
     return `hoy es ${fecha}`

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



    reserva = () => {
     const semana = []
     const mesActual = []
     const year = []
     const hoy = moment().format('L')
     for (var i=0;i < DIAS.length;i++){
     var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
     var mes = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MM")
     var ano = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("YYYY")
     mesActual.push(mes)
     semana.push(dia)
     year.push(ano)
     }
     
      const horas = ['08:00','08:10','08:20','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00',]
      const horitas = []
      for (let index = 8; index <= 22; index++) {
          let vacia = '00:00'
          if (index <= 9) {
            for (let index = 0; index < 12; index++) {
            console.log(`${index * 5}`);
            
            let minutos = `${index * 5}`
              vacia = `0${index}:${minutos}`
            }
          } else {
            vacia = `${index}:00`
            for (let index = 0; index < 12; index++) {
            let  minutos = `${index * 5}`
              vacia = `0${index}:${minutos}`
            }
          }
          horitas.push(vacia)
        
        
      }
      console.log(horitas);
      
      
      
      return (
         <table className="table table-bordered table-sm table-striped">
          <thead>
             <tr>
          <th scope="col">Hora</th>
          <th scope="col">Lunes: {semana[1]} {hoy === `${semana[1]}/${mesActual[1]}/${year[1]}` ? 'Hoy' : ''}</th>
          <th scope="col">Martes: {semana[2]} {hoy === `${semana[2]}/${mesActual[2]}/${year[2]}` ? 'Hoy es' : ''}</th>
          <th scope="col">Miercoles: {semana[3]} {hoy === `${semana[3]}/${mesActual[3]}/${year[3]}` ? 'Hoy es' : ''}</th>
          <th scope="col">Jueves: {semana[4]} {hoy === `${semana[4]}/${mesActual[4]}/${year[4]}` ? 'Hoy es' : ''}</th>
          <th scope="col">Viernes: {semana[5]} {hoy === `${semana[5]}/${mesActual[5]}/${year[5]}` ? 'Hoy es' : ''}</th>
          <th scope="col">Sabado: {semana[6]} {hoy === `${semana[6]}/${mesActual[6]}/${year[6]}` ? 'Hoy es' : ''}</th>
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
             mes={mesActual}
             year={year}
             handleClickReserva={this.handleClickReserva}

             />
            )
          })
         }
       </tbody>
      </table>
     )
   }



   render() {
   
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
