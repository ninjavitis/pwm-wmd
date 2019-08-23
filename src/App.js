import React from 'react';
import './App.css';
import { Box, Grid, Container, Typography, Paper, Button} from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

import NavBar from './Components/Navbar'
import GriswoldCard from './Components/GriswoldCard'


function App() {
  const AppBackground = styled(Box)({
    background: 'repeating-linear-gradient(-45deg, #111111, #111111 6px, #1a1a1a 6px, #1a1a1a 12px)',
    height:'100%'
  })

  const useStyles = makeStyles(theme => ({
    headerBox:{
      height: '200px',
      marginBottom:'0px',
      padding: '25px',
      background:'linear-gradient(rgba(26, 26, 26, 1) 50%,rgba(26, 26, 26, 0))',
    },
    titleHeader: {
      color: '#ff0078',
      textAlign: 'center',
      marginTop: '0px',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '900',
      fontStyle: 'italic',
    },
    titleSubHeader:{
      color: '#555',
      textShadow:
        '0px 0px 0 #666666, 1px 1px 0 #ff0078',
      textAlign: 'center',
      margin: '0px',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '700',
      fontStyle: 'italic',
      "&:hover":{
        position:'relative',
        top:'-3px',
        left:'-3px',
        textShadow:
        '0px 0px 0 #777777, 1px 1px 0 #ff005a, 2px 2px 0 #ff0078, 3px 3px 0 #ff0078, 4px 4px 0 #ff0078',
      },
    },
    linkButton:{
      textTransform: 'none'
    },
    titleBox: {
      flexGrow: 1,
    },
    summary:{
      background:'#252525', 
      padding: '25px',
      marginLeft: '0%',
      marginRight: '0%',
      minHeight: '500px',
    },
    summaryContainer:{
      overflow: 'auto'
    },
    summaryText:{
      color: '#999',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '700',
      fontStyle: 'normal'
    }
  }))

  const classes = useStyles();

  return (
    <AppBackground>
      <NavBar />
      <Paper className={classes.headerBox} elevation={0}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} className={classes.titleHeader}>
              <Grid item>
                <Typography variant="h1" className={classes.titleHeader}>
                  PETER MACKAY
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <Button href="mailto:peter.mackay.1187@gmail.com" className={classes.linkButton}>
                    <Typography variant="h5" className={classes.titleSubHeader}>
                      peter.mackay.1187@gmail.com
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="http://github.com/ninjavitis" className={classes.linkButton}>
                    <Typography variant="h5" className={classes.titleSubHeader}>
                      github.com/ninjavitis
                    </Typography> 
                  </Button>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Paper>
      <Container>
        <Paper className={classes.summary} style={{overflow:'auto'}}>
          <Typography paragraph className={classes.summaryText}>
            I'm a highly motivated and passionate developer with over 7 years of PC and console game development experience in QA (Starhawk, Sony Santa Monica), Project Management (Starhawk, Sony Santa Monica) and System Design (Star Citizen, Cloud Imperium Games) roles. I also have 5+ years of event production and travel logistics experience as well a background in datacenter operations and system admin. Recently graduated from the University of Utah full-stack development program with a focus on Javascript, React, Ruby and Rails.
          </Typography>
          <Typography paragraph className={classes.summaryText}>
            In my spare time I develop an agent based economic simulator in c++, a Android mobile clicker game in Unreal Engine 4 and a demo e-commerce platform in React.js. 
          </Typography>
          <Grid container spacing={3} justify='center'>
            <Grid item>
              <GriswoldCard />
            </Grid>
            <Grid item>
              <GriswoldCard />
            </Grid>
            <Grid item>
              <GriswoldCard />
            </Grid>
            <Grid item>
              <GriswoldCard />
            </Grid>
            <Grid item>
              <GriswoldCard />
            </Grid>
            <Grid item>
              <GriswoldCard />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </AppBackground>
  );
}

export default App;
