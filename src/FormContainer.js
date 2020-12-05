import React from 'react';
import { Form } from 'react-final-form';
import FormComponent from './FormComponent';
import { getStartData } from './startData';

const FormContainer =()=> {

    const submitForm =(formValues)=> {
        console.log('submit values -- ', formValues);
    };

    const formValidate =()=> {
        // validate here
    };

    return (
        <Form
            onSubmit={submitForm}
            initialValues={getStartData()}
            validate={formValidate}
            subscription={{ initialValues: true, values: true }}
            render={({ handleSubmit, form, values }) => (
                <FormComponent
                    formOnChange={form.change}
                    handleSubmit={handleSubmit}
                    formValues={values}
                />
            )}
        />
    );
};

export default FormContainer;
