import React from 'react';
import {RouteComponentProps} from 'react-router';
import Divider from '@material-ui/core/Divider';

// material
import {Grid} from '@material-ui/core';

// components
import AtmGettingBlock from './components/atm_getting_block';
import AtmSettingBlock from './components/atm_setting_block';

// types
import {
  ComponentProps as AtmGettingProps,
  FormData as FormGettingData
} from './components/atm_getting_block/types';
import {
  ComponentProps as AtmSettingProps,
  FormData as FormSettingData
} from './components/atm_setting_block/types';

// styles
import {useStyles} from './styles';

export default function ATM(props: RouteComponentProps) {
  const classes = useStyles();

  const atbGettingProps: AtmGettingProps = {
    onSubmit: function (data: FormGettingData) {
      console.log('ATM getting ', data);
      return Promise.resolve() as Promise<any>;
    },
    errorCode: ''
  };

  const atbSettingProps: AtmSettingProps = {
    onSubmit: function (data: FormSettingData) {
      console.log('ATM setting ', data);
      return Promise.resolve() as Promise<any>;
    },
    errorCode: ''
  };

  return (
    <Grid container item xs={12}>
      <Grid item container xs={12} className={classes.item}>
        ATM will be here
        <AtmGettingBlock {...atbGettingProps}/>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
        <Divider/>
        <AtmSettingBlock {...atbSettingProps}/>
      </Grid>

    </Grid>
  )
}
