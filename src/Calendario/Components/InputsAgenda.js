import React from 'react';
import './InputsAgenda.css'


function InputsAgenda(props) {
   return (
        <div className="form-group">
             <label className="formControl labelInputReserva">{props.label}</label>
             <input
             type={props.type}
             className={props.className}
             id={props.id}
             max={props.max}
             min={props.min}
             step={props.step}
             defaultValue={props.defaultValue}
             onChange={props.handleChange}
             />
        </div>
   )
}



export default InputsAgenda
