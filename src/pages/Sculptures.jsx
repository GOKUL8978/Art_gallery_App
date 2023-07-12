import React from 'react'
import data_paintings from '../data_paintings'
import Card from '../components/Card'
const Sculptures = () => {
    const cards = data_paintings.map(item => {
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

export default Sculptures