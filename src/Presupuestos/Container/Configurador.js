import React, { Component } from 'react';




export class Configurador extends Component {
  state = {
     precioBasicoOferta:60,
     paradasMinimasBasicoOferta:4,
     paradasMaximoBasicoOferta:5,
     precioBasicoOfertaTotal:60,
     incrementoParadas:5,
     incrementoParadasPrecio:1,
     calculoParaEstasParadas:0,

   }



   handleChange = (event) => {
     console.log(event.target.value);
     const target = event.target
     const value  = target.value
     const id  = target.id
     this.setState({
       [id]:  value,
     })

   }

   handleChangeCalculoParadas = () => {
    const precio =  this.state.precioBasicoOferta + this.state.incrementoParadas
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
                        max={20}
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
                   defaultValue={5}
                   />
               </div>
               <div className="form-group">
                    <label htmlFor="formControlRange">Este es el precio para estas paradas según tu configuracion</label>
                    <input
                    type="number"
                    className="form-control-range"
                    id="calculoParaEstasParadas"
                    defaultValue={this.state.calculoParaEstasParadas}
                    onChange={this.handleChangeCalculoParadas}
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
      <div className="card cardStyle" >
         <div className="card-header">
            Básico Normal
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
