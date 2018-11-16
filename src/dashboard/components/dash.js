import React from 'react';
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import presupuesto from '../../pictures/presupuesto.jpg';
import calendario from '../../pictures/calendario.jpg';
import podium from '../../pictures/podium.png';
import administradores from '../../pictures/administradores.jpg';
import { Link } from 'react-router-dom'


function Dash(props) {
  return (
  <div className="container">
    <div className="row">
       <div className="col-12 col-md-4">
         <div className="card cardStyle" >
          <img className="card-img-top imgDashboard" src={visita}  alt="visita" />
           <div className="card-body">
           <h5 className="card-title">Haz una Visita</h5>
           <p className="card-text">Las visitas son muy necesarias ¡Empieza!</p>
           <button className="btn btn-outline-info" onClick={props.handleClickVisitas}>Visita</button>
           </div>
        </div>
       </div>
       <div className="col-12 col-md-4">
         <div className="card cardStyle" >
          <img className="card-img-top imgDashboard" src={trabajo}  alt="listas-visitas" />
           <div className="card-body">
           <h5 className="card-title">Mira tus Visitas</h5>
           <p className="card-text">Vamos a listar las vistas para ver las tareas a realizar</p>
           <button  className="btn btn-outline-info" onClick={props.handleVerTrabajo} >Ver Trabajo</button>
           </div>
        </div>
       </div>
       <div className="col-12 col-md-4">
         <div className="card cardStyle" >
          <img className="card-img-top imgDashboard" src={presupuesto}  alt="Presupuestos" />
           <div className="card-body">
           <h5 className="card-title">Realiza un presupuesto</h5>
           <p className="card-text">Ayudate de hacer presupuestos rápidamente para firmar más rapido</p>
           <button  className="btn btn-outline-info" onClick={props.handleClickPresupuestos} >Haz Presupuestos</button>
           </div>
        </div>
       </div>
       <div className="row">
         <div className="col-12 col-md-4">
           <div className="card cardStyle" >
            <img className="card-img-top imgDashboard" src={calendario}  alt="planos"/>
             <div className="card-body">
             <h5 className="card-title">Calendario</h5>
             <p className="card-text">Trabaja tu calendario de trabajo es tu nueva Agenda</p>
              <button  className="btn btn-outline-info" onClick={props.handleClickAgenda} >Agenda</button>
             </div>
          </div>
         </div>
         <div className="col-12 col-md-4">
           <div className="card cardStyle" >
            <img className="card-img-top imgDashboard" src={administradores} alt="administradores"  />
             <div className="card-body">
             <h5 className="card-title">Lista tus Administradores</h5>
             <p className="card-text">Añade nuevos Admistradores como contacto, y mira e edita tu listado</p>
             <button  className="btn btn-outline-info" onClick={props.handleClickAdministradores} >Administradores</button>
             </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card cardStyle" >
           <img className="card-img-top imgDashboard" src={podium} alt="podium" />
            <div className="card-body">
            <h5 className="card-title">¿Eres el mejor?</h5>
            <p className="card-text">¿Quien vende mas?¿Donde Puedes Mejorar?</p>
            <Link to="/Aplicacion" className="btn btn-outline-info">Gana el torneo</Link>
            </div>
         </div>
     </div>
  </div>
    </div>
  </div>
  )

}

export default Dash
