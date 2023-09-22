import React from 'react'
import {useState, useEffect, useRef} from 'react';
import SlideShow from '../components/SlideShow'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cities = () => {
  document.title='Cities'
  let[cities,setCities] = useState([])
  
  const inputNombreCityRef= useRef()
  
  const buscarCity =()=>{
    let nombreCiudad =inputNombreCityRef.current.value;
    console.log(nombreCiudad);
    axios.get("http://localhost:3000/api/city"+nombreCiudad)
    .then((response) =>{
      console.log(response);
      //setCities(response.data.cities);
    })
    .catch((err)=>console.log(err));
  };
/*
  const handleSubmit =(e) => {
    e.preventDefault();
    //buscarCity();
    console.log(inputNombreCityRef.current);
  };
  */
  useEffect(()=>{
    axios.get("http://localhost:3000/api/cities")
    .then((response)=>{
      setCities(response.data.cities);
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <>
      <h1 className="text-center text-black">
        "Cities"
        </h1>
      <div className="d-flex justify-content-around align-items-center py-2">
        <form >
          <div>
            <input type="text" name="City" id="City" ref={inputNombreCityRef} />
            <button className='mx-2' type="button"onClick={()=>buscarCity()}><span className= 'bi bi-search p-1'></span></button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-around">
        {cities.map((cities, key) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={cities.foto} />
            <Card.Body>
            <Card.Text>{key+1}</Card.Text>
              
              <Card.Title>{cities.name}</Card.Title>
              
              <Card.Text>{cities.pais}</Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cities

