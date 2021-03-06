import React, { Component } from 'react';




export class TablaInformacion extends Component {

   render() {
     return (
       <div>
       <p><strong>Nombre Administrador:</strong> {this.props.despacho}</p>
       <p><strong>Última Visita Comercial:</strong> {this.props.ultimaVisita}</p>
       <p><strong>Visitas Totales:</strong> {this.props.visitaActual}</p>
       <p><strong>Leeds Mantenimiento Totales:</strong>  {this.props.leedsMantenimiento}</p>
       <p><strong>Leeds Obra Nueva Totales:</strong>  {this.props.leedsObraNueva}</p>
       <p><strong>Firmados:</strong>  ?</p>
       <p><strong>Ascensores Actuales:</strong>  ?</p>
       <p><strong>Volumen de negocio Aprox:</strong> {this.props.volumenNegocio} <span>Fincas</span></p>
       <p><strong>Visitas Nulas:</strong> {this.props.visitasNulas}</p>
       <p><strong>Población:</strong> {this.props.poblacion}</p>
       <p><strong>Comercial:</strong> {this.props.comercial}</p>
       <button className="btn btn-success" onClick={this.props.HandleClickSumarVisita}>Sumar Visita</button>
      </div>
     )
   }
}
