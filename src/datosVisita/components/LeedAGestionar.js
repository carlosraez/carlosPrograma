import React from 'react';


function LeedAGestionar(props) {
   return (
     <tr>
       <th scope="row">{props.contador}</th>
       <td>{props.direccion}</td>
       <td>{props.poblacion}</td>
       <td>{props.tipoLeed}</td>
       <td>{props.administrador}</td>
       <td><button className="btn btn-success" onClick={props.HandleClickGestionarLeed}>Gestiona</button></td>
       </tr>
   )
}

export default LeedAGestionar
