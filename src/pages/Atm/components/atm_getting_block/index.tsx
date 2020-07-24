import React from 'react';

// material
import {Grid} from '@material-ui/core';

// styles
import {useStyles} from './styles';


export default function AtmGettingBlock() {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item container xs={12} className={classes.item}>
        Getting block
      </Grid>

    </Grid>
  )
}
