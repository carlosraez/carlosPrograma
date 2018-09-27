import React  from 'react';
import './imagen.css'


function ImagenAscensor(props) {
  return (
    <div className="mostrarImgenes">
    <img width="320"  className="img-thumbnail" src={props.direccionSrcImagen}  alt=''  />
    </div>
  )
}


export default ImagenAscensor
