import React from 'react';
import {RouteComponentProps} from 'react-router';

// material
import {Grid} from '@material-ui/core';


// styles
import {useStyles} from './styles';

export default function ATM(props: RouteComponentProps) {
  const classes = useStyles();


  return (
    <Grid container item xs={12}>
      {/*setting block*/}
      <Grid item xs={12} className={classes.item}>
      </Grid>

    </Grid>
  )
}
