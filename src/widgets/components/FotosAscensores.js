import React from 'react'
import { Fotos } from './Fotos.js'


export function FotosAscensores(props) {
  console.log(props.imagenesAscensor);
  const fotografiasAscensores = props.imagenesAscensor
  return (
    fotografiasAscensores.map((foto, i) => {
      return (
        <Fotos
        direccionSrcFoto={foto.direccion}
        key={i}
        altImagen={foto.nombreImagen}
        />
      )
    })
  )
}
