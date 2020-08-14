import React from 'react' ;
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// react material
import {
  AppBar,
  Grid,
  Typography
} from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';

// routes
import {routes} from './config';

// pages
import ATM from './Atm';

// not found page
import NotFoundPage from '../404page';

// styles
import {useStyles} from './styles';


export default () => {
  const classes = useStyles();

  // todo... Nick Litvin... must be 404 router
  return (
    <Router basename="/">
      {/*header*/}
      <AppBar position="static">
        <Toolbar>
          <Grid item container>
            <Grid item xs={12}>
              <Typography color="inherit"
                          variant="h6"
                          className={classes.title}>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          {/*routes*/}
          <Switch>
            <Route path={routes.atm.url} component={ATM}/>
            <Route exact path='/' component={ATM}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </Grid>
        <Grid item xs={2}></Grid>

      </Grid>

    </Router>
  );
};
