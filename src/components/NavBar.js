import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Button color="secondary" component={Link} to="/">
          Register
        </Button>
        <Button color="secondary" component={Link} to="/info">
          Volunteer
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
