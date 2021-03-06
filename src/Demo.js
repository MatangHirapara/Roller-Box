import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./demo.css"

const Demo = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const setApi = async () => {
    const response = await fetch("http://localhost:3002/users");
    const data = await response.json()

    setUsers(data)
  }
  useEffect(() => {
    setApi()
  }, [])

  const AddNewList = () => {
    navigate("/addList")
  }
  return (
    <>
      <div>
        <table style={{width: "100%"}}>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {users.map((user) => {
            return (          
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>            
            )
          })}
        </table>
        <br />
        <button onClick={AddNewList} style={{backgroundColor: "blue", color: "white",fontSize: "1.3rem"}} >Add New Item</button>
      </div>
    </>
  )
}

export default Demo