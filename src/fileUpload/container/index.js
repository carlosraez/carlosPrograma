import React, { Component } from 'react';
import ImagenAscensor from '../components/imagenAscensor.js'
import { firebaseApp } from '../../index.js'
import ForumularioSubirImagen from '../components/formularioUpload.js'


class FileUpload extends Component {
  state = {
    uploadValue: 0,
    imagenSrc:null,
    listaImagenes: []

   }

   handleUpload = (event) => {
     const file = event.target.files[0]
     const storageRef = firebaseApp.storage().ref(`/imagenesAscensores/${file.name}`)
     const tarea = storageRef.put(file)

     tarea.on('state_changed' , snapshot => {
          let porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.setState({
            uploadValue: porcentaje,
          })
      console.log(porcentaje);
    }, error => { console.log(error)},
     () => {
       tarea.snapshot.ref.getDownloadURL()
     .then( (downloadURL) => {
       this.setState({
         imagenSrc: downloadURL
       })
       const imagenAscensor = {
         direccion: this.state.imagenSrc
       }
       console.log(imagenAscensor);
       this.state.listaImagenes.push(imagenAscensor)
       this.setState({
         listaImagenes: this.state.listaImagenes
       })
      alert('Se ha subido la imagen Super Bien')
      this.resetFormularioImagenes()
     })

   })

 }

   resetFormularioImagenes () {
     const inputUpload = document.getElementById('subirImagen')
     console.log(inputUpload);
   }

   handleBorrar = (event) => {
     alert('Me has pulsado')
   }

   render() {
     const mostrarImgenes = this.state.listaImagenes.map((item , i) => {

       return (
         <ImagenAscensor
         direccionSrcImagen={item.direccion}
         key={i}
         handleBorrar={this.handleBorrar}
         />
       )
     })



     return (
       <div>
       <ForumularioSubirImagen
          handleUpload={this.handleUpload}
          uploadValue={this.state.uploadValue}
        />
       <br/>
       {mostrarImgenes}
       </div>
     )
   }
}

export default FileUpload
