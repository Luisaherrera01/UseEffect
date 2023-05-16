import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])
    const mostrarUsers = async() => {   
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) 
        .catch((err)=>{
            console.log(err)
        })
        console.log(users)
    };
    useEffect(()=>{
      mostrarUsers()
    },[])
    
    //console.log("users")
  
  return (
    <div>
      {users.map((User) => (
        <section key={User.id} className="userCard">
          <h1 className="name">{User.name}</h1>
          <p className="username">{User.username}</p>
          <p className="email">{User.email}</p>
          <div className="address">
            <p>{User.address.street}</p>
            <p>{User.address.suite}</p>
            <p>{User.address.city}</p>
            <p>{User.address.zipcode}</p>
          </div>
          <div className="geo">
            <p>{User.address.geo.lat}</p>
            <p>{User.address.geo.lng}</p>
          </div>
        </section>
      ))}
    </div>
  );

}

export default Users