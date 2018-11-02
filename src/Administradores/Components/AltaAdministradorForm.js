import React  from 'react';
import './AltaAdministradorForm.css'

function AltaAdministradorForm(props) {
   return (
     <div>
       <div className="row">
         <div className="col-md-6">
           <div className="form-group">
              <label>Nombre de la Administracion</label>
              <input type="text" id="despacho" onChange={props.handleChange} placeholder=" Nombre del despacho" className="form-control" / >
           </div>
           <div className="form-group">
              <label>Direccion</label>
              <input type="text"  onChange={props.handleChange} id="direccion" placeholder="Direccion del despacho" className="form-control" />
           </div>
           <div className="form-group">
              <label>Poblacion</label>
              <input type="text"  onChange={props.handleChange} id="poblacion" placeholder="Poblacion" className="form-control" />
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
              <input type="number" id="telefonoDespacho" onChange={props.handleChange} defaultValue="96123456" min="00000" max="99999" placeholder="Codigo Postal" className="form-control" />
           </div>
           </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-group">
              <label>Nombre del Administrador</label>
              <input type="text" id="nombreAdministrador" onChange={props.handleChange} placeholder="Nombre del Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Telefono Móvil del Administrador</label>
              <input type="number" id="telefonoMovilAdministrador" onChange={props.handleChange} placeholder="Telefono movil del Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Email Administrador</label>
              <input type="email" id="emailAdministrador" onChange={props.handleChange} placeholder="Correo Electronico Administrador" className="form-control" />
           </div>
           <div className="form-group">
             <label>Horario de Oficina</label>
              <input type="text" id="horarioDespacho" onChange={props.handleChange} placeholder="Horario de Oficina" className="form-control" />
           </div>
         </div>
       </div>
       <div className="form-group">
          <label>Nombre de la persona que te atiende</label>
          <input type="text" id="personaAtencion" onChange={props.handleChange} placeholder="Escribe el nombre de la persona del despacho" className="form-control" />
       </div>
       <div className="form-group">
          <label>Volumen de Negocio Aproximado</label>
          <input type="number" id="volumenNegocio" onChange={props.handleChange} placeholder="Escribe el volumen aproximado de Comunidades del Administrador" className="form-control" />
       </div>
       <div className="form-group">
       <label >Escribe Alguna Observacion de la visita...</label>
      <textarea className="form-control" id="observacionAdministrador" onChange={props.handleChange} rows="3"></textarea>
       </div>
      <button className="btn btn-success btn-block" onClick={props.handleClickGuardarAdministrador}>Guardar Y Dar de Alta</button>
  </div>
   )
}





export default AltaAdministradorForm
