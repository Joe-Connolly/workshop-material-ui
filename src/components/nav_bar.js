import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  menu: {
    display: 'flex',
  },
  header: {
    marginRight: 'auto',
  },
};

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.header}>
            Dartmouth CS52 — 19S
          </Typography>
          <div className={classes.menu}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Schedule</Button>
            <Button color="inherit">Assignments</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
