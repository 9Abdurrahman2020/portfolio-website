import React from 'react';
import { Button, Row } from 'react-bootstrap';
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
                    <Button className="me-3" variant="outline-primary">Download Resume</Button>
                    <Button variant="outline-secondary">Contact</Button>
                </div>
            </div>

        </Row>
    );
};

export default TopBanner;