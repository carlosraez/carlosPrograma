import React  from 'react';


function ForumularioSubirImagen(props) {
  return (
    <div>
   <input type="file"   onChange={props.handleUpload} />
  <br/>
  <br/>
   <progress value={props.uploadValue} max="100"></progress>
   </div>
  )
}


export default ForumularioSubirImagen
