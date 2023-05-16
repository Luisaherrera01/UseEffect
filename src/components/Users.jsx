import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])

  /*async function mostrarUsuarios(){
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) 
        .catch((err)=>{
            console.log(err)
        })
  }*/

    const mostrarUsers = async() => {   
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) 
        .catch((err)=>{
            console.log(err)
        })
        console.log(users)
    }

  useEffect(()=>{mostrarUsers()},[])
    
  
  return (
    <div className="container">
      {users.map((User) => (
        <section key={User.id} className="userCard"> 
        
          <h1 className="name"><strong>Nombre:</strong>  {User.name}</h1>
          <p className="username"> <strong>Usuario:</strong> {User.username}</p>
          <p className="email"> Email: {User.email}</p>
          <div className="address">Direccion: 
            <ul> 
            <li>Calle: {User.address.street}</li>
            <li>Suite: {User.address.suite}</li>
            <li>Ciudad: {User.address.city}</li>
            <li>Codigo Postal: {User.address.zipcode}</li>
            </ul>
          </div>
          <div className="geo">Geolocalización: 
            <ul>
            <li>Latitud: {User.address.geo.lat}</li>
            <li>Longitud: {User.address.geo.lng}</li>
            </ul>
          </div>
        </section>
      ))}
    </div>
  );

}
//se debe poner key para que no salga error
export default Users