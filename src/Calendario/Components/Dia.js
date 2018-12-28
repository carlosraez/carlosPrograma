import React from 'react';



function Dia(props) {
   const  { semana , mesActual , year , dia, hoy } = props
   return (
    <th scope="col" className={hoy === `${semana}/${mesActual}/${year}` ? 'diaActual' : ''}>{dia}: {semana}</th>
   )
}



export default Dia