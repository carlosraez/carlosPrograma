import React from 'react';


function Extras(props) {
   return (
     <div className="form-check">
       <input
       className="form-check-input"
       type="checkbox" value=""
       id="defaultCheck1"
       />
       <label className="form-check-label" htmlFor="defaultCheck1">
      {props.label}
     </label>
     </div>
   )
}



export default Extras
