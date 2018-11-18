import React from 'react';

function DiaLibre(props) {
   return (
     <tr>
         <th scope="row">{props.hora}</th>
         <td><button className="btn btn-success btn-block">Libre</button></td>
         <td><button className="btn btn-success btn-block">Libre</button></td>
         <td><button className="btn btn-success btn-block">Libre</button></td>
         <td><button className="btn btn-success btn-block">Libre</button></td>
         <td><button className="btn btn-success btn-block">Libre</button></td>
         <td><button className="btn btn-success btn-block">Libre</button></td>
     </tr>
   )
}



export default DiaLibre
