import React  from 'react';
import { ProgressBar } from './ProgressBar.js'

function ForumularioSubirImagen(props) {
  return (
    <div>
    <div className="custom-file">
    <label className="labelFoto">Haz fotos</label>
 <input type="file" onChange={props.handleUpload}/>
 </div>
    <br/>
    <br/>
      <ProgressBar
      value={props.uploadValue}
      />
  </div>
  )
}


export default ForumularioSubirImagen
