import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css'

function Home() {
    return (
    <div className="home">
        <div className="about">
            <h2>Hi my name is Adrienne Cordell</h2>
            <div classname="prompt">
                <p> I am a Full-Stack Web Developer! I love to code and learn new things!</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ul classname="list">
                <li className="item">
                    <h2> Front-End Skills</h2>
                    <span>
                        HTML, Advanced CSS, JavaScript, jQuery, responsive design, React, Bootstrap
                     </span>
                </li>
                <li className="item">
                    <h2> Back-End</h2>
                    <span> 
                        ApIs, Node.js, Apollo-server, Express.js, MySQL, sequelize, MongoDB, Mongoose, Rest, GraphQL
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span> 
                        JavaScript, TypeScript, Python
                    </span>
                </li>
            </ul>
        </div>
    
    </div>
    );
}

export default Home