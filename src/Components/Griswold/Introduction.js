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

const Griswold = () => {
  const classes = useStyles();

  return (
      <Grid container justify="center">
        <Grid item container justify="center">
            <img src="/images/griswold/griswold.png" alt="Project Griswold" className={classes.image}/>
        </Grid>
        <Grid item container justify="center">
        <Paper className={classes.foregroundPaper}>
        <Typography paragraph>
          Project Griswold is a testbed + sandbox for an agent based economy simulation I have written in c++ for Unreal Engine 4.  All the code is authored by me and uses no UE4 starter project or example code or scripts.
        </Typography>
        <Typography paragraph>
          Each of the pages in this section discuss an individual feature of the project with script screenshots and video showing the feature in action.  Finally, you can view a selection of header files by following the github link to the left.            I'm happy to showcase the full project source in person, and a packaged executable is available upon request.  
        </Typography>
        <Typography>
          Some art is from the Relic classic 'Homeworld 2' and is copyright Gearbox Software.  Used with permission.
        </Typography>
      </Paper>
        </Grid>
      </Grid>
  );
}

export default Griswold;
