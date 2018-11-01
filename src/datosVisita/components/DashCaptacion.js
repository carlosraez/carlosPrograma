import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';



function DashCaptacion(props) {
  return (
  <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                  <div className="card cardStyle" >
                   <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
                    <div className="card-body">
                    <h5 className="card-title">Puerta Fria</h5>
                    <p className="card-text">Visita Comunidades de Vecinos busca al presidente</p>
                    <button className="btn btn-outline-info" onClick={props.handleClickPuertaFria}>Captacion</button>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card cardStyle" >
                 <img className="card-img-top imgDashboard" src={trabajo}  alt="Cartera de Clientes" />
                  <div className="card-body">
                  <h5 className="card-title">Administradores</h5>
                  <p className="card-text">Administradores que no trabajan contigo, Nuevos</p>
                  <button  className="btn btn-outline-info" onClick={props.handleVerTrabajo} >Nuevos Administradores</button>
                  </div>
               </div>
            </div>
          </div>
    </div>
  )

}

export default DashCaptacion
