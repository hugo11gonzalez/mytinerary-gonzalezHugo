import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const index = ({id,title,content,imgUrl}) => {
  return (
    <>
      <Card className="bg-dark text-white">
          <Card.Img src={imgUrl} alt={imgUrl} />
          <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Button className="position-absolute bottom-0 end-0" variant="info"size="sm">Details</Button>
          </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default index
/*
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

*/

/*
  <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

*/
/*
<div className="card">
<img className="img-thumbnail" src={ props.imgUrl } 
alt={ props.alt || 'Image' } />
<div className="card-content">
<h2>{ props.title }</h2>
<p>{ props.content }</p>
</div>
</div>
*/