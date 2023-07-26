'use client'
import React, { useState } from 'react'
import { Persona } from '../interfaces/iformulario'
import { registrarPersonas } from '../firebase/promesas'

export const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [errorNombre, setErrorNombre] = useState("")


    const registrar = () => {
        if (nombre.trim() == "") {
            setErrorNombre("no van espacios en blanco intente de nuevo.")
        } else {
            setNombre(nombre.trim())
        }

        //Asuman que se valido todo:
        const p: Persona = {
            nombre,
            apellido,
            edad: parseInt(edad)
        }
        registrarPersonas(p)
        console.log(nombre);
        console.log(apellido);
        console.log(edad);
        alert("Bienvenido" + nombre + " " + apellido)
    }
    const validarNombre = (valor: string) => {
        setNombre(valor);
        if (valor.length < 3) {
            setErrorNombre("debe tener mas de 3 letras")
        }
        else {
            setErrorNombre("")
        }
    }



    return (
        <form>
            <label>Nombre: </label><br />
            <input type="text" onChange={(e) => setNombre(e.target.value)}
                value={nombre}
            /><br />
            <span>
                {errorNombre} </span><br />
            <label>Apellido: </label><br />
            <input type="text" onChange={(e) => setApellido(e.target.value)}
                value={apellido}
            /><br />



            <label>Edad: </label><br />
            <input type="number"
                onChange={(e) => setEdad(e.target.value)}
                value={edad}
            /><br />




            <button type='button' onClick={registrar}>Registrar</button>
        </form>
    )
}
