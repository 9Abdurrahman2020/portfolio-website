import React from 'react';
import { Button, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './topbanner.css';

const TopBanner = () => {
    return (
        <Row className="top-banner-container">

            <div data-aos-duration="1000" data-aos="fade-right" className="col-md-6 img-container">
                <img className="shadow" src="https://i.ibb.co/s5Dn91Y/portfolio-removebg-preview.png" alt="my pic"/>
            </div>
            <div data-aos-duration="1000" data-aos="fade-left" className="col-md-6 info-container">
                <h6>Frontend Developer</h6>
                <h2>Abdur Rahman</h2>
                <p>Hi i'm Abdur Rahman, A Frontend web developer</p>
                <div className="btn-container">
                    <a target="_blank" href="https://drive.google.com/file/d/1geFmhzCM7oKrFQI9094Wf76nfaXZaWFu/view?usp=sharing"><Button className="me-3" variant="outline-primary">Download Resume</Button></a>
                    <HashLink to="/#contact"><Button variant="outline-secondary">Contact Me</Button></HashLink>
                    
                </div>
            </div>

        </Row>
    );
};

export default TopBanner;