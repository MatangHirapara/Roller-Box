import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addlist = () => {
  const navigate = useNavigate()
  const [user, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  })
  const { name, email, phone, city } = user;

  const onhandlechange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value })
  }
  const onsubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user)
    navigate.push("/")
  }
  return (
    <>
      <div>
        <form onSubmit={e => onsubmit(e)} style={{ display: "inline-grid",marginLeft: "5rem",marginTop: "3rem" }}>
          <div>
            <input type="text" onChange={e => onhandlechange(e)} value={name} name='name' placeholder='Enter Your Name' />
          </div>
          <br />
          <div>
            <input type="email" onChange={e => onhandlechange(e)} value={email} name='email' placeholder='Enter Your Email' />
          </div>
          <br />
          <div>
            <input type="number" onChange={e => onhandlechange(e)} value={phone} name='phone' placeholder='Enter Your Number' />
          </div>
          <br />
          <div>
            <input type="text" onChange={e => onhandlechange(e)} value={city} name='city' placeholder='Enter Your city' />
          </div>
          <br />
          <button>Add</button>
        </form>
      </div>
    </>
  )
}

export default Addlist