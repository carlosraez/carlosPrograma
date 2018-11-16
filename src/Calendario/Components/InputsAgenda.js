import React from 'react';


function InputsAgenda(props) {
   return (
        <div className="form-group">
             <label htmlFor="formControlRange">{props.label}</label>
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
