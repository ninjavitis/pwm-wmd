import React,{useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import { Box, Grid, Container, Typography, Paper, Button} from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

import NavBar from './Components/Navbar'
import Home from './Components/Home'
import Griswold from './Components/Griswold'



function App() {
  const AppBackground = styled(Box)({
    background: 'repeating-linear-gradient(-45deg, #111111, #111111 6px, #1a1a1a 6px, #1a1a1a 12px)',
    minHeight:'100vh',
    backgroundSize: '100%'
  })

  return (
    <AppBackground>
      <NavBar />
      <Container justify="center">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/griswold' component={Griswold} />
        </Switch>
      </Container>
    </AppBackground>
  );
}

export default App;
