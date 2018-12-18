
import React, { Component } from 'react';
import { VisitasARealizar } from './VisitasARealizar.js'
import { CalendarioAgenda } from './CalendarioAgenda.js'



export class Agenda extends Component {
  state = {

   }

   render() {

     return (
      <div className="container-fluid">
         <div className="row">
             <div className="col-12 col-md-12">
               <VisitasARealizar />
               <CalendarioAgenda />
            </div>
         </div>
        </div>
     )
   }
}
