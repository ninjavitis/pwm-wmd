import React from 'react';
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { styled } from '@material-ui/styles';


const  Navbar = () => {
  const TopBar = styled(AppBar)({
    background: '#1a1a1a',
  })

  return (
    <TopBar position="static">
      <Toolbar>

      </Toolbar>
    </TopBar>
  );
}

export default Navbar;