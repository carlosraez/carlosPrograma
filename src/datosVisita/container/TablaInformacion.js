import React, { Component } from 'react';
import TablaInformacionLayout from '../components/TablaInformacionLayout.js'


export class TablaInformacion extends Component {

   render() {
     return (
       <TablaInformacionLayout>
       <p><strong>Nombre Administrador:</strong> Machancoses</p>
       <p><strong>Visita Actual:</strong> 0</p>
       <p><strong>Leeds Mantenimiento Totales:</strong>  0</p>
       <p><strong>Leeds Obra Nueva Totales:</strong>  0</p>
       <p><strong>Firmados:</strong>  0</p>
       <p><strong>Ascensores Actuales:</strong>  0</p>
       <p><strong>Volumen de negocio Aprox:</strong>  60 <span>Fincas</span></p>
       <p><strong>Visitas Nulas:</strong>  </p>
       </TablaInformacionLayout>

     )
   }
}
