import React from 'react'
import './historicoConversacion.css'
import ListaHistorico from './listaHistorico.js'


function ModalHistoricoConversacion(props) {
  const { handleClickVolverModal, arrayConversacion} = props
  return (
   <div>
    <button type="button" onClick={handleClickVolverModal}  className="btn btn-info botonVolverAModal">Volver A Visita</button><h3 className="tituloHistorico">Historico Conversaciones</h3>
    <ul className="list-group">
       {
      arrayConversacion.map((item, i) => {
      let contador = i + 1
      return (
           <ListaHistorico
            key={i}
            lista={contador}
            fechaConversacionAntigua={item.proxVisita}
            conversacionAntigua={item.textoInfoVisita}
          />
         )
       })
     }
     </ul>
   </div>
  )
}

export default ModalHistoricoConversacion
