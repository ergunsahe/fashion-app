import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                
                <Nav className="mr-auto">
                    <Nav.Link href="/productList">Home</Nav.Link>
                    <Nav.Link href="/statistics">Statistics</Nav.Link>
                    
                </Nav>
            </Navbar>
           
            
            
        </>

    )
}

export default AppNavbar
