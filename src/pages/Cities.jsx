import React from 'react'
import {useState, useEffect} from 'react';
import SlideShow from '../components/SlideShow'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cities = () => {
  document.title='Cities'
  let[cities,setCities] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:3000/api/cities")
    .then((response)=>{
      setCities(response.data.cities);
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <div className='d-flex justify-content-around'>
      {
        cities.map((cities)=>(
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cities.foto} />
          <Card.Body>
            <Card.Title>{cities.name}</Card.Title>
            <Card.Text>
            {cities.pais}
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
        ))
      }
    </div>
  );
}

export default Cities

