import React from 'react'
import './modalAscensor.css'


function ModalAscensor(props) {
  return (
  <div>
    <div className="row">
        <div className="col-6">
            <h3>Estas en el ascensor nº: {props.numeroAscensor}</h3>
            <p><strong>Rae:</strong><input id="rae" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.rae}</p>
            <p><strong>Paradas:</strong><input id="paradas" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.paradas}</p>
            <p><strong>Ancho de Hueco:</strong><input id="anchoHueco" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.anchoHueco}</p>
            <p><strong>Fondo de Hueco:</strong><input id="fondoHueco" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.fondoHueco}</p>
            <p><strong>Personas:</strong><input id="personas" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.personas}</p>
            <p><strong>Puertas de Cabina:</strong><input id="puertasCabina" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.puertasCabina}</p>
            <p><strong>Puertas de Piso:</strong><input id="puertasPiso" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.puertasPiso}</p>
            <p><strong>Traccion:</strong><select multiple className={props.cssEdicion} id="maquina" onChange={props.handleChange}>
                 <option defaultValue="hidraulico">Ascensor Hidraulico</option>
                 <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad</option>
                 <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad con Variador de Freqüencia</option>
                 <option defaultValue="maquina2Velocidades">Maquina 2 Velocidades</option>
                 <option defaultValue="maquina2VelocidadesConVariador">Maquina 2 Velocidades Con Variador de Freqüencia</option>
                 <option defaultValue="Maquina2VelocidadesGerarless">Maquina 2 Velocidades Gearless</option>
                 <option defaultValue="Maquina2VelocidadesCintasPlanas">Maquina 2 Velocidades Cintas Planas</option>
            </select> {props.maquina}</p>
            <p><strong>Embarques:</strong><select multiple className={props.cssEdicion} id="embarques" onChange={props.handleChange}>
                 <option defaultValue="embarqueUnico">Embarque Unico</option>
                 <option defaultValue="embarque90">Doble Embarque a 90 Grados</option>
                 <option defaultValue="embarque180">Doble Embarque a 180 Grados</option>
            </select> {props.embarques}</p>
        </div>
       <div className="col-6">
          <p>Fotos</p>
        </div>
    </div>
    <div className="row">
      <div className="col-6">
        <p><strong>Observaciones</strong><textarea className={props.cssEdicion} id="observacionAscensor" onChange={props.handleChange} rows="3"></textarea> {props.observacionAscensor}</p>
      </div>
    <div className="col-6">
    </div>
  </div>
    <div>
        <button type="button" onClick={props.handleClickSiguienteAscensor} className="btn btn-info botonVerSiguienteAscensor">Ver Siguiente Ascensor</button>
         <button type="button" onClick={props.handleChangeAnteriorAscensor} className="btn btn-info botonAnteriorAscensor">Anterior Ascensor</button>
        <button type="button" onClick={props.handleVolverInformacion} className="btn btn-info botonVolverAVisita">Volver</button>
    </div>
  </div>
  )

}

export default ModalAscensor
