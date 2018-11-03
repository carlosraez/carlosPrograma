import React from 'react'
import BusquedaAdministradoresTotalesLayout from '../Components/BusquedaAdministradoresTotalesLayout.js'


function BusquedaAdministradoresTotales (props) {
      return (
        <BusquedaAdministradoresTotalesLayout
        handleClickAlta={props.handleClickAlta}
        >
        <div className="form-group">
            <label>Buscar Administrador</label>
            <input type="text" id="buscarAdministrador" onChange={props.handleChange}  placeholder="Introduce el nombre de un despacho" className="form-control" / >
        </div>
        </BusquedaAdministradoresTotalesLayout>
      )
  }

export default BusquedaAdministradoresTotales
