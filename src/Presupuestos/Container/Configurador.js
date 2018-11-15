import React, { Component } from 'react';
import ConfiguradorItemLayout from '../Components/ConfiguradorItemLayout.js'
import InputsConfigurador from '../Components/InputsConfigurador.js'




export class Configurador extends Component {
  state = {
     precioBasicoOferta: 60,
     paradasMinimasBasicoOferta:4,
     paradasMaximoBasicoOferta:5,
     precioBasicoOfertaTotal:0,
     incrementoParadas:5,
     incrementoParadasPrecio:1,
     calculoParaEstasParadas:0,
     precioMaximoBasicoOferta:80,
   }


   handleChange = (event) => {
     const target = event.target
     const value  = target.value
     const id  = target.id
     this.setState({
       [id]:  value,
     }, this.caluculoPrecioBasicoOferta)

   }

   caluculoPrecioBasicoOferta = () => {
     const { precioBasicoOferta, calculoParaEstasParadas, paradasMaximoBasicoOferta, incrementoParadas, paradasMinimasBasicoOferta, precioMaximoBasicoOferta } = this.state
     const  precioAcutal = parseInt(precioBasicoOferta,10)
     const paradasActualesAscensor = parseInt(calculoParaEstasParadas,10)
     const  paradasMax = parseInt(paradasMaximoBasicoOferta,10)
     const  paradasMin  = parseInt(paradasMinimasBasicoOferta,10)
     const incrementoParadasCalculo = parseInt(incrementoParadas,10)
     const precioMaximo = parseInt(precioMaximoBasicoOferta,10)
     console.log(precioAcutal,paradasActualesAscensor ,paradasMax);
     let  precio = calculo(paradasActualesAscensor)
     function calculo(paradasActuales) {
        if (paradasActuales >= paradasMin) {
              if (paradasActuales <= paradasMax  ) {
              return precioAcutal
              }
            else if (paradasActuales >= 10 && paradasActuales < 15  ) {
                 const  total = precioAcutal  + incrementoParadasCalculo * 2
                 if (total < precioMaximo) {
                   return total
                 }
                 else {
                   return precioMaximo
                 }
              }
              else  if(paradasActuales >= 15 && paradasActuales < 20  ) {
                   const  total = precioAcutal  + incrementoParadasCalculo * 3
                   if (total < precioMaximo) {
                     return total
                   }
                   else {
                     return precioMaximo
                   }
                }
              else  if(paradasActuales >= 20 && paradasActuales < 25  ) {
                     const  total = precioAcutal  + incrementoParadasCalculo * 4
                     if (total < precioMaximo) {
                       return total
                     }
                     else {
                       return precioMaximo
                     }
                  }
              else  if(paradasActuales >= 25 && paradasActuales <= 30  ) {
                        const  total = precioAcutal  + incrementoParadasCalculo * 5
                        if (total < precioMaximo) {
                          return total
                        }
                        else {
                          return precioMaximo
                        }
                    }
              else {
                const  total = precioAcutal  + incrementoParadasCalculo
                return total
              }
           }
        else
          return 0

     }
     this.setState({
       precioBasicoOfertaTotal:precio
     })
   }

   render() {
     return (
       <div className="row">
       <div className="col-12 col-md-3">
       <div className="card cardStyle" >
          <div className="card-header">
             Básico Oferta
          </div>
         <div className="card-body">
         <h1 className="card-title pricing-card-title">{this.state.precioBasicoOfertaTotal}€ <small className="text-muted">/ mes + Iva</small></h1>
         <p className="card-text">Cambia el precio y establece condiciones</p>
         <form>
              <div className="form-group">
               <label htmlFor="formControlRange">Precio Base: {this.state.precioBasicoOferta}</label>
               <input
                 type="range"
                 className="form-control-range"
                 id="precioBasicoOferta"
                 max={200}
                 min={0}
                 step={5}
                 defaultValue={this.state.precioBasicoOferta}
                 onChange={this.handleChange}
                 />
                </div>
              <div className="form-group">
                 <label htmlFor="formControlRange">Paradas Minimas: {this.state.paradasMinimasBasicoOferta}</label>
                 <input
                    type="range"
                    className="form-control-range"
                    id="paradasMinimasBasicoOferta"
                    max={20}
                    min={1}
                    step={1}
                    defaultValue={this.state.paradasMinimasBasicoOferta}
                    onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                     <label htmlFor="formControlRange">Paradas Maximas: {this.state.paradasMaximoBasicoOferta}</label>
                     <input
                        type="range"
                        className="form-control-range"
                        id="paradasMaximoBasicoOferta"
                        max={30}
                        min={1}
                        step={1}
                        defaultValue={this.state.paradasMaximoBasicoOferta}
                        onChange={this.handleChange}
                        />
                      </div>
              <div className="form-group">
                   <label htmlFor="formControlRange">Incremento por tramo de {this.state.incrementoParadas} paradas</label>
                   <input
                   type="number"
                   className="form-control-range"
                   id="incrementoParadasPrecio"
                   min={0}
                   max={30}
                   defaultValue={5}
                   />
               </div>
               <label htmlFor="formControlRange">Precio Maximo: {this.state.precioMaximoBasicoOferta}</label>
               <input
                  type="range"
                  className="form-control-range"
                  id="precioMaximoBasicoOferta"
                  max={200}
                  min={1}
                  step={1}
                  defaultValue={this.state.precioMaximoBasicoOferta}
                  onChange={this.handleChange}
                  />
               <div className="form-group">
                    <label htmlFor="formControlRange">Este es el precio para estas paradas según tu configuracion</label>
                    <input
                    type="number"
                    className="form-control-range"
                    id="calculoParaEstasParadas"
                    min={0}
                    max={30}
                    defaultValue={this.state.calculoParaEstasParadas}
                    onChange={this.handleChange}
                    />
                </div>
               <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                 <label className="form-check-label" htmlFor="defaultCheck1">
                 Horario Ampliado
               </label>
               </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
               <label className="form-check-label" htmlFor="defaultCheck1">
                  24 horas/365 dias al año
               </label>
              </div>
              <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
             <label className="form-check-label" htmlFor="defaultCheck1">
                Tubos led regalo
             </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
           <label className="form-check-label" htmlFor="defaultCheck1">
              Tubos led regalo y dector de presencia
           </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
         <label className="form-check-label" htmlFor="defaultCheck1">
            Linea de telefono Ascensor
         </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
          Gsm
         </label>
         </div>
              <button   className="btn btn-outline-info mt-10">Guardar Configuracion</button>
          </form>
         </div>
      </div>
      </div>
      <div className="col-12 col-md-3">
        <ConfiguradorItemLayout/>
     </div>
     <div className="col-12 col-md-3">
     <div className="card cardStyle" >
        <div className="card-header">
           Básico Administrador Estrella
        </div>
       <div className="card-body">
       <h1 className="card-title pricing-card-title">60€ <small className="text-muted">/ mes + Iva</small></h1>
       <p className="card-text">Cambia el precio y establece condiciones</p>
       <form>
            <div className="form-group">
             <label htmlFor="formControlRange">Modifica el precio</label>
             <input type="range" className="form-control-range" id="formControlRange" />
              </div>
            <div className="form-group">
               <label htmlFor="formControlRange">Paradas Maximas: 5</label>
               <input type="range" className="form-control-range" id="formControlRange" />
                </div>
            <div className="form-group">
                 <label htmlFor="formControlRange">Incremento por tramo de 5 paradas</label>
                 <input type="number" className="form-control-range" id="formControlRange" />
             </div>
            <button  className="btn btn-outline-info">Guardar Configuracion</button>
        </form>
       </div>
    </div>
    </div>
    <div className="col-12 col-md-3">
    <div className="card cardStyle" >
       <div className="card-header">
          Básico Tu nombre
       </div>
      <div className="card-body">
      <h1 className="card-title pricing-card-title">60€ <small className="text-muted">/ mes + Iva</small></h1>
      <p className="card-text">Cambia el precio y establece condiciones</p>
      <form>
           <div className="form-group">
            <label  htmlFor="formControlRange">Modifica el precio</label>
            <input type="range" className="form-control-range" id="formControlRange" />
             </div>
           <div className="form-group">
              <label htmlFor="formControlRange">Paradas Maximas: 3</label>
              <input type="range" className="form-control-range" id="formControlRange" />
               </div>
           <div className="form-group">
                <label htmlFor="formControlRange">Incremento por tramo de 5 paradas</label>
                <input type="number" className="form-control-range" id="formControlRange" />
            </div>
            <button  className="btn btn-outline-info">Guardar Configuracion</button>
       </form>

      </div>
   </div>
   </div>
      </div>

     )
   }
}
