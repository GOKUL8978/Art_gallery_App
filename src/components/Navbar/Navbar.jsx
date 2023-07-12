import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
export default function Navbar() {
    
  return (
    <div  className='nav'>
       <h2><Link to="/" className='brand-name'>Artvista</Link> </h2>
       <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/Artworks">Artworks</Link></li>
        <li><Link to="/Paintings">Paintings</Link></li>
        <li><Link to="/Sculptures">Sculptures</Link></li>
       </ul>
       <div className='searcharea'>
    
        <input type="text" placeholder='Search..' />
        </div>
    </div>
  )
}
