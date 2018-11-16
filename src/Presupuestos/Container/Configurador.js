import React, { Component } from 'react';
import ConfiguradorItemPrecioLayout from '../Components/ConfiguradorItemPrecioLayout.js'
import InputsConfigurador from '../Components/InputsConfigurador.js'
import { firebaseApp } from '../../index.js'
import Extras from '../Components/Extras.js'
import swal from 'sweetalert';




export class Configurador extends Component {
  state = {
     precioBasicoOferta: 60,
     paradasMinimasBasicoOferta:4,
     paradasMaximoBasicoOferta:5,
     precioBasicoOfertaTotal:0,
     precioSemiRiesgoOfertaTotal:0,
     precioTodoRiesgoOfertaTotal:0,
     incrementoParadas:5,
     incrementoParadasPrecio:1,
     calculoParaEstasParadas:6,
     precioMaximoBasicoOferta:80,
     incrementoSemiRiesgoPrecio:10,
     incrementoTodoRiesgoPrecio:20,
     horarioAmpliado:false,
     tubosLeed:false,
     tubosLeedYDetector:false,
     lineaTelefonica:false,
     gsm:false,
   }


   handleChange = (event) => {
     const target = event.target
     console.log(target);
     const value  = target.type === 'checkbox' ? target.checked : target.value;
     const id  = target.id
     this.setState({
       [id]:  value,
     }, this.caluculoPrecioBasicoOferta)

   }

   handleClickGuardarConfiguracion = (event) => {
     event.preventDefault()
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     const nombreConfiguracion = this.props.nombreConfiguracionGuardar
     const configuracion1 = { [nombreConfiguracion] : {
          paradasMinimasBasicoOferta:this.state.paradasMinimasBasicoOferta,
          paradasMaximoBasicoOferta:this.state.paradasMaximoBasicoOferta,
          incrementoSemiRiesgoPrecio:this.state.incrementoSemiRiesgoPrecio || '',
          incrementoTodoRiesgoPrecio:this.state.incrementoTodoRiesgoOfertaTotal || '',
          precioBasicoOferta:this.state.precioBasicoOferta || '',
          incrementoParadas:this.state.incrementoParadas || '',
          precioMaximoBasicoOferta:this.state.precioMaximoBasicoOferta || '',
          horarioAmpliado:this.state.horarioAmpliado || '',
          tubosLeed:this.state.tubosLeed || '',
          tubosLeedYDetector:this.state.tubosLeedYDetector || '',
          lineaTelefonica:this.state.lineaTelefonica || '',
          gsm:this.state.gsm || '',
       }
     }
     ref.child(user.uid).child('configuracionMantenimiento').update(configuracion1)
     swal('Guardada')

   }

   caluculoPrecioBasicoOferta = () => {
     const { precioBasicoOferta,incrementoSemiRiesgoPrecio,incrementoTodoRiesgoPrecio, calculoParaEstasParadas, paradasMaximoBasicoOferta, incrementoParadas, paradasMinimasBasicoOferta, precioMaximoBasicoOferta } = this.state
     const  precioAcutal = parseInt(precioBasicoOferta,10)
     const paradasActualesAscensor = parseInt(calculoParaEstasParadas,10)
     const  paradasMax = parseInt(paradasMaximoBasicoOferta,10)
     const  paradasMin  = parseInt(paradasMinimasBasicoOferta,10)
     const incrementoParadasCalculo = parseInt(incrementoParadas,10)
     const precioMaximo = parseInt(precioMaximoBasicoOferta,10)
     const incrementoSemiRiesgo = parseInt(incrementoSemiRiesgoPrecio,10)
     const incrementoTodoRiesgo = parseInt(incrementoTodoRiesgoPrecio,10)
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

     const precioSemiRiesgo = paradasActualesAscensor >= paradasMin ? precio + incrementoSemiRiesgo : 0
     const precioTodoRiesgo = paradasActualesAscensor >= paradasMin ? precio + incrementoTodoRiesgo : 0


     this.setState({
       precioBasicoOfertaTotal:precio,
       precioSemiRiesgoOfertaTotal:precioSemiRiesgo,
       precioTodoRiesgoOfertaTotal:precioTodoRiesgo
     })
   }

   render() {
     return (
          <div>
             <ConfiguradorItemPrecioLayout
                  precioBasicoOfertaTotal={this.state.precioBasicoOfertaTotal}
                  precioSemiRiesgoOfertaTotal={this.state.precioSemiRiesgoOfertaTotal}
                  precioTodoRiesgoOfertaTotal={this.state.precioTodoRiesgoOfertaTotal}
                  nombre={this.props.nombreOferta}
             >
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
                     id={'paradasMaximoBasicoOferta1'}
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
                       id={'incrementoParadasPrecio1'}
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
                             label={`Incremento para contrato Semiriesgo`}
                             type={'number'}
                             className={'form-control-range'}
                             id={'incrementoSemiRiesgoPrecio'}
                             min={0}
                             max={200}
                             step={1}
                             defaultValue={this.state.incrementoSemiRiesgoPrecio}
                             handleChange={this.handleChange}
                           />
                           <InputsConfigurador
                               label={`Incremento para contrato TodoRiesgo`}
                               type={'number'}
                               className={'form-control-range'}
                               id={'incrementoTodoRiesgoPrecio'}
                               min={0}
                               max={200}
                               step={1}
                               defaultValue={this.state.incrementoTodoRiesgoPrecio}
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
                               <Extras  checked={this.state.horarioAmpliado} handleChange={this.handleChange} id={"horarioAmpliado"} label={'Horario Ampliado'} />
                               <Extras  checked={this.state.tubosLeed} handleChange={this.handleChange} id={"tubosLeed"} label={'Tubos Leed de Regalo '} />
                               <Extras  checked={this.state.tubosLeedYDetector} handleChange={this.handleChange} id={"tubosLeedYDetector"} label={'Tubos led regalo y dector de presencia'} />
                               <Extras  checked={this.state.lineaTelefonica} handleChange={this.handleChange} id={"lineaTelefonica"} label={'Linea de telefono Ascensor'} />
                               <Extras  checked={this.state.gsm} handleChange={this.handleChange} id={"gsm"} label={'Gsm'} />
                  <button   className="btn btn-outline-info mt-10" onClick={this.handleClickGuardarConfiguracion}>Guardar Configuracion</button>
              </ConfiguradorItemPrecioLayout>
         </div>
     )
   }
}
