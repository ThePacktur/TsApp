'use client'
import React from "react"
import { link } from "react-router-dom"
export const Header = () =>{
    return(
        <nav>
            <link to={"/"}>Home</link>
            <link to={"/formulario"}>Formulario</link>\
            <link to={"/mostrar"}>Registro</link>
        </nav>
    )
}