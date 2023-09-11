import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';


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

const index = () => {
  let [imgActuales, setImgActuales] = useState([]);
  let [currentIndex, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImgActuales(cardsData.slice(currentIndex, currentIndex + 4));
      setIndex(currentIndex === 8 ? 0 : currentIndex + 4);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [currentIndex]);

  useEffect(() => {
    console.log(imgActuales);
  }, [imgActuales]);

  return (
    <>
      <Row xs={1} md={6} className="g-2 gap-1 mx-auto justify-content-center">
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
      </Row>
    </>
  )
}

export default index

/*
  let [step, setStep] = useState (0)
  let handlerBack = () =>{
    if(index!=4){
      setStep(step-4)
    }
  }
  let handlerGo =() => {
    if(step!=8){
      setStep(step+4)
    }
    }
  }

  return (
    <>
      <div>
        { (index==0 ||index==4)?
          <Button onClick={()=>handlerBack()} variant='outline' size='sm'>Atras</Button>:null

        }
      </div>
    </>
  )
*/