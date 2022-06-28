import React, { useEffect, useState } from 'react'

const Demo = () => {
  const [users, setUsers] = useState([])
  const setApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()

    setUsers(data)
  }
  useEffect(() => {
    setApi()
  }, [])
  return (
    <>
      <div>
        <table style={{width: "100%"}}>
          <th>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>City</td>
          </th>
          {users.map((user) => {
            return (
          
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
              </tr>
            
            )
          })}
        </table>
      </div>
    </>
  )
}

export default Demo