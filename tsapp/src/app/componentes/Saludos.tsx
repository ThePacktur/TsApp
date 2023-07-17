import React from "react"


interface Props{
    nombre:string|number,
    apellido?:string,
}

export const Saludo = (props:Props) =>{
    return(
        <div>Saludo {props.nombre} {props.apellido}</div>
    )
}