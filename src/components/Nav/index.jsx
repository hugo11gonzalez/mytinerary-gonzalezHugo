import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link as Anchor} from 'react-router-dom'

const index = () => {
  let data =[
    {to: '/', titulo: 'Home', icono:'bi bi-house-door'},
    {to: '/cities', titulo: 'Cities', icono: 'bi bi-buildings'},
    {to: '/login', titulo: 'Login', icono:'bi bi-person-circle'}
  ]
  return (
    <>
     <Navbar expand="lg" className="bg-info d-flex justify-content-between px-5">
      
        <Navbar.Brand href="home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-10">
          {data.map((each, key)=><Anchor className="btn bg-warning gap-4 m-1 rounded" key={key} to={each.to}><span className= {each.icono}></span> {each.titulo}</Anchor>)}
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </>
  )
}

export default index
/*
<Nav.Link href={href}>{titulo}</Nav.Link>
            <Nav.Link href={href}>{titulo}</Nav.Link>
            <Nav.Link className="btn btn-sm btn-primary text-info-emphasis" href={href}><span><i className="bi bi-person-circle p-1 "></i></span>{titulo}</Nav.Link>

            {data.map((each, key)=><Anchor key={key} href={each.href} titulo={each.titulo}/>)}
*/
