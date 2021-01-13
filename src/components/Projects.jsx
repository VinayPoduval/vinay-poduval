import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Secure Storage',
            description: 'A web based application to store files in encrypted format on a private cloud server and download in decrypted format.',
            tools: 'HTML5, CSS3, Javascript, Python, MySQL, Php',
            link: 'https://github.com/VinayPoduval/Secure-storage'
        },
        {
            title: 'To-Do App',
            description: 'A react app to create, edit, delete day-to-day activities.',
            tools: 'HTML5, CSS3, Javascript, ReactJS',
            link: 'https://github.com/VinayPoduval/ToDo-app--react'
        },
        {
            title: 'Mini Youtube player',
            description: 'A mini video player app created using ReactJS and the Youtube API',
            tools: 'HTML5, CSS3, Javascript, ReactJS',
            link: 'https://github.com/VinayPoduval/mini-youtube-player'
        },
        {
            title: 'Language Translator',
            description: 'A web app in ReactJS using the Google Translate API to translate text from one language to another(German, French, Spanish, Russian, Hindi).',
            tools: 'HTML5, CSS3, ReactJS, Javascript'
        },
        {
            title: 'Item Catalog',
            description: 'A web app to demnostrate CRUD operations. Used Google OAuth for users to sign-in to the application.',
            tools:'Python, PostgreSQL, HTML, CSS3',
            link:'https://github.com/VinayPoduval/Item-Catalog'
        }
    ];
    return(
        <>
            <h1>Projects</h1>
            <div className="projects-container">
                {projects.map(project => <ProjectCard key={project.link} project={project} />)}
            </div>
        </>
    );
}

export default Projects;