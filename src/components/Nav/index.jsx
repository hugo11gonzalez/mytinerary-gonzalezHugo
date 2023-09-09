import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const index = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cities</Nav.Link>
            <Nav.Link className="btn btn-sm btn-outline-secondary" href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </>
  )
}

export default index

