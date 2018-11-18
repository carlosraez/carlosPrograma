import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import DiaSemana from '../Components/DiaSemana.js'
import DiaLibre from '../Components/DiaLibre.js'
import { QuedadaCliente } from './QuedadaCliente.js'
import moment from 'moment'
import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      mesActual:0,
      estilo:'libre',
      textoBoton:'Reservar'
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

   reserva = () => {
     const semana = []
     for (var i=0;i < DIAS.length;i++){
     var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
     semana.push(dia)
     }
     const horas = [
     '8:00','8:15','8:30','8:45','9:00','9:15','9:30','9:45','10:00','10:15','10:30','10,45','11:00','11:15','11,30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13,30'
     ,'13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15,45','16:00','16:15','16:30','16,45','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45',
    '19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00']
     return (
      <table className="table table-bordered table-sm table-striped">
       <thead>
          <tr>
            <th scope="col">Hora</th>
        {
        DIAS.map((dia,i) => {
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
       </tr>
         </thead>
       <tbody>
       {
        horas.map((hora,i) => {
         return (
           <DiaLibre
          id={hora}
          key={hora}
          hora={hora}
          estilo={this.state.estilo}
          textoBoton={this.state.textoBoton}
          handleClickLibreLunes={this.handleClickLibreLunes}
            />
         )
       })
      }
      </tbody>
      </table>
     )
   }


   handleClickLibreLunes = (event) => {
      this.setState({
        estilo: 'ocupado',
        textoBoton:'Ocupado'
      })
   }

   handleClickLibreMartes = (event) => {
     console.log(event.target);
   }

   handleClickLibreMiercoles =  (event) => {
      console.log(event.target);
   }

    handleClickLibreJueves = (event) => {
      console.log(event.target);
    }

   handleClickLibreViernes = (event) => {
     console.log(event.target);
   }

   handleClickLibreSabado = (event) => {
     console.log(event.target);
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
          {this.reserva()}
       </div>
      </AgendaComponentLayaout>
     )
   }
}
