import React, { Component } from 'react';
import ConfiguradorItemLayout from '../Components/ConfiguradorItemLayout.js'
import InputsConfigurador from '../Components/InputsConfigurador.js'
import Extras from '../Components/Extras.js'




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
             Basico Oferta
          </div>
         <div className="card-body">
         <h1 className="card-title pricing-card-title">{this.state.precioBasicoOfertaTotal}€ <small className="text-muted">/ mes + Iva</small></h1>
         <p className="card-text">Cambia el precio y establece condiciones</p>
         <form>
             <InputsConfigurador
                 label={`Precio Base: ${this.state.precioBasicoOferta}`}
                 type={'range'}
                 className={'form-control-range'}
                 id={'precioBasicoOferta'}
                 max={200}
                 min={0}
                 step={5}
                 defaultValue={this.state.precioBasicoOferta}
                 handleChange={this.handleChange}
               />
               <InputsConfigurador
                   label={`Paradas Minimas: ${this.state.paradasMinimasBasicoOferta}`}
                   type={'range'}
                   className={'form-control-range'}
                   id={'paradasMinimasBasicoOferta'}
                   max={20}
                   min={1}
                   step={1}
                   defaultValue={this.state.paradasMinimasBasicoOferta}
                   handleChange={this.handleChange}
                 />
                 <InputsConfigurador
                     label={`Paradas Maximas: ${this.state.paradasMaximoBasicoOferta}`}
                     type={'range'}
                     className={'form-control-range'}
                     id={'paradasMaximoBasicoOferta'}
                     max={30}
                     min={1}
                     step={1}
                     defaultValue={this.state.paradasMaximoBasicoOferta}
                     handleChange={this.handleChange}
                   />
                   <InputsConfigurador
                       label={`Incremento por tramo de ${this.state.incrementoParadas} paradas`}
                       type={'number'}
                       className={'form-control-range'}
                       id={'incrementoParadasPrecio'}
                       max={30}
                       min={0}
                       step={1}
                       defaultValue={5}
                       handleChange={this.handleChange}
                     />
                     <InputsConfigurador
                         label={`Precio Maximo: ${this.state.precioMaximoBasicoOferta}`}
                         type={'range'}
                         className={'form-control-range'}
                         id={'precioMaximoBasicoOferta'}
                         max={200}
                         min={1}
                         step={1}
                         defaultValue={this.state.precioMaximoBasicoOferta}
                         handleChange={this.handleChange}
                       />
                       <InputsConfigurador
                           label={`Este es el precio para estas paradas según tu configuracion`}
                           type={'number'}
                           className={'form-control-range'}
                           id={'calculoParaEstasParadas'}
                           min={1}
                           max={30}
                           step={1}
                           defaultValue={this.state.calculoParaEstasParadas}
                           handleChange={this.handleChange}
                         />
               <Extras  label={'Horario Ampliado'} />
               <Extras  label={'24/horas 365 dias al año'} />
               <Extras  label={'Tubos Leed de Regalo '} />
               <Extras  label={'Tubos led regalo y dector de presencia'} />
               <Extras  label={'Linea de telefono Ascensor'} />
               <Extras  label={'Gsm'} />
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