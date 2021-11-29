import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div className="container">
            <h2 className="text-danger my-4"><span className="text-success">My</span> Projects</h2>
            <Row className="g-4">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="col-md-6">
                    <Card>
                        <Card.Img  style={{height:'250px'}} variant="top" src="https://i.ibb.co/4VcM0xH/Screenshot-89.png" />
                        <Card.Body>
                            <Card.Title>Touroo</Card.Title>
                            <Card.Text>
                            A Tour booking organizations website (FullStack)
                            </Card.Text>
                            <Button variant="primary">Live Site</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="col-md-6">
                    <Card>
                        <Card.Img style={{height:'250px'}} variant="top" src="https://i.ibb.co/LRM5Nwy/Screenshot-90.png" />
                        <Card.Body>
                            <Card.Title>Organic Toy</Card.Title>
                            <Card.Text>
                            A Toy selling website (FullStack)
                            </Card.Text>
                            <Button variant="primary">Live site</Button>
                        </Card.Body>
                    </Card>
                </div>
               
            </Row>
        </div>
    );
};

export default Projects;