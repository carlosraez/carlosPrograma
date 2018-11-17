import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import DiaSemana from '../Components/DiaSemana.js'
import moment from 'moment'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Diciembre','Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      mesActual:0
   }

   calcularFecha =  () => {
     const date = new Date()
     const mesActual = date.getMonth()
     const diaActual = date.getDay()
     const diaDeMes = date.getDate()
     const ano = date.getFullYear()
     return `Hoy es ${DIAS[diaActual]} dia ${diaDeMes}  del ${MESES[mesActual]} del ${ano}`
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

   calculoSemanaDias = () => {
    const semana = []
    let mesActual = ''
    for (var i=0;i < DIAS.length;i++){
    var dia = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("DD")
    var mes = moment().startOf('week').add(MESES, "month").add(i,"days").add(this.state.siguienteSemana,"week").format("MM")
    mesActual = mes
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
        mes={MESES[this.state.mesActual]}
        fechaActual={this.calcularFecha()}
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
                <tr>
                    <th scope="row">8:00</th>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                    <td><button className="btn btn-success btn-block">Libre</button></td>
                </tr>
                <tr>
                  <th scope="row">9:00</th>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                </tr>
                <tr>
                  <th scope="row">10:00</th>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                 </tr>
                 <tr>
                 <th scope="row">11:00</th>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                 <td><button className="btn btn-success btn-block">Libre</button></td>
                </tr>
                <tr>
                <th scope="row">12:00</th>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
               </tr>
               <tr>
                  <th scope="row">13:00</th>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
              </tr>
              <tr>
                  <th scope="row">14:00</th>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
             </tr>
             <tr>
                  <th scope="row">15:00</th>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
                  <td><button className="btn btn-success btn-block">Libre</button></td>
            </tr>
            <tr>
                <th scope="row">16:00</th>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
           </tr>
           <tr>
               <th scope="row">17:00</th>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>

          </tr>
          <tr>
              <th scope="row">18:00</th>
              <td><button className="btn btn-success btn-block">Libre</button></td>
              <td><button className="btn btn-success btn-block">Libre</button></td>
              <td><button className="btn btn-success btn-block">Libre</button></td>
              <td><button className="btn btn-success btn-block">Libre</button></td>
              <td><button className="btn btn-success btn-block">Libre</button></td>
              <td><button className="btn btn-success btn-block">Libre</button></td>
            </tr>
            <tr>
               <th scope="row">19:00</th>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
               <td><button className="btn btn-success btn-block">Libre</button></td>
            </tr>
            <tr>
                <th scope="row">20:00</th>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
              </tr>
              <tr>
                <th scope="row">21:00</th>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
                <td><button className="btn btn-success btn-block">Libre</button></td>
             </tr>
               </tbody>
          </table>
       </div>
      </AgendaComponentLayaout>
     )
   }
}
