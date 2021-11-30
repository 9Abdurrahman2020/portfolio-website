import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navigation from '../navigation/Navigation';

const SingleProject = () => {
    const {projectId } = useParams();
    const [ project, setProject ] = useState({});
    const { title, subTitle, image, des,technology,websiteLink, clientCode, serverCode } = project;

    useEffect( ()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then( projects =>{
            const singleProject = projects.find(p => p.id == projectId )
            setProject(singleProject)
        })
    },[projectId])

    return (
        <div className="container">
            <Navigation/>
            <Row className="my-4">
                <div className="col-md-6">
                    <h3>{title}</h3>
                    <h6>{subTitle}</h6>
                    <p>{des}</p>
                    <p><strong>Technology used: </strong>{technology}</p>
                    <div>
                        <a target="_blank" href={websiteLink}><Button className="me-2" variant="outline-danger">Live Website</Button></a>
                        <a target="_blank" href={clientCode}><Button className="me-2"  variant="outline-danger">Client Side Code </Button></a>
                        {
                            serverCode && <a target="_blank" href={serverCode}><Button className="me-2"  variant="outline-danger">Server Side Code </Button></a>
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <Row className="g-3">
                        <div className="col-md-12 border ">
                            <img className="w-100" src={image?.ss1} alt="" />
                        </div>
                        <div className="col-md-6 border ">
                            <img className="w-100" src={image?.ss2} alt="" />
                        </div>
                        <div className="col-md-6 border ">
                            <img className="w-100" src={image?.ss3} alt="" />
                        </div>
                        
                    </Row>
                </div>
            </Row>
        </div>
    );
};

export default SingleProject;