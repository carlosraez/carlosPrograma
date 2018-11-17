import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'

const DIAS = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
const MESES = ['Diciembre','Enero','Febrero','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre']

export class VisitasARealizar extends Component {


  calcularFecha =  () => {
    const date = new Date()
    const mesActual = date.getMonth()
    const diaActual = date.getDay()
    const diaDeMes = date.getDate()
    const ano = date.getFullYear()
    return `Hoy es ${DIAS[diaActual]} dia ${diaDeMes}  del ${MESES[mesActual]} del ${ano}`
  }

   render() {

     return (
       <AgendaComponentLayaout
        nombre={'Trabajo para hoy'}
        fechaActual={this.calcularFecha()}
        verSiguiente={'Día siguiente'}
        verAnterior={'Día anterior'}
       >
        <div className="table-responsive">
           <table className="table table-bordered table-sm">
                <thead>
                 <tr>
                   <th scope="col">Hora</th>
                   <th scope="col">Direccion</th>
                   <th scope="col">Poblacion</th>
                   <th scope="col">Distancia</th>
                   <th scope="col">Tipo Cliente</th>
                   <th scope="col">¿A que voy?</th>
                   <th scope="col">Completada</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                     <th scope="row">8:00</th>
                     <td>Martin el Humano 12</td>
                     <td>Valencia</td>
                     <td>Estas a 12 km</td>
                     <td>Administrador</td>
                     <td>Ver una Oca</td>
                     <td><button className="btn btn-info mr-2">Completada</button></td>
                 </tr>
                 <tr>
                   <th scope="row">8:00</th>
                   <td>Martin el Humano 12</td>
                   <td>Valencia</td>
                   <td>12 km</td>
                   <td>Administrador</td>
                   <td>Ver una Oca</td>
                   <td><button className="btn btn-info mr-2">Completada</button></td>
                 </tr>
                 <tr>
                   <th scope="row">8:00</th>
                   <td>Martin el Humano 12</td>
                   <td>Valencia</td>
                   <td>12 km</td>
                   <td>Administrador</td>
                   <td>Ver una Oca</td>
                   <td><button className="btn btn-info mr-2">Completada</button></td>
                  </tr>
                </tbody>
           </table>
        </div>
      </AgendaComponentLayaout>
     )
   }
}
