import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react'
const cardsData = [
  {id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200'},
  {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200'},
  {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201'},
  {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
  {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200'},
  {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199'},
  {id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199'},
  {id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200'},
  {id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198'},
  {id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199'},
  {id: 11, title: 'CARD 11', content: 'Lolo Strange', imgUrl: 'https://unsplash.it/198/199'},
  {id: 12, title: 'CARD 12', content: 'Lalo Strange', imgUrl: 'https://unsplash.it/198/199'},
]

const index = ({id,title,content,imgUrl}) => {
  
  
  let [imgActuales, setImgActuales] = useState([])
  let [index, setIndex] = useState(0)
  //const handleClick = ()=> setIndex(index + 4)
  //let cards = cardsData[index]
  
  useEffect(() => {
		const interval = setInterval(() => {
      setImgActuales(cardsData.splice(index, 4))
      if(index>=8){
        setIndex(0)
      }else{
        setIndex(index + 4)
      }
      console.log(index)
		}, 6000)

		return () => {
			clearInterval(interval)
		}
	}, [imgActuales])

  return (
      <div className=" d-flex flex-wrap gap-4 cards-container">
        {
          imgActuales.map((card) => (
            <Card
              key={card.id}
              id={ card.id }
              title={ card.title }
              content={ card.content }
              imgUrl={ card.imgUrl } 
            />

          ))
        }
      </div>
  )
}

export default index

