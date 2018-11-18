import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import DiaSemana from '../Components/DiaSemana.js'
import DiaLibre from '../Components/DiaLibre.js'
import moment from 'moment'
import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      mesActual:0
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

   reservaHora = () => {

   }

   calcularMes = () => {
     for (var i = 0; i < DIAS.length; i++) {
     var mes =  moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MMMM")
   }

     return mes
   }



   calculoSemanaDias = () => {
    const semana = []
    for (var i=0;i < DIAS.length;i++){
    var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
    semana.push(dia)
    }

     return DIAS.map((dia,i) => {
       if (dia === 'Domingo') {
          return false
       }
       else  {
         return (
           <DiaSemana
              key={dia}
              hora={'Hora'}
              diaSemana={dia}
              diaDeMes={semana[i]}
            />
         )
       }

     })
   }


   render() {
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
          <table className="table table-bordered table-sm">
               <thead>
                  <tr>
                      <th scope="col">Hora</th>
               {
                 this.calculoSemanaDias()
               }
                </tr>
               </thead>
               <tbody>
                 {
                   this.reservaHora()
                 }
               </tbody>
          </table>
       </div>
      </AgendaComponentLayaout>
     )
   }
}
