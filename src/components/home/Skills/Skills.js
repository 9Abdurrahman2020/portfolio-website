import React from 'react';
import { Row } from 'react-bootstrap';
import './skill.css'

const Skills = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center my-5">My <span className="text-primary">Skills</span></h2>

            <Row className="skill-container g-5">
                <div data-aos-duration="500" data-aos="zoom-in" className="col-6 col-md-4 ">
                    <img src="https://i.ibb.co/vQ90Zr2/html.png" alt="HTML" />
                </div>
                <div data-aos-duration="600" data-aos="zoom-in" className="col-6 col-md-4">
                    <img src="https://i.ibb.co/8d4Ptxw/css3.png" alt="CSS3" />
                </div>
                <div data-aos-duration="700" data-aos="zoom-in" className="col-6 col-md-4">
                    <img src="https://i.ibb.co/BwtTRWG/bootstrap.jpg" alt="Bootstrap" />
                </div>
                <div data-aos-duration="800" data-aos="zoom-in" className="col-6 col-md-4">
                    <img src="https://i.ibb.co/NrBmCrs/javascript.png" alt="HTML" />
                </div>
                <div data-aos-duration="900" data-aos="zoom-in" className="col-6 col-md-4">
                    <img src="https://i.ibb.co/NVV7CXq/reactJs.jpg" alt="HTML" />
                </div>
                <div data-aos-duration="1000" data-aos="zoom-in" className="col-6 col-md-4">
                    <img src="https://i.ibb.co/mCxV0cB/nodeJs.jpg" alt="HTML" />
                </div>

            </Row>
        </div>
    );
};

export default Skills;