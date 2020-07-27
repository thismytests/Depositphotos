import React from 'react';

// formik
import {useFormik} from 'formik';


// material ui
import {Grid, Typography} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


// locale
import {locale} from './locale';

// form validation
import formValidationSchema from './formValidation';

// types
import {ComponentProps} from './types';


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
    errorName
  }: ComponentProps) {

  const formik = useFormik({
    initialValues: {
      [FORMS_NAMES.INPUT_FIELD]: ''
    },
    validationSchema: {formValidationSchema},
    onSubmit: values => {
      const {inputField} = values;
      const {outputField} = values;

      const formData: {
        inputField: string;
        outputField: string;
      } = {
        inputField,
        outputField
      };

      return onSubmit(formData).finally(() => values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} alignItems="center">

        {/*INPUT FIELD*/}
        <Grid item xs={9}>
          {locale.INPUT_FIELD}
          <TextField
            fullWidth
            name={FORMS_NAMES.INPUT_FIELD}
            onChange={formik.handleChange}
            id={FORMS_NAMES.INPUT_FIELD}
            variant="outlined"
            type="date"
          />
        </Grid>


        {/*GETTING BUTTON*/}
        <Grid item xs={3}>
          <Button color="secondary"
                  type="submit">

            {locale.GET}
          </Button>
        </Grid>

        {/*OUTPUT FIELD*/}
        <Grid item xs={12}>
          {locale.OUTPUT_FIELD}
          <TextField
            fullWidth
            name={FORMS_NAMES.OUTPUT_FIELD}
            onChange={formik.handleChange}
            id={FORMS_NAMES.OUTPUT_FIELD}
            variant="outlined"
            type="date"
          />
        </Grid>

        {/*  error code*/}
        {errorName && (
          <Grid item xs={12}>
            <Typography color="error">{errorName}</Typography>
          </Grid>
        )}
      </Grid>
    </form>
  )
}
