import React, {useState} from 'react';

// formik
import {useFormik} from 'formik';


// material ui
import {Grid, Typography} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


// locale
import {locale} from './locale';

// utils
import {convertObjToString, getMoney, isValidBanknotes} from '../../commons/utils';


const FORMS_NAMES: {
  INPUT_FIELD: string;
  OUTPUT_FIELD: string
} = {
  INPUT_FIELD: 'inputField',
  OUTPUT_FIELD: 'outputField',
};


export default function AtmGettingBlock() {
  const [banknotes, setBanknotes] = useState<string>('');
  const [isUseSettings, setIsUseSettings] = useState<boolean>(true);

  const [isErrorOnSettingBanknotes, setIsErrorOnSettingBanknotes] = useState<boolean>(false);
  const [gettingSum, setGettingSum] = useState<string>('');
  const handlerSettingChanges = (evt: any) => {
    setBanknotes(evt.target?.value);
  };

  const onSaveSettings = () => {
    if (isValidBanknotes(banknotes)) {
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

      if (!isErrorOnSettingBanknotes) {
        const money = getMoney(
          +inputField,
          availableBankotes,
        );
        setGettingSum(convertObjToString(money));
      }
    },
  });

  return (
    <>
      {/*setting money*/}
      <Grid container spacing={3} alignItems="center">

        {/*INPUT FIELD*/}
        <Grid item xs={9}>
          <TextField
            fullWidth
            onChange={handlerSettingChanges}
            placeholder={locale.AVAILABLE_BILLS}
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
      </Grid>

      {/*getting money*/}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} alignItems="center">

          {/*INPUT FIELD*/}
          <Grid item xs={9}>
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

          {isUseSettings && (
            <Grid item xs={12}>
              <Typography color="error">{gettingSum}</Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </>
  )
};
