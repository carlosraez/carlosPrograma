
import React from 'react'

function  Administrador(props) {
    return (
      <tr>
         <th scope="row">{props.contador}</th>
            <td>{props.despacho}</td>
            <td>{props.direccion}</td>
            <td>{props.poblacion}</td>
            <td>{props.postal}</td>
            <td>{props.comercial}</td>
            <td>
             <button id={props.numeroDeVisita} type="button" onClick={(e)=>props.handleVerClick(e,props.keyData)} className="btn btn-info mr-2">Ver</button>
             </td>
          </tr>
    )
}

export default Administrador
