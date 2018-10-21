import React  from 'react';
import ImagenAscensor from '../components/imagenAscensor.js'

export function ListaImagenesGuardar(props) {
    const { listaImagenes, handleClickBorrarImagen  } = props
    return (
      listaImagenes.map((item , i) => {
       return (
         <ImagenAscensor
         handleClickBorrarImagen={handleClickBorrarImagen}
         direccionSrcImagen={item.direccion}
         id={i}
         key={i}
         />
       )
     })
    )
}
