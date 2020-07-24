import React from 'react';
import {Grid} from "@material-ui/core";
import NotFoundImg from '../404.png';

export default function NotFound() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{minHeight: '80vh'}}>
      <Grid item xs={12}>
        <img alt="Remy Sharp" src={NotFoundImg}/>
      </Grid>
    </Grid>
  )
}
