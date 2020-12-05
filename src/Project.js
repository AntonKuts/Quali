import React from 'react';
import { object } from 'prop-types';

const Project =(props)=> {
const { project } = props;
    return (
        <div className="project-box">
            <div className="project-item">
                <div className="project-item-tittle">
                    Project
                </div>
                <div className="project-item-value">
                    {project.title || ''}
                </div>
            </div>
            <div className="project-item">
                <div className="project-item-tittle">
                    Details
                </div>
                <div className="project-item-value">
                    {project.description || ''}
                </div>
            </div>
            <div className="project-item">
                <div className="project-item-tittle">
                    Duration
                </div>
                <div className="project-item-value">
                    {`${project.value || ''} ${project.units || ''}`}
                </div>
            </div>
        </div>
    )
};

Project.propTypes = {
    project: object.isRequired,
};

export default Project;
