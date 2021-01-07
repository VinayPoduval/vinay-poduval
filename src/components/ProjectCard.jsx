import React from 'react';
//import {Link} from 'react-router-dom';

const ProjectCard = ({project}) => {
    return(
        <div className="card">
            <h3>{project.title}</h3>
            <div className="card-content">
                    <p className="project-desc">{project.description}</p><br/><br/>
                    <p className="project-desc">Tools: {project.tools}</p><br/>
                    <button onClick={()=>window.open(project.link, '_blank')}>View Project</button>
            </div>
        </div>
    );
};

export default ProjectCard;