import React  from 'react';
import { ProgressBar } from './ProgressBar.js'

function ForumularioSubirImagen(props) {
  return (
    <div>
      <input type="file"   onChange={props.handleUpload} />
    <br/>
    <br/>
      <ProgressBar
      value={props.uploadValue}
      />
  </div>
  )
}


export default ForumularioSubirImagen
