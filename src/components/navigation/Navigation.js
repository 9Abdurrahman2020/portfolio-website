import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
            <Navbar className="container" expand="lg">
                <Container fluid>
                    <Link style={{textDecoration:'none',color:'black'}} to="/"><img style={{width:'50px'}} src="https://i.ibb.co/n8gMrRR/portfolio-logo-removebg-preview.png" alt="A"/>bdur Rahman</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1geFmhzCM7oKrFQI9094Wf76nfaXZaWFu/view?usp=sharing">Resume</Nav.Link>
                        <Nav.Link ><HashLink style={{textDecoration:'none',color:'gray'}} to="/#projects">Projects</HashLink></Nav.Link>
                        <Nav.Link ><HashLink style={{textDecoration:'none',color:'gray'}} to="/#contact">Contact</HashLink></Nav.Link>
                        <Nav.Link ><Link style={{textDecoration:'none',color:'gray'}} to="/blogs">Blogs</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;