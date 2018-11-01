import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';



function DashAdministradores(props) {
  return (
  <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                  <div className="card cardStyle" >
                   <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
                    <div className="card-body">
                    <h5 className="card-title">Alta Administrador</h5>
                    <p className="card-text">Dar de Alta Administrador</p>
                    <button className="btn btn-outline-info" onClick={props.handleClickNuevoAdministrador}>Alta</button>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card cardStyle" >
                 <img className="card-img-top imgDashboard" src={trabajo}  alt="Cartera de Clientes" />
                  <div className="card-body">
                  <h5 className="card-title">Lista Administradores</h5>
                  <p className="card-text">Ver todos los Administradores</p>
                  <button  className="btn btn-outline-info" onClick={props.handleClickPuertaFriaAdministradores} >Ver Administradores</button>
                  </div>
               </div>
            </div>
          </div>
    </div>
  )

}

export default DashAdministradores
