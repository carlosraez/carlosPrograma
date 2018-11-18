import React from 'react';
import './DiaLibre.css'

function DiaLibre(props) {
   return (
     <tr>
         <th scope="row">{props.hora}</th>
         <td className={props.estilo}><button id={props.id} onClick={props.handleClickLibreLunes} className="btn btn-link btn-block">{props.textoBoton}</button></td>
         <td className="libre"><button id={props.id} onClick={props.handleClickLibreMartes} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={props.handleClickLibreMiercoles} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={props.handleClickLibreJueves} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={props.handleClickLibreViernes} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={props.handleClickLibreSabado} className="btn btn-link btn-block">Reservar</button></td>
     </tr>
   )
}



export default DiaLibre
