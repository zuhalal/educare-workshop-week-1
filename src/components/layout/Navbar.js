import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/" >
          <li>Home</li>
        </Link>
        <Link to="/profil" >
          <li>Profil</li>
        </Link>
        <Link to="/kontak" >
          <li>Kontak</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
