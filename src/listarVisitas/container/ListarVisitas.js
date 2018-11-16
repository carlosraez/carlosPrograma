import React, { Component } from 'react';
import ListarVisitaCompleta from '../components/listarVisitaCompleta.js'
import FiltrarCalle from '../components/filtrarCalle.js'
import FiltrarPoblacion from '../components/filtrarPoblacion.js'
import FiltrarCodigoPostal from '../components/filtrarCodigoPostal.js'
import FiltrarMantenedor from '../components/filtrarMantenedor.js'
import FiltrarInteres from '../components/filtroInteres.js'
import FiltrarAdministrador from '../components/filtrarAdministrador.js'
import FiltrarTipoPresupuesto from '../components/filtrarTipoPresupuesto.js'
import FiltrarProxAccion from '../components/filtrarProxAccion.js'


import './listarVisitas.css'

class ListarVisitas extends Component {
  state = {
      usuario: '',
      filtroCalle: '',
      filtroPoblacion:'',
      filtroPostal:'',
      filtroMantenedor:'',
      filtroInteres:'',
      filtroAdministrador:'',
      filtroTipoPresupuesto:'',
      filtroProxAccion:'',
      letrasUsuario: '',
    }
 handleChange = (event) => {
   const value = event.target.value
   this.setState({
     letrasUsuario: value
   })
   if (event.target.name === 'calle' && event.target.value !== '' )
   {
     this.setState({
       filtroCalle: true,

     })
   }
   else {
     this.setState({
       filtroCalle: false
     })
   }
     if (event.target.name === 'poblacion' && event.target.value !== '' )
     {
       this.setState({
         filtroPoblacion: true
       })
     }
     else {
       this.setState({
         filtroPoblacion: false
       })
   }
   if (event.target.name === 'codigoPostal' && event.target.value !== '' )
   {
     this.setState({
       filtroPostal: true
     })
   }
   else {
     this.setState({
       filtroPostal: false
     })
 }
 if (event.target.name === 'mantenedor' && event.target.value !== '' )
 {
   this.setState({
     filtroMantenedor: true
   })
 }
 else {
   this.setState({
     filtroMantenedor: false
   })
}
if (event.target.name === 'interes' && event.target.value !== '' )
{
  this.setState({
    filtroInteres: true
  })
}
else {
  this.setState({
    filtroInteres: false
  })
}
if (event.target.name === 'administrador' && event.target.value !== '' )
{
  this.setState({
    filtroAdministrador: true
  })
}
else {
  this.setState({
    filtroAdministrador: false
  })
}
if (event.target.name === 'tipoPresupuesto' && event.target.value !== '' )
{
  this.setState({
    filtroTipoPresupuesto: true
  })
}
else {
  this.setState({
    filtroTipoPresupuesto: false
  })
}
if (event.target.name === 'proxAccion' && event.target.value !== '' )
{
  this.setState({
    filtroProxAccion: true
  })
}
else {
  this.setState({
    filtroProxAccion: false
  })
   }
 }


  render () {
    return (
      <div>
        <div className="table-responsive">
         <table className="table">
            <thead>
                 <tr>
                   <th scope="col">Nº</th>
                   <th scope="col"><input className="form-control" name="calle" type="text" onChange={this.handleChange} placeholder="Direccion"/></th>
                   <th scope="col"><input className="form-control" name="poblacion" type="text" onChange={this.handleChange} placeholder="Poblacion"/></th>
                   <th scope="col"><input className="form-control" name="codigoPostal" type="text" onChange={this.handleChange} placeholder="Codigo Postal"/></th>
                   <th scope="col"><input className="form-control" name="mantenedor" type="text" onChange={this.handleChange} placeholder="Mantenedor"/></th>
                   <th scope="col"><input className="form-control" name="interes" type="text" onChange={this.handleChange} placeholder="Importancia"/></th>
                   <th scope="col"><input className="form-control" name="administrador" type="text" onChange={this.handleChange} placeholder="Administrador"/></th>
                   <th scope="col"><input className="form-control" name="tipoPresupuesto" type="text" onChange={this.handleChange} placeholder="Tipo Presupuesto"/></th>
                   <th scope="col"><input className="form-control" name="proxAccion" type="text" onChange={this.handleChange} placeholder="Proxima Visita"/></th>
                   <th scope="col">Accion</th>
                  </tr>
             </thead>
                  <tbody>
                    {
                     this.state.filtroCalle ?
                      <FiltrarCalle
                        listaDeVisitas = {this.props.visita}
                        letras = {this.state.letrasUsuario}
                      />
                    :
                      this.state.filtroPoblacion ?
                      <FiltrarPoblacion
                        listaDeVisitas = {this.props.visita}
                        letras = {this.state.letrasUsuario}
                        />
                      :
                      this.state.filtroPostal ?
                      <FiltrarCodigoPostal
                        listaDeVisitas = {this.props.visita}
                        letras = {this.state.letrasUsuario}
                        />
                      :
                      this.state.filtroMantenedor ?
                        <FiltrarMantenedor
                          listaDeVisitas = {this.props.visita}
                          letras = {this.state.letrasUsuario}
                          />
                      :
                      this.state.filtroInteres ?
                        <FiltrarInteres
                          listaDeVisitas = {this.props.visita}
                          letras = {this.state.letrasUsuario}
                          />
                      :
                      this.state.filtroAdministrador ?
                        <FiltrarAdministrador
                          listaDeVisitas = {this.props.visita}
                          letras = {this.state.letrasUsuario}
                          />
                      :
                      this.state.filtroTipoPresupuesto ?
                        <FiltrarTipoPresupuesto
                          listaDeVisitas = {this.props.visita}
                          letras = {this.state.letrasUsuario}
                        />
                      :
                      this.state.filtroProxAccion ?
                        <FiltrarProxAccion
                          listaDeVisitas = {this.props.visita}
                          letras = {this.state.letrasUsuario}
                          />
                      :
                        <ListarVisitaCompleta
                        listaDeVisitas = {this.props.visita}
                        />

                  }
                    </tbody>
              </table>
            </div>
        </div>
    )
  }
}


export default ListarVisitas
