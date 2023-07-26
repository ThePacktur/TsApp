'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Formulario } from '../componentes/Formulario'
import { Registro } from '../componentes/registro'
import { Saludo } from '../componentes/Saludos'
import { Router } from 'next/router'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"Jose"}/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Router path='/mostrar' element={<Registro/>}/>
    </Routes>
  )
}
