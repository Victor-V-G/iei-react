'use client' //directiva para obligar a que funcione ya que no estamos trabajando en un servidor
import { useState } from "react";


export default function Home() {
  // first: nombre del estado,
  // setFirst: cambiar el estado
  // " ": string sin nada asignado
  // --dependiendo del tipo de estado inicial indica cual sera el tipo del estado, es decir sera String o Number
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  return (
    <form>
      <h1>hola {nombre} {apellido}</h1>
      <label>Nombre</label><br />
      <input 
        type="text" 
        placeholder="Nombre"
        // e : representara el evento
        // e.currenTarget.value : recupera el valor desde que se gatillo el evento
        onChange={(e)=>setNombre(e.currentTarget.value)}/><br />
      <span></span><br />

      <label>Apellido</label><br />
      <input 
        type="text" 
        placeholder="Apellido"
        onChange={(e)=>setApellido(e.currentTarget.value)}/><br />
      <span></span><br />
      <button>Registrar</button>
    </form>
  );
}
