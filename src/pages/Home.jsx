import React from 'react'
import '../components/style.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'> 
      <img src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="wide" width='100%'
      height='500px' />
        <div className='img-content'>"Art enables us to find ourselves and lose ourselves at the same time" - Thomas Merton
      </div>
      <span className='h1'>An Online Platform for Original Paintings, Photographs & Sculptures</span>
      <div className='images'>
      <div className='images-folder'>
      <Link to="/Paintings"><img src="https://i.pinimg.com/736x/cb/c6/62/cbc662299bd35357e519fe867444b86c.jpg" alt="" width="300px" height="200px" /></Link>
      <h5 className='contents'>PAINTINGS</h5>
      </div> 
      <div className='images-folder'>
        <Link to="/Sculptures">
      <img src="https://www.artzolo.com/sites/default/files/styles/blog/public/blog/images/cover_image_11.jpg" alt="" width="300px" height="200px"/>
      </Link>
      <h5 className='contents'>SCULPTURES</h5>
      </div>
      <div className='images-folder'>
        <Link to="/Artworks">
      <img src="https://www.liveabout.com/thmb/kF-kplZ5AfdW3VEhuG539m4tUI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-667156305-59befb3daf5d3a00102437f8.jpg" alt=""width="300px" height="200px" />
        </Link>
      <h5 className='contents'>ARTISTS</h5>
      </div>
      </div>
      
    </div>
  )
}

export default Home