import React, { Component } from 'react';
import AgendaComponentLayaout from '../Components/AgendaComponentLayout.js'
import moment from 'moment'

export class CalendarioAgenda extends Component {
  state = {

   }

   render() {
    const fechaHoy = moment().format('MMMM Do YYYY, h:mm:ss a')
     return (
       <AgendaComponentLayaout
        nombre={'dias libres'}
       >
       <div className="table-responsive">
       <span>{fechaHoy}</span>
          <table className="table table-bordered table-sm">
               <thead>
                <tr>
                  <th scope="col">Hora</th>
                  <th scope="col">Lunes</th>
                  <th scope="col">Martes</th>
                  <th scope="col">Miercoles</th>
                  <th scope="col">Jueves</th>
                  <th scope="col">Viernes</th>
                  <th scope="col">Sábado</th>
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
