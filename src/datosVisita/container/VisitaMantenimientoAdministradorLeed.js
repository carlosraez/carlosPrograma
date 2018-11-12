import React, { Component } from 'react';




export class VisitaMantenimientoAdministradorLeed extends Component {
   state = {
     actualTipoLeed: this.props.tipoLeed
   }
   render() {
     console.log(this.state.actualTipoLeed);
     return (
       <div>
       {this.state.actualTipoLeed}
      </div>
     )
   }
}
