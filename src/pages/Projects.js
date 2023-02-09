import React from 'react'
import ProjectItem from '../components/ProjectItem'

function Projects() {
    return (
    <div className="projects">
        <h1>My Projects</h1>
        <div classname="projectList">
            <ProjectItem  name="Musical Chairs"/>
            <ProjectItem name="Note Taker"/>
            <ProjectItem name=" JavaScript Quiz"/>
            <ProjectItem name="Celebrity Astrology"/>
            <ProjectItem name="Weather Search"/>
            <ProjectItem name="Readme Generator"/>

        </div>
    </div>
    );
}

export default Projects