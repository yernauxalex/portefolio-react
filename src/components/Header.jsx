import React from "react"
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="me-auto">Yernaux Alexis</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#placeholder">placeholder</Nav.Link>
                        <Nav.Link eventKey={2} href="#contact">
                            Contact me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header