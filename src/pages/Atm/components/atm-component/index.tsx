import React, {useState} from 'react';

// formik
import {useFormik} from 'formik';


// material ui
import {Grid, Typography} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


// locale
import {locale} from './locale';

// types
import {ComponentProps} from './types';
import {getMoney, isValidBanknotes} from "../../commons/utils";


const FORMS_NAMES: {
  INPUT_FIELD: string;
  OUTPUT_FIELD: string
} = {
  INPUT_FIELD: 'inputField',
  OUTPUT_FIELD: 'outputField',
};


export default function AtmGettingBlock({errorName}: ComponentProps) {
  const [banknotes, setBanknotes] = useState<string>('');
  const [isUseSettings, setIsUseSettings] = useState<boolean>();

  const [isErrorOnGettingMoney, setIsErrorOnGettingMoney] = useState<boolean>(false);
  const [isErrorOnSettingBanknotes, setIsErrorOnSettingBanknotes] = useState<boolean>(false);

  const handlerSettingChanges = (evt: any) => {
    setBanknotes(evt.target?.value);
  };

  const onSaveSettings = () => {
    if (isValidBanknotes(banknotes)) {
      console.log('banknotes ', banknotes);
      setIsUseSettings(false);
      setIsErrorOnSettingBanknotes(false);
    } else {
      setIsErrorOnSettingBanknotes(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      [FORMS_NAMES.INPUT_FIELD]: ''
    },
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

      if(!isErrorOnSettingBanknotes) {
        const money = getMoney(
          banknotes.split(' ').map(Number),
          +inputField
        );
        console.log('money ', money);
      }
      // return onSubmit(formData).finally(() => values);
    },
  });

  return (
    <>
      {/*setting money*/}
      <Grid container spacing={3} alignItems="center">

        {/*INPUT FIELD*/}
        <Grid item xs={9}>
          {locale.AVAILABLE_BILLS}
          <TextField
            fullWidth
            onChange={handlerSettingChanges}
            variant="outlined"
          />
        </Grid>

        {isErrorOnSettingBanknotes && (
          <Grid item xs={12}>
            <Typography color="error">{locale.ERROR_ON_SETTING_BANKNOTES}</Typography>
          </Grid>
        )}

        {/*SETTING BUTTONS*/}
        <Grid item xs={3}>
          <Button onClick={onSaveSettings}
                  color="secondary"
                  type="submit">
            {locale.SAVE}
          </Button>
        </Grid>


        {/*  error code*/}

        {/*{errorCode && (
          <Grid item xs={12}>
            <Typography color="error">{errorCode}</Typography>
          </Grid>
        )}*/}
      </Grid>
      {/*getting money*/}
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
    </>
  )
};
