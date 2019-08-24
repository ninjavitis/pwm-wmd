import React from 'react';
import './App.css';
import { Box, Grid, Container, Typography, Paper, Button} from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

import NavBar from './Components/Navbar'
import PortfolioCard from './Components/PortfolioCard'


function App() {
  const AppBackground = styled(Box)({
    background: 'repeating-linear-gradient(-45deg, #111111, #111111 6px, #1a1a1a 6px, #1a1a1a 12px)',
    minHeight:'100vh',
    backgroundSize: 'cover'
  })
  
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var viewPortWidthRatio = (w - 360) / (500 - 360)
  console.log(w)
  console.log(viewPortWidthRatio)

  const useStyles = makeStyles(theme => ({
    headerBox:{
      marginBottom:'25px',
      padding: '0px',
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
    mainPaper:{
      background:'#252525', 
      padding: '25px',
      marginLeft: '0%',
      marginRight: '0%',
      minHeight: '500px',
      overflow:'auto'
    },
    summaryPaper:{
      background:'#353535',
      paddingTop:'20px',
      paddingBottom:'20px',
      paddingLeft:'25px',
      paddingRight:'25px',
      marginBottom:'25px',

    },
    summaryText:{
      color: '#999',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '700',
      fontStyle: 'normal'
    }
  }))

  const classes = useStyles();

  const main = (
    <Paper className={classes.mainPaper}>
    <Grid container direction="column">
      <Grid item>
      <Paper className={classes.summaryPaper}>
        <Typography className={classes.summaryText}>
          I'm a highly motivated and passionate developer with over 7 years of PC and console game development experience in QA, Project Management and System Design roles. I also have 5+ years of event production and travel logistics experience as well a background in datacenter operations and system admin. Recently graduated from the University of Utah full-stack development program with a focus on Javascript, React, Ruby and Rails.
        </Typography>
      </Paper>
      </Grid>
      <Grid container spacing={3} justify='center'>
        <Grid item>
          <PortfolioCard
            image={'/images/griswold/griswold.png'}
            header={'Project Griswold'}
            body={
              'Project Griswold is a c++ and Unreal Engine 4 sandbox to explore agent-based economics, UI scripting and shader authoring.  Based on concepts I designed and developed for Star Citizen and using assets from the Relic classic Homeworld 2.'
            }
            tags={['c++', 'UE4', 'Blueprint']}
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            image={'/images/star_citizen/starCitizen.jpg'} 
            header={'Star Citizen'}
            body={
              'Star Citizen aims to be the premier space combat simulation on any platform.  From 2012 - 2018 I designed and developed most of the core vehicle item and resource systems, flight control accessibility systems and the item pricing and economy systems.'
            }
            tags={['CryEngine', 'Excel+VBA', 'Illustrator', 'Atlassian']}
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            image={'/images/buyMyBits/buyMyBits.png'} 
            header={'Buy My Bits'}
            body={
              'Buy My Bits is a front-end JS + React e-commerce experiment that features internal + external product sets accessible through a custom API toggle, a cart with full quantity control as well as full Stripe payment processing functionality.'
            }
            tags={['JS', 'React', 'Rails', 'SQL','Stripe']}
          />
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  )

  return (
    <AppBackground>
      <NavBar />
      <Paper className={classes.headerBox} elevation={0}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} className={classes.titleHeader}>
              <Grid item>
                <Typography variant="h2" className={classes.titleHeader}>
                  PETER MACKAY
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <Button href="mailto:peter.mackay.1187@gmail.com" className={classes.linkButton}>
                    <Typography variant="h6" className={classes.titleSubHeader}>
                      peter.mackay.1187@gmail.com
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="http://github.com/ninjavitis" className={classes.linkButton}>
                    <Typography variant="h6" className={classes.titleSubHeader}>
                      github.com/ninjavitis
                    </Typography> 
                  </Button>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Paper>
      <Container>
        {main}
      </Container>
    </AppBackground>
  );
}

export default App;
