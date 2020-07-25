import React from 'react';
import {RouteComponentProps} from 'react-router';

// material
import {Grid} from '@material-ui/core';

// components
import AtmGettingBlock from './components/atm_getting_block';

// types
import {FormProps, FormData} from './components/atm_getting_block/types';

// styles
import {useStyles} from './styles';

export default function ATM(props: RouteComponentProps) {
  const classes = useStyles();

  const atbGettingForm: FormProps = {
    onSubmit: function (data: FormData) {
      console.log('ATM component ', data);
      return Promise.resolve() as Promise<any>;
    },
    errorCode: ''
  };

  return (
    <Grid container item xs={12}>
      <Grid item container xs={12} className={classes.item}>
        ATM will be here
        <AtmGettingBlock {...atbGettingForm}/>
      </Grid>

    </Grid>
  )
}
