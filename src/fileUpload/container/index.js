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
         listaImagenes: this.state.listaImagenes,
         uploadValue: 0
       })
      swal('La imagen se ha subido correctamente')
     })
   })
 }

  handleBorrarImagen = (event) => {
    const numeroImagen = parseInt(event.target.id, 10)
    const arrayActual = this.state.listaImagenes
    const arrayElementoBorrar = arrayActual[numeroImagen]
    const storageRef = firebaseApp.storage().ref(`/imagenesAscensores/${arrayElementoBorrar.nombreImagen}`)
    storageRef.delete()
    .then(() => {
    swal('La Imagen ha sido borrada correctamente')
    const nuevoArrayImagenes = arrayActual.filter((imagenes, i) => {
    return i !== numeroImagen
    })
    this.setState({
          listaImagenes: nuevoArrayImagenes
        })
    })
    .catch(function(error) {
    console.log(error);
    swal('Ha ocurrido un error vuelve a intentarlo mas tarde')
  })
  }

  componentWillUpdate = (nextProps) => {
    if (nextProps.imagenesAscensor !== this.props.imagenesAscensor) {
        this.setState({
          listaImagenes: nextProps.imagenesAscensor
        })
    }
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.imagenesAscensores === this.props.imagenesAscensor) {
      return false
    }
    else {
      return true
    }
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
        borrarImagen={this.handleBorrarImagen}
        listaImagenes={this.state.listaImagenes}
        direccion={this.direccion}
        />
       </div>
     )
   }
}

export default FileUpload
