//import Image from 'next/image'
import { Saludo } from './componentes/Saludos'
import { Formulario } from './componentes/Formulario'

export default function Home() {
  return (

    <>
      <p>wololo</p>
      <p>chao</p>
      <Saludo nombre='terricola ' apellido='Omicronianos' />
      <Saludo nombre='monkey' />

     <Formulario></Formulario>


    </>
  )
}
