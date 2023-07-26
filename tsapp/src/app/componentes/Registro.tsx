import React from 'react'

export const Registro = () => {
  return (
    <div>registro</div>
  )
}



const renderizarDatos = ()=>{
    var r = Persona.map(p) => {
        <td>{p.nombre}</td>
        <td>{p.apellido}</td>
        <td>{p.edad}</td>
        <td><link to={"/actualizar/"+p.idperonsa}>Actualizar</link></td>
        <td><link to={"//"+p.idperonsa}</td>
    }
}