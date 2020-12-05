import React from 'react';
import { string, func } from 'prop-types';

const ProjectTitle =(props)=> {
const { tittle, deleteProject } = props;
    return (
        <div className="project-title-box">
           <p className="project_title_text">
               {tittle}
               <span className="delete-project" onClick={()=>deleteProject(tittle)}> X </span>
           </p>
        </div>
    )
};

ProjectTitle.propTypes = {
    tittle: string.isRequired,
    deleteProject: func.isRequired,
};

export default ProjectTitle;
