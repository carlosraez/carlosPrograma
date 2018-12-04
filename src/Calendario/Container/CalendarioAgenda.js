import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import { ReservasFilas } from './ReservasFilas.js'
import { firebaseApp } from '../../index.js'
import moment from 'moment'

import '../../../src/locale.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export class CalendarioAgenda extends Component {
  state = {
      siguienteSemana:0,
      reservasFecha:[]

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

   componentDidMount = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const listaReunionesBaseDatos = []
    ref.child(user.uid).child('reuniones').on('child_added', (sanpshot) => {
     const fechaInicio = sanpshot.val().fechaReserva
     const horaInicial = sanpshot.val().horaInicio
     const horaFinal  = sanpshot.val().horaFin
     const principio = moment.duration(horaInicial);
     const final = moment.duration(horaFinal)
     const diferencia = moment.duration(final - principio).asMinutes()
     const resultado = diferencia / 10
     for (let index = 0; index < resultado + 1; index++) {
      const sumaMinutos = index * 10
      let nuevaHoraMinutos = moment.duration(horaInicial).add(sumaMinutos,'minutes').minutes()
      let nuevaHoraHoras =  moment.duration(horaInicial).add(sumaMinutos,'minutes').hours()
      if (nuevaHoraHoras === 8 ) 
      {
        nuevaHoraHoras = '08'
      } 
      else  if (nuevaHoraHoras === 9 )
      {
        nuevaHoraHoras = '09'
      }
      

      if(nuevaHoraMinutos === 0){
        let minutos = '00'
        const horaGenerada = `${nuevaHoraHoras}:${minutos}`
        listaReunionesBaseDatos.push(`${fechaInicio} ${horaGenerada}`)
        
      }
      else {
        const horaGenerada = `${nuevaHoraHoras}:${nuevaHoraMinutos}`
        listaReunionesBaseDatos.push(`${fechaInicio} ${horaGenerada}`)
      }
    }
    
     this.setState({
       reservasFecha:listaReunionesBaseDatos,
     })
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
     
      const horasTotales = []
      const horaNoMostrar = []
      for (let index = 8; index <= 22; index++) {
            let horaVacia = '00:00'
            let horaSimple = `0${index}`
            let horaSimpleUnica = `${index}`
                  if (index <= 9) {
                    horaVacia = `0${index}:00`
                    horasTotales.push(horaVacia)
                    horaNoMostrar.push(`00:${index}`)
                    for (let index = 0; index < 6; index++) {
                      let minutos = `${index * 10}`  
                      if (minutos === '0') {
                        
                      }    
                      else if (minutos === '5') 
                          {
                          let horas = `${horaSimple}:05`
                          horasTotales.push(horas)
                          horaNoMostrar.push(horas)
                          } 
                      else 
                          {
                          let horas = `${horaSimple}:${minutos}`
                          horasTotales.push(horas)
                          horaNoMostrar.push(horas)
                          }     
                    }
                  } 
                  else {
                        horaVacia = `${index}:00`
                        horasTotales.push(horaVacia)
                        horaNoMostrar.push(`00:${index}`)
                          for (let index = 0; index < 6; index++) {
                            let  minutos = `${index * 10}`
                            if (minutos === '0') {
                              
                            }    
                        else if (minutos === '5') 
                            {
                              let horas = `${horaSimpleUnica}:05`
                              horasTotales.push(horas)
                              horaNoMostrar.push(horas)
                            } 
                          else 
                            {
                              let horas = `${horaSimpleUnica}:${minutos}`
                              horasTotales.push(horas)
                              horaNoMostrar.push(horas)
                            }     
                        }
                  }
      }
      
        
      return (
         <table className="table table-bordered table-hover table-sm">
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
          horasTotales.map((hora,i) => {  
            return (
             <ReservasFilas
             reservasFecha={this.state.reservasFecha}
             horaNoMostrar={horaNoMostrar[i]}
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
