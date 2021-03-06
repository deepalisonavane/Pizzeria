import React from 'react'
import {Nav,Navbar, Container, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const MainNav = () => {
  return (
   <>
  
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container className='container' >
  <Navbar.Brand >
    <Image src="images/logo.jpg" height={"70px"}></Image>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <LinkContainer to="/login">
      <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/cart">
      <Nav.Link>Cart</Nav.Link>
      </LinkContainer>      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
   


 
</> 
 )
}

export default MainNav;