import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Paper, Grid } from "@material-ui/core";
import { styled, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerBox:{
    paddingTop:'20px',
    marginBottom:'0px',
    paddingBottom:'50px',
    background:'linear-gradient(rgba(26, 26, 26, 1) 60%,rgba(26, 26, 26, 0))',
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
    color: '#999',
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
      '-.5px -.5px 0 #333, 1px 1px 0 #ff005a, 2px 2px 0 #ff0078, 3px 3px 0 #ff0078, 4px 4px 0 #ff0078',
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
    marginTop:'20px',
    minHeight: '500px',
    overflow:'auto'
  },
  routerLink:{
    textDecoration: 'none',
  },
}))

const  Navbar = () => {
  const TopBar = styled(AppBar)({
    background: '#1a1a1a',
  })

  const classes = useStyles();

  return (
    <>
    <TopBar position="static">
    </TopBar>
    <Paper className={classes.headerBox} elevation={0}>
    <Grid container justify="center" spacing={1}>
      <Grid item xs={12} className={classes.titleHeader}>
        <RouterLink to="/" className={classes.routerLink}>
          <Grid item>
            <Typography variant="h2" className={classes.titleHeader}>
              PETER MACKAY
            </Typography>
          </Grid>
        </RouterLink>
          <Grid container direction="row" justify="center" alignItems="center"  spacing={2}>
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
        <Grid item>
          <Button href="https://www.linkedin.com/in/petermackay-2501/" className={classes.linkButton}>
            <Typography variant="h6" className={classes.titleSubHeader}>
              linkedin.com/in/petermackay-2501/
            </Typography> 
          </Button>
        </Grid>
          </Grid>
        </Grid>
    </Grid>
  </Paper>
  </>
  );
}

export default Navbar;