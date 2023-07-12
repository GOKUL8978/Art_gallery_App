import React from 'react'
import './style.css'
export default function Card(props) {
 
  return (
    <div className='card'>
        <a href={props.item.image} target="_blank">
        <img src={props.item.image} alt='logo' width='250px' height= '300px'/>
        </a>
      
        <h4>Artist: {props.item.artist}</h4>
        <a href="https://en.wikipedia.org/wiki/Modern_art"  target='_blank' ><button className='explore'>Explore More</button></a>
    </div>
  )
}
