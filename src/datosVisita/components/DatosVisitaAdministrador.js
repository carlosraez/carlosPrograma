import React  from 'react';
import './datosVisita.css'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';

function DatosVisitaAdministrador(props) {
   return (
     <div>
       <div className="row">
         <div className="col-md-6">
           <div className="form-group">
              <label>Nombre de la Administracion</label>
              <input type="text" id="calle" onChange={props.handleChange} placeholder=" Nombre del despacho" className="form-control" / >
           </div>
           <div className="form-group">
              <label>Direccion</label>
              <input type="poblacion" step="0.01" onChange={props.handleChange} id="poblacion" placeholder="Direccion del despacho" className="form-control" />
           </div>
           <div className="form-group">
              <label>Poblacion</label>
              <input type="poblacion" step="0.01" onChange={props.handleChange} id="poblacion" placeholder="Poblacion" className="form-control" />
           </div>
           <div className="row">
           <div className="col-6">
           <div className="form-group">
              <label>Codigo Postal</label>
              <input type="number" id="postal" onChange={props.handleChange} defaultValue="46000" min="00000" max="99999" placeholder="Codigo Postal" className="form-control" />
           </div>
           </div>
           <div className="col-6">
           <div className="form-group">
              <label>Teléfono despacho</label>
              <input type="number" id="postal" onChange={props.handleChange} defaultValue="96123456" min="00000" max="99999" placeholder="Codigo Postal" className="form-control" />
           </div>
           </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-group">
              <label>Nombre del Administrador</label>
              <input type="text" id="nombrePresidente" onChange={props.handleChange} placeholder="Nombre del Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Telefono Móvil del Administrador</label>
              <input type="number" id="telefonoPresidente" onChange={props.handleChange} placeholder="Telefono movil del Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Email Administrador</label>
              <input type="email" id="emailPresidente" onChange={props.handleChange} placeholder="Correo Electronico Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Horario de Oficina</label>
              <input type="text" id="horarioAdministrador" onChange={props.handleChange} placeholder="Horario de Oficina" className="form-control" />
           </div>
         </div>
       </div>
       <div className="form-group">
          <label>Nombre de la persona que te atiende</label>
          <input type="text" id="nombreAdministrador" onChange={props.handleChange} placeholder="Escribe el nombre de la persona del despacho" className="form-control" />
       </div>
       <label >Escribe Alguna Observacion de la visita...</label>
      <textarea className="form-control" id="observacionPuertaFriaAdministradores" onChange={props.handleChange} rows="3"></textarea>
    <div className="row">
    <div className="col-12 col-md-4">
          <div className="card cardStyle" >
           <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
            <div className="card-body">
            <h5 className="card-title">Leed Mantenimiento</h5>
            <p className="card-text">Presupuesto de mantenimiento de otra empresa</p>
            <button className="btn btn-outline-info" onClick={props.handleClickLeedMantenimiento}>Mantenimiento</button>
            </div>
         </div>
    </div>
    <div className="col-12 col-md-4">
          <div className="card cardStyle" >
           <img className="card-img-top imgDashboard" src={trabajo}  alt="Captacion" />
            <div className="card-body">
            <h5 className="card-title">Leed Finca Sin Ascensor</h5>
            <p className="card-text">Presupuesto de poner un ascensor en un edificio</p>
            <button className="btn btn-outline-info" onClick={props.handleClickPuertaFria}>Obra</button>
            </div>
         </div>
    </div>
    <div className="col-12 col-md-4">
          <div className="card cardStyle" >
           <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
            <div className="card-body">
            <h5 className="card-title">Nada</h5>
            <p className="card-text">No le interesa nada por ahora</p>
            <button className="btn btn-outline-info" onClick={props.handleClickPuertaFria}>Nada</button>
            </div>
         </div>
    </div>
    </div>
  </div>
   )
}





export default DatosVisitaAdministrador
