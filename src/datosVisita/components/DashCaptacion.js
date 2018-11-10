import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import { TablaLeeds } from '../container/TablaLeeds.js'



function DashCaptacion(props) {
  return (
  <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                  <div className="card cardStyle" >
                   <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
                    <div className="card-body">
                    <h5 className="card-title">Puerta Fría</h5>
                    <p className="card-text">Visita Comunidades de Vecinos</p>
                    <button className="btn btn-outline-info" onClick={props.handleClickPuertaFria}>Captacion</button>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card cardStyle" >
                 <img className="card-img-top imgDashboard" src={trabajo}  alt="Cartera de Clientes" />
                  <div className="card-body">
                  <h5 className="card-title">Administradores</h5>
                  <p className="card-text">Captación de Administradores</p>
                  <button  className="btn btn-outline-info" onClick={props.handleClickPuertaFriaAdministradores} >Nuevos Administradores</button>
                  </div>
               </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-12 col-md-10">
                  <div className="card cardStyle" >
                   <TablaLeeds />
                 </div>
              </div>
              <div className="col-md-1">
              </div>
        </div>
    </div>
  )

}

export default DashCaptacion
