import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Artworks from './pages/Artworks'
import Sculptures from './pages/Sculptures'
import Paintings from './pages/Paintings'
import {Route,Routes} from 'react-router-dom'
import './components/style.css'

export default function App() {
 
       
  return (
       <div>
        
         <Navbar />
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Artworks" element={<Artworks/>}/>
          <Route path="/Paintings" element={<Paintings/>}/>
          <Route path="/Sculptures" element={<Sculptures />}/>
        
         </Routes>
         <Footer />
           
         </div>
       
       
  )
}
