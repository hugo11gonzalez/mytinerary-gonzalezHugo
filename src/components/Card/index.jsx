import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const index = (props) => {
  return (
    
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1439840143/es/foto/panorama-de-la-plaza-de-mayo-buenos-aires-vista-a%C3%A9rea-de-la-casa-rosada-palacio-de-gobierno-de.jpg?s=612x612&w=0&k=20&c=cgmHOK1Cj_aBSOIzQadZW5xi-X3cmt9yr42hw3EG4gk=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
      /*
    <div className="card">
    <img className="img-thumbnail" src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </div>
  </div>*/
  )
}

export default index
