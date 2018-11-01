import React from 'react';



function ListaAdministradoresLayout(props) {
   return (
       <div>
          <table className="table">
             <thead>
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col"><input className="form-control" name="nombre" type="text" onChange={props.handleChange} placeholder="Nombre"/></th>
                    <th scope="col"><input className="form-control" name="direccion" type="text" onChange={props.handleChange} placeholder="Direccion"/></th>
                    <th scope="col"><input className="form-control" name="poblacion" type="text" onChange={props.handleChange} placeholder="Poblacion"/></th>
                    <th scope="col"><input className="form-control" name="codigoPostal" type="text" onChange={props.handleChange} placeholder="Codigo Postal"/></th>
                    <th scope="col"><input className="form-control" name="mantenedor" type="text" onChange={props.handleChange} placeholder="Comercial"/></th>
                    <th scope="col">Accion</th>
                   </tr>
              </thead>
                   <tbody>
                    {props.children}
                   </tbody>
               </table>
         </div>
   )
}



export default ListaAdministradoresLayout
