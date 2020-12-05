import React from 'react';
import { Field } from 'react-final-form';
import {func, object} from 'prop-types';
import ProjectTitle from './ProjectTitle';
import Projects from './Projects';

const FormComponent =(props)=> {
    const { handleSubmit, formValues, formOnChange } = props;
    const { projects } = formValues;

    const deleteProject =(projectTitle)=> {
        const newFormValues = formValues.projects.filter(n => n.title !== projectTitle);
        formOnChange('projects', newFormValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-body">
                <div className="name-input-box box">
                    <div className="box-title">Name</div>
                    <Field name="name">
                        {({ input, meta }) => (
                            <div>
                                <input {...input} type="text" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <div className="projects-box box">
                    <div className="box-title">Projects</div>
                    <div className="projects-title-box">
                        {projects.length > 0 && projects.map((project, index) => (
                            project?.title
                                ? (
                                    <ProjectTitle
                                        key={project.title + index}
                                        tittle={project.title}
                                        deleteProject={deleteProject}
                                    />
                                    )
                                : ''))
                        }
                    </div>
                </div>
                <div className="add-projects-box box">
                    <div className="box-title">
                        Projects Details
                        <span className="add-project"> + </span>
                    </div>
                </div>
                <Projects projects={projects}/>
                <div className="submit-button-box">
                    <button type="submit">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

FormComponent.propTypes = {
    handleSubmit: func.isRequired,
    formValues: object.isRequired,
    formOnChange: func.isRequired,
};

export default FormComponent;
