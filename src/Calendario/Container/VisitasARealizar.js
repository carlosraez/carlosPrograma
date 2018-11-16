import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'



export class VisitasARealizar extends Component {


   render() {

     return (
       <AgendaComponentLayaout
        nombre={'Trabajo para hoy'}
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
