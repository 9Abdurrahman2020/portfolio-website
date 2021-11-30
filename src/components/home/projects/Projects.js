import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from '../project/Project';

const Projects = () => {
    const [projects, setProjects ] = useState([])
    useEffect( ()=>{
        fetch('./projects.json')
        .then(res=>res.json())
        .then( projects =>{
            setProjects(projects)
        })
    },[])
    return (
        <div id="projects" className="container">
            <h2 className="text-danger my-4"><span className="text-success">My</span> Projects</h2>
            <Row className="g-4">
                {
                    projects.map(project => <Project
                    key={project.id}
                    project={project}
                    />)
                }               
            </Row>
        </div>
    );
};

export default Projects;