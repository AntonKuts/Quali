import React from 'react';
import { array } from 'prop-types';
import Project from "./Project";

const Projects =(props)=> {
const { projects } = props;
    return (
        <div className="projects-box">
            <div className="add-projects-box">
                +
            </div>
            <div className="show-projects-box">
                {projects.length > 0 && projects.map((project, index) => (
                    project?.title
                        ? (
                            <Project
                                key={project.title + index}
                                project={project}
                            />
                        )
                        : ''))
                }
            </div>
        </div>
    )
};

Projects.propTypes = {
    projects: array.isRequired,
};

export default Projects;
