import React from 'react'
// import { useParams } from 'react-router-dom';
// import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectsDisplay.css'

function ProjectDisplay() {
    // const { id } = useParams();
    // const project = ProjectList[id];
    return (
        <div className="project">
            {/* <h1>{project.name}</h1> */}
            {/* <img{project.image}/> */}
            <GitHubIcon />
        </div>
    )
}

export default ProjectDisplay