import React  from 'react';
import './imagen.css'


function ImagenAscensor(props) {
  return (
      <div className="card imagenNueva">
         <img className="card-img-top" src={props.direccionSrcImagen} onClick={props.borrarImagen} alt="" />
          <div className="card-body cuerpoCarta">
          <input id={props.id} type="button" className="btn btn-danger btn-block" onClick={props.borrarImagen} value="Borrar"/>
         </div>
      </div>
  )
}


export default ImagenAscensor
