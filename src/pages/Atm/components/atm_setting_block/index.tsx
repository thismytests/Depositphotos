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
import {ComponentProps, FormData} from './types';


const FORMS_NAMES: {
  AVAILABLE_BILLS: string;
} = {
  AVAILABLE_BILLS: 'availableBills'
};


export default function AtmSettingBlock(
  {
    onSubmit,
    errorCode
  }: ComponentProps) {

  const formik = useFormik({
    initialValues: {
      [FORMS_NAMES.AVAILABLE_BILLS]: ''
    },
    validationSchema: {formValidationSchema},
    onSubmit: values => {
      const {availableBills} = values;

      const formData: FormData = {
        availableBills
      };

      return onSubmit(formData).finally(() => values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} alignItems="center">

        {/*INPUT FIELD*/}
        <Grid item xs={9}>
          {locale.AVAILABLE_BILLS}
          <TextField
            fullWidth
            name={FORMS_NAMES.AVAILABLE_BILLS}
            onChange={formik.handleChange}
            id={FORMS_NAMES.AVAILABLE_BILLS}
            variant="outlined"
            type="date"
          />
        </Grid>


        {/*SETTING BUTTONS*/}
        <Grid item xs={3}>
          <Button color="secondary"
                  type="submit">
            {locale.SAVE}
          </Button>
        </Grid>


        {/*  error code*/}
        {errorCode && (
          <Grid item xs={12}>
            <Typography color="error">{errorCode}</Typography>
          </Grid>
        )}
      </Grid>
    </form>
  )
}
