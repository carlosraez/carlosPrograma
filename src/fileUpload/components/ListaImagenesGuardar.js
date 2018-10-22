import React  from 'react';
import ImagenAscensor from '../components/imagenAscensor.js'

export function ListaImagenesGuardar(props) {
    const { listaImagenes, borrarImagen  } = props
    return (
      <div className="row">
      {
      listaImagenes.map((item , i) => {
       return (
         <ImagenAscensor
         borrarImagen={borrarImagen}
         direccionSrcImagen={item.direccion}
         id={i}
         key={i}
         />
       )
     })
   }
    </div>
    )
}
