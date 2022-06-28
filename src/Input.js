import React from 'react'

const Input = () => {
  return (
    <>
      <div>
        <input type="search" placeholder='Search Item....' />
        <button>Search</button>
        <div>
          <select>
            <option>Surat</option>
            <option>Banglore</option>
            <option>Delhi</option>
            <option>Nagpur</option>
            <option>Hydrabad</option>
            <option>Ahemdabad</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Input