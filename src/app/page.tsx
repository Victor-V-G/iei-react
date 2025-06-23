'use client' //directiva para obligar a que funcione ya que no estamos trabajando en un servidor
import { useEffect, useState } from "react";

//npx next dev : para iniciar el programa en el navegador

// interface: define tipo de datos de ciertas variables que deberian estar en un objeto
interface Persona{
  nombre : string,
  apellido : string,
  edad : number,
}

// como su nombre lo dice, es el estado inicial en el que comenzaran estas variables,
// "" : string sin nada asignado
// 0 : number sin valor asignado
const initialStatePersona:Persona = {
  nombre: "",
  apellido: "",
  edad: 0,
}

export default function Home() {
  const miStorage = window.localStorage
  // first: nombre del estado,
  // setFirst: cambiar el estado
  // " ": string sin nada asignado
  // --dependiendo del tipo de estado inicial indica cual sera el tipo del estado, es decir sera String o Number
  const [persona, setPersona] = useState(initialStatePersona)
  const [personas,setPersonas] = useState<Persona[]>([]) //personas sera un listado, persona sera un listado
  const [eNombre, setENombre] = useState("")

  useEffect(()=>{
    console.log("hola")
  },[persona])
  // centra algo del codigo, es decir alguna variable o funcion, y cada vez que haga algo ejecutara lo que se le pida
  // en este caso dira por cada cosa que pase en [persona]

  //handle: manipula algo o una funcion
  const handlePersona = (name:string,value:string)=>{
    // validaciones
    // aqui toma la persona, la desarma y arma los campos
    // ...persona : recupera lo que tenia previamente
    // lo que hace es, actualizar el nombre o el apellido dependiendo de su respectivo campo
    setPersona(
      {...persona,[name]:value}
    )

    // validacion 2
    // se llama el estado setENombre
    if (persona.nombre.length < 3) {
      setENombre("debe tener mas de 3 caracteres")      
    }else{
      setENombre("")
    }
  };

  //funcion que se llama al presionar el boton registrar
  const handleRegistrar = ()=>{
    miStorage.setItem("personas",JSON.stringify([...personas,persona]))
    // se crea un listado con la persona, se transforma en string y se pasa a json y se guarda en local storage
  }

  return (
    <form>
      <h1>hola {persona.nombre} {persona.apellido} {persona.edad}</h1>
      <label>Nombre</label><br />
      <input
        // name: forma de reconocer una variable o etiqueta
        name="nombre"
        type="text" 
        placeholder="Nombre"
        // e : representara el evento
        // e.currenTarget.value : recupera el nombre del valor que se gatillara
        // e.currenTarget.value : recupera el valor desde que se gatillo el evento
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span>{eNombre}</span><br />

      <label>Apellido</label><br />
      <input
        name="apellido"
        type="text" 
        placeholder="Apellido"
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span></span><br />

      <label>Edad</label><br />
      <input
        name="edad"
        type="number" 
        placeholder="Edad"
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span></span><br />
      <button
        onClick={()=>handleRegistrar}>Registrar</button>
      
    </form>
  );
}
