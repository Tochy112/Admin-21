import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import './Header.css'

const Header = () => {
    let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  return (
    <div>
        <div className="nav-div">
            <Navbar className="nav">
                <Container className='nav-container'>
                    <Navbar.Brand href="/home" className="brand">Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p className='content'>{adminDetails.email}</p>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
       
    </div>
  )
}

export default Header