import React, { Component } from 'react';
import Navegacion from '../../header/components/header.js'
import { firebaseApp } from '../../index.js'
import Dash from '../components/dash.js'
import ListarVisitas from '../../listarVisitas/container/ListarVisitas.js'
import { Administradores } from '../../Administradores/Container/Administradores.js'
import { Presupuestos } from '../../Presupuestos/Container/Presupuestos.js'
import { Visitas } from '../../datosVisita/container/Visitas.js'
import './dashboard.css'



class Dashboard  extends Component {
  state = {
    usuario: '',
    usuarioMakeVisita:false,
    listarTrabajoUsuario:false,
    verAdministradores:false,
    hacerPresupuesto:false,
  }

   handleClickAdministradores = () => {
     this.setState({
       verAdministradores:true
     })
   }

   handleClickVisitas = () => {
     this.setState({
       usuarioMakeVisita : true
     })

   }

   handleClickDash = () => {
     this.setState({
       usuarioMakeVisita : false,
       verAdministradores: false,
       listarTrabajoUsuario: false,
       hacerPresupuesto: false,
     })
   }


   handleVerTrabajo = () => {
     this.setState({
       listarTrabajoUsuario: true,
     })
   }

   handleClickPresupuestos = () => {
     this.setState({
       hacerPresupuesto: true,
     })
   }


   componentDidMount = () => {
      this.ref = firebaseApp.database().ref('usuarios')
      firebaseApp.auth().onAuthStateChanged( (user) => {
       if (user) {
        this.ref.child(user.uid).once('value', (data) => {
          const nombre = data.val().nombreUsuario
          this.setState({
            usuario: nombre
          })
        })
        const visitasHechas = []
        this.ref.child(user.uid).child('visita').on('child_added', (snapshop) => {
        visitasHechas.push(snapshop.val())
          })
         this.setState({
         visita: visitasHechas,
       })
       }
       else {
         console.log('No hay ningun usuario, Logueate si quieres entrar a la Aplicacion');
       }
     });
   }

   handleLogOut () {
      firebaseApp.auth().signOut().then( () => {
        alert('Te has desconectado Perfecto')

       }).catch(function(error) {
      console.log('ha ocurrido un error');
    });
   }

   render() {
     return (
       <div>
        <div>
        <Navegacion
        usuario = {this.state.usuario}
        handleLogOut={this.handleLogOut}
        handleDashboard={this.handleClickDash}
        />
       </div>
       {
         this.state.usuarioMakeVisita ?
         <Visitas
         usuario = {this.state.usuario}
         />
         :
         this.state.listarTrabajoUsuario ?
         <ListarVisitas
          visita={this.state.visita}
          />
         :
         this.state.verAdministradores ?
         <Administradores
         usuario = {this.state.usuario}
         />
         :
         this.state.hacerPresupuesto ?
         <Presupuestos
         usuario = {this.state.usuario}
         />
         :
         <Dash
            handleClickAdministradores={this.handleClickAdministradores}
            handleClickVisitas={this.handleClickVisitas}
            handleVerTrabajo={this.handleVerTrabajo}
            handleClickPresupuestos={this.handleClickPresupuestos}
          />
       }
       </div>

     )
   }
}

export default Dashboard;
