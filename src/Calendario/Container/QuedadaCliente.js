import React, { Component } from 'react';
import InputsAgenda from '../Components/InputsAgenda.js'



export  class QuedadaCliente  extends Component {
  render() {
    return (
      <div className="card cardStyle" >
         <div className="card-header">
            Añade Visita
         </div>
        <div className="card-body">
        <p className="card-text">Añade Reunión para ver al cliente</p>
        <form>
         <InputsAgenda
            label={'Introduce el dia'}
            type={'date'}
            className={'form-control-range'}
            id={'diaQedada'}
            handleChange={this.handleChange}
          />
           <InputsAgenda
               label={'Introduce la Hora'}
               type={'time'}
               className={'form-control-range'}
               id={'horaQuedada'}
               handleChange={this.handleChange}
            />
            <InputsAgenda
               label={'Direccion Visita'}
               type={'text'}
               className={'form-control-range'}
               id={'direccionQedada'}
               handleChange={this.handleChange}
             />
             <InputsAgenda
                label={'Poblacion Visita'}
                type={'text'}
                className={'form-control-range'}
                id={'poblacionQedada'}
                handleChange={this.handleChange}
              />
              <InputsAgenda
                 label={'Tipo Cliente'}
                 type={'text'}
                 className={'form-control-range'}
                 id={'tipoQedada'}
                 handleChange={this.handleChange}
               />
               <InputsAgenda
                  label={'Motivo de reunión'}
                  type={'text'}
                  className={'form-control-range'}
                  id={'motivoQedada'}
                  handleChange={this.handleChange}
                />
                <InputsAgenda
                   label={'Duracion Aproximada de la reunion'}
                   type={'text'}
                   className={'form-control-range'}
                   id={'tiempoQedada'}
                   handleChange={this.handleChange}
                 />
         </form>
         </div>
     </div>
    )
  }
}
