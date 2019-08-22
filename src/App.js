import React from 'react';
import './App.css';
import { Box, Grid, Container, Typography, Paper} from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

import NavBar from './Components/Navbar'
import Portfolio from './Components/Portfolio'


function App() {
  const AppBackground = styled(Box)({
    background: 'repeating-linear-gradient(-45deg, #111111, #111111 6px, #1a1a1a 6px, #1a1a1a 12px)',
    height:'100vh'
  })

  const useStyles = makeStyles(theme => ({
    headerBox:{
      marginBottom:'50px'
    },
    titleHeader: {
      color: '#ff0080',
      textAlign: 'center',
      marginTop: '25px',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '900',
      fontStyle: 'italic',
    },
    titleSubHeader:{
      color: '#555555',
      textShadow:
        '-1px -1px 0 #666666, 1px 1px 0 #ff0080',
      textAlign: 'center',
      margin: '5px',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '700',
      fontStyle: 'italic',
      "&:hover":{
        position:'relative',
        top:'-3px',
        left:'-3px',
        textShadow:
        '-1px -1px 0 #777777, 1px 1px 0 #ff0080, 2px 2px 0 #ff0080, 3px 3px 0 #ff0080, 4px 4px 0 #ff0080',
      },
    },
    titleBox: {
      flexGrow: 1,
    },
    summary:{
      background:'#252525', 
      padding: '25px',
    },
    summaryText:{
      color: '#999999',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '400',
      fontStyle: 'normal'
    }
  }))

  const classes = useStyles();

  return (
    <AppBackground>
      <NavBar />
      <Container >
        <Grid container className={classes.headerBox}>
          <Grid item xs={12} className={classes.titleHeader}>
            <Typography variant="h1" className={classes.titleHeader}>
              PETER MACKAY
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" className={classes.titleSubHeader}>
              peter.mackay.1187@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" className={classes.titleSubHeader}>
              github.com/ninjavitis
            </Typography>
          </Grid>
        </Grid>
        <Paper className={classes.summary}>
          <Typography paragraph className={classes.summaryText}>
            I'm a highly motivated and passionate developer with over 7 years of multidisciplinary PC and console game development experience in QA, Project Management and System Design roles. I also have 5+ years of event production and travel logistics experience as well a background in datacenter operations and system admin. Recently graduated from the University of Utah full-stack certificate program with a focus on Javascript, React, Ruby and Rails.
          </Typography>
          <Typography paragraph className={classes.summaryText}>
            In my spare time I develop an agent based economic simulator in c++, a Android mobile clicker game in Unreal Engine 4 and a demo e-commerce platform in React.js. 
          </Typography>
        </Paper>
        <Grid container spacing={3} xs={12}>
        </Grid>
      </Container>
    </AppBackground>
  );
}

export default App;
