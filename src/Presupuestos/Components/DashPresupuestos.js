import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';



function DashPresupuestos(props) {
  return (
  <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                  <div className="card cardStyle" >
                   <img className="card-img-top imgDashboard" src={visita}  alt="Mantenimiento" />
                    <div className="card-body">
                    <h5 className="card-title">Mantenimiento</h5>
                    <p className="card-text">Trabaja los presupuestos de Mantenimiento</p>
                    <button className="btn btn-outline-info" onClick={props.handleClickMantenimiento}>Mantenimiento</button>
                    </div>
                 </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card cardStyle" >
                 <img className="card-img-top imgDashboard" src={trabajo}  alt="Acta de Industria" />
                  <div className="card-body">
                  <h5 className="card-title">Actas de Industria</h5>
                  <p className="card-text">Realiza las Actas de Industria</p>
                  <button  className="btn btn-outline-info" onClick={props.handleClickActasDeIndustria} >Actas</button>
                  </div>
               </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6">
              <div className="card cardStyle" >
               <img className="card-img-top imgDashboard" src={trabajo}  alt="Reparaciones" />
                <div className="card-body">
                <h5 className="card-title">Reparaciones</h5>
                <p className="card-text">Presupuesta las reparaciones del ascensor</p>
                <button  className="btn btn-outline-info" onClick={props.handleClickReparaciones} >Reparaciones</button>
                </div>
             </div>
          </div>
          <div className="col-12 col-md-6">
              <div className="card cardStyle" >
               <img className="card-img-top imgDashboard" src={trabajo}  alt="Modernizaciones" />
                <div className="card-body">
                <h5 className="card-title">Modernizaciones</h5>
                <p className="card-text">Moderniza la instalacion</p>
                <button  className="btn btn-outline-info" onClick={props.handleClickModernizacion} >Moderniza la instalacion</button>
                </div>
             </div>
          </div>
        </div>
    </div>
  )

}

export default DashPresupuestos
