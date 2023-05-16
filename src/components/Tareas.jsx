import { useEffect, useState } from "react"


const Tareas = () => {

    const [archivos, setArchivos] = useState([])

     const mostrarArchivos = async() => {   
      await fetch("src/json/archivo.json")
        .then((res)=>res.json())
        .then((data)=>setArchivos(data)) 
        .catch((err)=>{
            console.log(err)
        })
        console.log(archivos)
    }

  useEffect(()=>{mostrarArchivos()},[])
    
  
  return (
    <div className="container-tareas">
      {archivos.map((archivo) => (
        <section key={archivo.id} className="tareasCard"> 
          <h1 className="name"><strong>Titulo:</strong>  {archivo.title}</h1>
          <img src={archivo.url} alt="photo" />
          

          
        </section>
      ))}
    </div>
  );

}

export default Tareas