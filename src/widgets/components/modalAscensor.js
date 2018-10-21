import React from 'react'
import { FotosAscensores } from './FotosAscensores.js'
import './modalAscensor.css'


function ModalAscensor(props) {
  return (
  <div>
    <div className="row">
        <div className="col-12 col-md-6">
            <h5>Estas en el ascensor nº: {props.numeroAscensor}</h5>
            <p><strong>Rae:</strong><input id="raeModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.rae}</p>
            <p><strong>Paradas:</strong><input id="paradasModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.paradas}</p>
            <p><strong>Ancho de Hueco:</strong><input id="anchoHuecoModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.anchoHueco}</p>
            <p><strong>Fondo de Hueco:</strong><input id="fondoHuecoModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.fondoHueco}</p>
            <p><strong>Personas:</strong><input id="personasModi" onChange={props.handleChange} className={props.cssEdicion} type="number"/> {props.personas}</p>
            <p><strong>Puertas de Cabina:</strong><input id="puertasCabinaModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.puertasCabina}</p>
            <p><strong>Puertas de Piso:</strong><input id="puertasPisoModi" onChange={props.handleChange} className={props.cssEdicion} type="text"/> {props.puertasPiso}</p>
            <p><strong>Traccion:</strong><select multiple className={props.cssEdicion} id="maquinaModi" onChange={props.handleChange}>
                 <option defaultValue="hidraulico">Ascensor Hidraulico</option>
                 <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad</option>
                 <option defaultValue="maquina1Velocidad">Maquina 1 Velocidad con Variador de Freqüencia</option>
                 <option defaultValue="maquina2Velocidades">Maquina 2 Velocidades</option>
                 <option defaultValue="maquina2VelocidadesConVariador">Maquina 2 Velocidades Con Variador de Freqüencia</option>
                 <option defaultValue="Maquina2VelocidadesGerarless">Maquina 2 Velocidades Gearless</option>
                 <option defaultValue="Maquina2VelocidadesCintasPlanas">Maquina 2 Velocidades Cintas Planas</option>
            </select> {props.maquina}</p>
            <p><strong>Embarques:</strong><select multiple className={props.cssEdicion} id="embarquesModi" onChange={props.handleChange}>
                 <option defaultValue="embarqueUnico">Embarque Unico</option>
                 <option defaultValue="embarque90">Doble Embarque a 90 Grados</option>
                 <option defaultValue="embarque180">Doble Embarque a 180 Grados</option>
            </select> {props.embarques}</p>
            <p><strong>Observaciones</strong><textarea className={props.cssEdicion} id="observacionAscensorModi" onChange={props.handleChange} rows="3"></textarea> {props.observacionAscensor}</p>
        </div>
       <div className="col-12 col-md-6">
          <p>Fotos</p>
          <FotosAscensores
          imagenesAscensor={props.imagenesAscensor}
          />
        </div>
  </div>
   <br /> 
    <div>
        <button type="button" onClick={props.handleClickSiguienteAscensor} className="btn btn-info botonVerSiguienteAscensor">Ver Siguiente Ascensor</button>
         <button type="button" onClick={props.handleChangeAnteriorAscensor} className="btn btn-info botonAnteriorAscensor">Anterior Ascensor</button>
        <button type="button" onClick={props.handleVolverInformacion} className="btn btn-info botonVolverAVisita">Volver</button>
    </div>
  </div>
  )

}

export default ModalAscensor
