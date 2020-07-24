import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

// material
import {Grid} from '@material-ui/core';

// components
import AtmGettingBlock from './components/atm_getting_block';
import AtmSettingBlock from './components/atm_setting_block';

// styles

import {useStyles} from './styles';


export default function ATM(props: RouteComponentProps) {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item container xs={12} className={classes.item}>
        ATM will be here
        <AtmGettingBlock/>
        <AtmSettingBlock/>
      </Grid>

    </Grid>
  )
}
