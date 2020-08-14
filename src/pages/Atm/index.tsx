import React from 'react';
import {RouteComponentProps} from 'react-router';

// material
import {Grid} from '@material-ui/core';

// components
import Control from './components/control';
import Screens from './components/screens';


// styles
import {useStyles} from './styles';

export default function ATM(props: RouteComponentProps) {
  const classes = useStyles();


  return (
    <Grid container item xs={12}>
      {/*left controls*/}
      <Grid item xs={1}>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
      </Grid>


      {/*screens*/}
      <Grid item xs={10} className={classes.rowPadding}>1</Grid>

      {/*right controls*/}
      <Grid item xs={1}>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
        <Grid container item xs={12} className={classes.rowPadding}><Control></Control></Grid>
      </Grid>
    </Grid>
  )
}
