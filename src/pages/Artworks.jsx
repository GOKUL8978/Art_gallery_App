import React from 'react'
import data_art from '../data_art'
import Card from '../components/Card'
import '../components/style.css'
const Artworks = () => {
  const cards = data_art.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })   
  return (
    <div >
   <section className="cards-list ">
                {cards}
            </section>
            </div>
  )
}

export default Artworks