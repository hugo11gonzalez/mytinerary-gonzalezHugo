import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const index = ({id,title,content,imgUrl}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default index

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