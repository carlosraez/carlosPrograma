import React from 'react'
import './Fotos.css'

export function Fotos (props) {

  return (
     <img  width="320"className="img-thumbnail imagenNueva" src={props.direccionSrcFoto}  alt={props.altImagen}  />
  )
}
