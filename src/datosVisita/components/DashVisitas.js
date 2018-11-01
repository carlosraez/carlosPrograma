import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';



function DashVisitas(props) {
  return (
  <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                  <div className="card cardStyle" >
                   <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
                    <div className="card-body">
                    <h5 className="card-title">Captación</h5>
                    <p className="card-text">Consigue nuevos Clientes, contratos de mantenimiento, Haz nuevas relaciones con administradores que no trabajen contigo</p>
                    <button className="btn btn-outline-info" onClick={props.handleClickCaptacion}>Captacion</button>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card cardStyle" >
                 <img className="card-img-top imgDashboard" src={trabajo}  alt="Cartera de Clientes" />
                  <div className="card-body">
                  <h5 className="card-title">Cartera de Clientes</h5>
                  <p className="card-text">Trabaja tu cartera de Clientes, tus administradores y tus Comunidades</p>
                  <button  className="btn btn-outline-info" onClick={props.handleVerTrabajo} >Cartera</button>
                  </div>
               </div>
            </div>
          </div>
          <div className="row">
                  <div className="col-md-3"></div>
                    <div className="col-12 col-md-6">
                    <div className="card cardStyle">
                     <img className="card-img-top imgDashboard" src={visita}  alt="Obra Nueva" />
                      <div className="card-body">
                      <h5 className="card-title">Obra Nueva</h5>
                      <p className="card-text">Fincas Sin Ascensor, Obra Nueva , Salvaescaleras</p>
                      <button className="btn btn-outline-info" onClick={props.handleClickVisitas}>Obra Nueva</button>
                      </div>
                   </div>
                </div>
              <div className="col-md-3"></div>
            </div>
    </div>
  )

}

export default DashVisitas
