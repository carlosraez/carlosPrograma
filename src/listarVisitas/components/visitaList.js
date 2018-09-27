import React from 'react'

function  VisitaLista(props) {
    return (
      <tr>
         <th scope="row">{props.contador}</th>
            <td>{props.direccion}</td>
            <td>{props.poblacion}</td>
            <td>{props.codigoPostal}</td>
            <td>{props.mantenedor}</td>
            <td>{props.importancia}</td>
            <td>{props.administrador}</td>
            <td>{props.tipoPresupuesto}</td>
            <td>{props.proxVisita}</td>
            <td>
             <button id={props.numeroDeVisita} type="button" onClick={props.handleVerClick} className="btn btn-info mr-2">Ver</button>
             </td>
          </tr>
    )
}

export default VisitaLista
