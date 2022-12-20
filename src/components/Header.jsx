
import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsFillCartCheckFill} from 'react-icons/bs';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container  className='px-3'>
        <Navbar.Brand>
          <Link to="/" style={{fontWeight:700,letterSpacing:1,fontSize:25}}>ClickKart</Link>
        </Navbar.Brand>
        <Navbar.Text className='d-flex'>
            <FormControl placeholder="Search Product..." className='me-auto '/>
            <Nav className='ms-2'>
            <Dropdown >
                <Dropdown.Toggle  >
                    <BsFillCartCheckFill size={28} />
                    <Badge className='bg-warning p-1 px-2'>3</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <span className='p-2'>Cart is empty</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Navbar.Text>
       
    </Container>
    </Navbar>
  )
}

export default Header