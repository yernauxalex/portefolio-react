import React, { useContext } from "react"
import { LanguageContext } from "../Utils/LanguageContext";
import { Container, Nav, Navbar } from 'react-bootstrap';
import franceFlag from '../assets/icons/franceFlag.png'
import ukFlag from '../assets/icons/ukFlag.png'

function Header() {
    const { setLanguageState } = useContext(LanguageContext)

    const toggleLanguage = (event, langUser) => {
        setLanguageState({ lang: langUser })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="me-auto">Yernaux Alexis</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <Nav.Item className="d-flex ">
                            <Nav.Link onClick={event => toggleLanguage(event, 'fr-FR')}><img src={franceFlag} alt="logo" width="24" height="24" className="mx-2 mx-lg-0" /></Nav.Link>
                            <Nav.Link onClick={event => toggleLanguage(event, 'en-GB')}><img src={ukFlag} alt="logo" width="24" height="24" className="mx-2 mx-lg-0" /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default Header