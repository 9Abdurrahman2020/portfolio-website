import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const { id, title, subTitle, image: { ss1}} = project;
    return (
        <div data-aos-duration="900" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className="col-md-6">
                    <Card>
                        <Card.Img  style={{height:'250px'}} variant="top" src={ss1} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {subTitle}
                            </Card.Text>
                            <Link to={`detail/${id}`}><Button variant="outline-success">Explore</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
    );
};

export default Project;