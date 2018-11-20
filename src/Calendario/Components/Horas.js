import React from 'react';
import './DiaLibre.css'

function Horas(props) {
   return (
          <tr>
            <th scope="row">{props.hora}</th>
            <td id={props.lunes} name={props.hora} className={props.estilo}><button id={props.lunes} name={props.hora} onClick={props.handleClickLibreLunes} className="btn btn-link btn-block">{props.textoBoton}</button></td>
            <td className="libre"><button id={props.id} onClick={props.handleClickLibreMartes} className="btn btn-link btn-block">Reservar</button></td>
            <td className="libre"><button id={props.id} onClick={props.handleClickLibreMiercoles} className="btn btn-link btn-block">Reservar</button></td>
            <td className="libre"><button id={props.id} onClick={props.handleClickLibreJueves} className="btn btn-link btn-block">Reservar</button></td>
            <td className="libre"><button id={props.id} onClick={props.handleClickLibreViernes} className="btn btn-link btn-block">Reservar</button></td>
            <td className="libre"><button id={props.id} onClick={props.handleClickLibreSabado} className="btn btn-link btn-block">Reservar</button></td>
        </tr>
   )
}



export default Horas
