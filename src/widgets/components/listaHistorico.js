import React from 'react'
import './historicoConversacion.css'


function ListaHistorico (props) {
  const { lista, fechaConversacionAntigua, conversacionAntigua} = props
  return (
   <div>
     <li className="conversacion list-group-item"><strong>{lista}</strong>: {fechaConversacionAntigua}: {conversacionAntigua}<span> <button type="button" className="btn btn-danger btn-sm">Borrar</button></span></li>
   </div>
  )
}

export default ListaHistorico
