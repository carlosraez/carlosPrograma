import React, { Component } from 'react';
import { VisitasARealizar } from './VisitasARealizar.js'
import { QuedadaCliente } from './QuedadaCliente.js'
import { CalendarioAgenda } from './CalendarioAgenda.js'


export class Agenda extends Component {
  state = {

   }

   render() {

     return (
      <div className="container-fluid">
         <div className="row">
             <div className="col-12 col-md-9">
               <VisitasARealizar />
               <CalendarioAgenda />
         </div>
          <div className="col-12 col-md-3">
            <QuedadaCliente />
         </div>
        </div>
       </div>
     )
   }
}
