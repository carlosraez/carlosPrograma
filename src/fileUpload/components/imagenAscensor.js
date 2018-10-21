import React  from 'react';
import './imagen.css'


function ImagenAscensor(props) {
  return (
      <div className="card imagenNueva">
         <img className="card-img-top" src={props.direccionSrcImagen}  alt="" />
          <div className="card-body cuerpoCarta">
          <button className="btn-danger btn-block" id={props.id} onClick={props.handleClickBorrarImagen}>Borrar</button>
         </div>
      </div>
  )
}


export default ImagenAscensor
