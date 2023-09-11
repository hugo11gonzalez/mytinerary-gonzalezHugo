import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Anchor from '../Anchor'
const index = () => {
  let data =[
    {href: 'home', titulo: 'Home'},
    {href: 'cities', titulo: 'Cities'},
    {href: 'login', titulo: 'Login'}
  ]
  return (
    <>
     <Navbar expand="lg" className="bg-info d-flex justify-content-between px-5">
      
        <Navbar.Brand href="home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-10">
          {data.map((each, key)=><Anchor key={key} href={each.href} titulo={each.titulo}/>)}
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
