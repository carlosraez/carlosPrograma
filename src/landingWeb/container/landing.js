import React, { Component } from 'react';
import './landing.css'
import iconoAscensor from '../../pictures/iconoAscensor.png';
import IniciaSesion from '../components/inicaSesion.js'
import Registrate from '../components/registrate.js'
import { firebaseApp } from '../../index.js'
import {  Redirect } from "react-router-dom";





class Landing extends Component {
  constructor() {
     super()
     this.state = {
            nombre: '',
            email : '',
            contraseña : '',
            login: false,
          }
       }

  componentDidMount = () => {
   firebaseApp.auth().onAuthStateChanged( (user) => {
      if (user) {
        console.log('tenemos usuario dentro');
        this.setState({
            login:true
        })


      }
      else {
        console.log('No hay ningun usuario, Logueate si quieres entrar a la Aplicacion');
      }
    });

  }

 handleInput = (e) => {
    const { id , value } = e.target
    this.setState({
     [id]: value
   })
   console.log(this.state.nombre ,this.state.email)
 }

 handleSubmitLogin = (event) => {
   const that = this
    event.preventDefault();
     firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.contraseña)
    .then(function (datosUsuario) {
     that.setState({
       login: true
     })
     console.log('se ha logueado un usuario');
    })
    .catch(error => alert(`Error ${error.code}: ${error.message}`));

 }

 handleSignup = (event) => {
    let that = this
   if (this.state.contraseña.length < 6) {
   alert('Tu contraseña tiene que tener minimo 6 caracteres')
 }
 let emailUsuario = this.state.email;
 let pasword =  this.state.contraseña;
 event.preventDefault()
 firebaseApp.auth().createUserWithEmailAndPassword(emailUsuario,pasword)
       .then((data) => {
         that.setState({
           login:true
         })
        const ref = firebaseApp.database().ref('usuarios').child(data.user.uid)
         data.user.updateProfile({displayName: this.state.name})
             .then(() => {
                const uid = data.user.uid
                const nombreUsuario = this.state.nombre
                const email = data.user.email
               ref.set({
               uid,
              nombreUsuario,
               email
              })
       alert('Se ha registrado un nuevo usuario')


       })
     })
    .catch(function(error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('El Email que intentas poner esta siendo utilizado')
    }
    if (error.code === 'auth/invalid-email') {
      alert('Tiene que usar una direccion de correo Válida')
    }
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Hay que reviser en firebase que el metodo de incio de sesion mediante correo electronico se encuentre habilitado')
    }
    if (error.code === 'auth/weak-password') {
      alert('Modifica la contraseña, la que intentas introducir es muy débil')
    }

    console.log(error);
     });

  }

  render() {
    if(this.state.login) {
      return   <Redirect to="/Dashboard" />
    }
    else {
    return (
      <div className="container">
         <div id="App" className="row pt-5">
           <div className="col-xl-5">
             <img width="100%"  src={iconoAscensor}  alt="logo" />
           </div>
           <div className="col-xl-7">
           <div className="card">
             <div className="card-header">
               <h4>CRC ASCENSORES</h4>
             </div>
             <IniciaSesion handleSubmitLogin={this.handleSubmitLogin} handleInput={this.handleInput} />
             <Registrate handleSignup={this.handleSignup} handleInput={this.handleInput}/>
           </div>
           </div>
         </div>
      </div>
    );
  }
 }
}

export default Landing;
