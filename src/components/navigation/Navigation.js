import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
            <Navbar className="container" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img style={{width:'50px'}} src="https://i.ibb.co/n8gMrRR/portfolio-logo-removebg-preview.png" alt="A"/>bdur Rahman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Resume</Nav.Link>
                        <Nav.Link href="#action1">Projects</Nav.Link>
                        <Nav.Link href="#action1">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;