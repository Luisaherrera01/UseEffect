import { useState } from "react"

const Users = () => {
    const [users, setUsers] = useState()
    const mostrarUsers = async() => {   
        await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) 
        .catch((err)=>{
            console.log(err)
        })
    }
    mostrarUsers()
    //console.log("users")
  return (
    <div>Users</div>
  )
}

export default Users