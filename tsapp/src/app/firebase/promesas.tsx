import { Persona } from "../interfaces/iformulario";

import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebasenapp";


export const registrarPersonas = async(p: Persona) => {

    const docRef = await addDoc(collection(db, "personas"), p)

} 




export const ActualizarPersona = async(idPeronsa:string,p:Persona)=>{
    const docRef = doc(db,"persona",idPeronsa);

    //set the "object" fild of the otherObject 'DC'
    await updateDoc(docRef,{...p});
}

export const eliminarPersona = async(idPeronsa:string)=>{
    await deleteDoc(doc,{...p})
}