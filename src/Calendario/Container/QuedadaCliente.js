import React, { Component } from 'react';
import InputsAgenda from '../Components/InputsAgenda.js'




export  class QuedadaCliente  extends Component {




  render() {
    const { handleChange } = this.props

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
            defaultValue={'12/12/2018'}
            handleChange={handleChange}
          />
           <InputsAgenda
               label={'Introduce la Hora'}
               type={'time'}
               className={'form-control-range'}
               id={'horaQuedada'}
               handleChange={handleChange}
            />
            <InputsAgenda
               label={'Dirección de la Visita'}
               type={'text'}
               className={'form-control-range'}
               id={'direccionQedada'}
               handleChange={handleChange}
             />
             <InputsAgenda
                label={'Población de la Visita'}
                type={'text'}
                className={'form-control-range'}
                id={'poblacionQedada'}
                handleChange={handleChange}
              />
              <label>Tipo de Cliente</label>
              <select multiple className="form-control" id="tipoCliente" onChange={handleChange}>
                   <option defaultValue="administrador">Administrador</option>
                   <option defaultValue="presidente">Presidente</option>
                   <option defaultValue="constructor">Constructor</option>
                   <option defaultValue="arquitecto">Arquitecto</option>
                   <option defaultValue="jefeDeObra">Jefe de Obra</option>
                   <option defaultValue="promotor">Promotor</option>
              </select>
               <InputsAgenda
                  label={'Motivo de reunión'}
                  type={'text'}
                  className={'form-control-range'}
                  id={'motivoQedada'}
                  handleChange={handleChange}
                />
                <InputsAgenda
                   label={'Duracion Aproximada de la reunion'}
                   type={'text'}
                   className={'form-control-range'}
                   id={'tiempoQedada'}
                   handleChange={this.handleChange}
                 />
          <button onClick={this.props.handleClickReservaForm} className="btn btn-info mr-2">Reservar Cita</button>
         </form>
         </div>
     </div>
    )
  }
}
