import React from 'react';
import { Grid, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  backgroundPaper:{
    background:'#333',
    width:'100%',
  },
  foregroundPaper:{
    width:'100%',
    padding:'10px',
    background:'#333',
    color:'#aaa'
  },
  image:{
    width:'100%',
  }
}))

export const Introduction = () => {
  const classes = useStyles();

  return (
      <Grid container justify="center">
        <Grid item container justify="center">
            <img src="/images/buyMyBits/BuyMyBits_External.png" alt="Buy My Bits" className={classes.image}/>
        </Grid>
        <Grid item container justify="center">
        <Paper className={classes.foregroundPaper}>
        <Typography paragraph>
          Buy My Bits is an experimental shopping cart system built (almost) entirely in React and using the Semantic UI framework.
        </Typography>
        <Typography paragraph>
          Each of the pages in this section discuss an individual feature of the project with script screenshots.
        </Typography>
        <Typography>
          You can visit the site or view the project source by clicking on the links to the left.  Heroku may be slow to load the page initially.
        </Typography>
      </Paper>
        </Grid>
      </Grid>
  );
}

export default Introduction;
