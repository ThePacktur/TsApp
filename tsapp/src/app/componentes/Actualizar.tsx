import React, { useEffect, useState } from 'react'
import { Persona } from '../interfaces/iformulario'
import { doc, getDoc } from 'firebase/firestore'
import { ActualizarPersona } from '../firebase/promesas'
//import { registrarPersonas } from '../firebase/promesas'


useEffect(() => {
  if (params.idPeronsa != undefined) {
    var p: Persona = obtenerPersona(params.idPeronsa).then((v) => {
      if (v != undefined && v.idPeronsa != undefined) {
        setNombre(v.nombre)
        setApellido(v.apellido)
        setEdad(parseInt(v.edad))
        setIdPeronsa(v.idPeronsa)
      }
    })
    //promesa que recuperan el objero en base a una id
    //cargamos en cada estado su valor

  }, [])





export const Actualizar = () => {
  const <params = useParams()
    
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

      ActualizarPersona(p.idPeronsa,p)
      // registrarPersonas(p)
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




        <button type='button' onClick={Actualizar}>Actualizar</button>
      </form>
    )
  }

  return (
    <div>Actualizar</div>
  )
}
export const obtenerPersona = (idPeronsa: string) => {
  const docRef = doc(db, "personas", idPeronsa);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const p: Persona = {
      nombre: docSnap.data().nombre,
      apellido: docSnap.data().apellido,
      edad: docSnap.data().edad,
      idPeronsa: docSnap.id
    }
  }


}