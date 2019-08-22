import React from 'react';
import './App.css';
import { Box, Grid, Container, Typography} from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

import NavBar from './Components/Navbar'
import Portfolio from './Components/Portfolio'


function App() {
  const AppBackground = styled(Box)({
    background: 'repeating-linear-gradient(-45deg, #1a1a1a, #1a1a1a 6px, #222 6px, #222 12px)',
    height:'100vh'
  })

  const useStyles = makeStyles(theme => ({
    titleHeader: {
      color: '#ff0080',
      textAlign: 'center',
      margin: '25px',
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
  }))

  const classes = useStyles();

  return (
    <AppBackground>
      <NavBar />
      <Container >
        <Grid container className={classes.titleBox}>
          <Grid item xs={12}>
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

        <Grid container spacing={3} xs={12}>
        </Grid>
      </Container>
    </AppBackground>
  );
}

export default App;
