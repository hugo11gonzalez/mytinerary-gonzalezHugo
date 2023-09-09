import React from 'react'
import Card from '../Card'

const index = (props) => {
  return (
    <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
  )
}

export default index

