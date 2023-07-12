import React from 'react'
import Card from '../components/Card'
import data from '../data'
const Paintings = () => {
   const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })   
  return (
  <section className="cards-list">
                {cards}
            </section>
  )
}

export default Paintings