import React, { Component } from 'react';
import { firebaseApp } from '../../index.js'
import ForumularioSubirImagen from '../components/formularioUpload.js'
import { ListaImagenesGuardar } from '../components/ListaImagenesGuardar.js'
import swal from 'sweetalert';


class FileUpload extends Component {
  state = {
    uploadValue: 0,
    imagenSrc:null,
    nombreImagen:'',
    listaImagenes: this.props.imagenesAscensor
   }

   handleUpload = (event) => {
     const file = event.target.files[0]
     const storageRef = firebaseApp.storage().ref(`/imagenesAscensores/${file.name}`)
     const tarea = storageRef.put(file)
     tarea.on('state_changed' , snapshot => {
          let porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          let fileName = snapshot.ref.name
          this.setState({
            uploadValue: porcentaje,
            nombreImagen: fileName
          })
    },
     error => {
     swal('Ha habido un error, intenta subir la imagen mas tarde')
     },
     () => {
       tarea.snapshot.ref.getDownloadURL()
     .then( (downloadURL) => {
       this.setState({
         imagenSrc: downloadURL
       })
       const imagenAscensor = {
         nombreImagen: this.state.nombreImagen,
         direccion: this.state.imagenSrc,
       }
       this.state.listaImagenes.push(imagenAscensor)
       this.setState({
         listaImagenes: this.state.listaImagenes
       })
      swal('La imagen se ha subido correctamente')
     })
   })
 }

  handleClickBorrarImagen = (event) => {
      const numeroImagen = event.target.id
      console.log(numeroImagen);
   }

   render() {
     return (
       <div>
       <ForumularioSubirImagen
          handleUpload={this.handleUpload}
          uploadValue={this.state.uploadValue}
        />
       <br/>
        <ListaImagenesGuardar
        listaImagenes={this.state.listaImagenes}
        handleClickBorrarImagen={this.handleClickBorrarImagen}
        direccion={this.direccion}
        />
       </div>
     )
   }
}

export default FileUpload
