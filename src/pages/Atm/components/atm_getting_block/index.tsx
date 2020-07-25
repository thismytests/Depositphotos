import React from 'react';

// formik
import {Form, Formik} from 'formik';


// material ui
import {Grid, Typography} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


// locale
import {locale} from './locale';

// form validation
import formValidation from './formValidation';

// types
import {FormProps} from './types';


const FORMS_NAMES: {
  INPUT_FIELD: string;
  OUTPUT_FIELD: string
} = {
  INPUT_FIELD: 'inputField',
  OUTPUT_FIELD: 'outputField',
};


export default function AtmGettingBlock(
  {
    onSubmit,
    errorCode
  }: FormProps) {


  const initialFormValues = {
    [FORMS_NAMES.INPUT_FIELD]: ''
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={formValidation}
      isInitialValid={formValidation.isValidSync(initialFormValues)}
      onSubmit={(input, actions) => {
        actions.setSubmitting(true);

        const {inputField} = input;
        const {outputField} = input;

        const formData: {
          inputField: string;
          outputField: string;
        } = {
          inputField,
          outputField
        };

        return onSubmit(formData).finally(() => actions.setSubmitting(false));
      }}
    >
      {({values}) => (
        <Form>
          <Grid container spacing={3} alignItems="center">

            {/*Title*/}
            <Grid item xs={12}>
              {locale.INPUT_FIELD}
              <TextField
                fullWidth
                name={FORMS_NAMES.INPUT_FIELD}
                id={FORMS_NAMES.INPUT_FIELD}
                variant="outlined"
                type="date"
              />
            </Grid>

            {/*Title*/}
            <Grid item xs={12}>
              {locale.OUTPUT_FIELD}
              <TextField
                fullWidth
                name={FORMS_NAMES.OUTPUT_FIELD}
                id={FORMS_NAMES.OUTPUT_FIELD}
                variant="outlined"
                type="date"
              />
            </Grid>
            {/*birthday name*/}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name={FORMS_NAMES.INPUT_FIELD}
                id={FORMS_NAMES.INPUT_FIELD}
                variant="outlined"
                type="date"
              />
            </Grid>

            {/*submit button*/}
            <Button color="secondary"
                    type="submit">
              {locale.GET}
            </Button>

            {/*  error code*/}
            {errorCode && (
              <Grid item xs={12}>
                <Typography color="error">{errorCode}</Typography>
              </Grid>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
