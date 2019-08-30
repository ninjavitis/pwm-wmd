import React from 'react';
import { Grid, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'

import DetailCard from '../DetailCard'

const useStyles = makeStyles(theme => ({
  container:{
    maxHeight:'20%',
    overflow:'auto',
  },

}))

const Griswold = () => {
  const classes = useStyles();

  return (
    <>
    <Grid container direction="column" spacing={3}>
    <Grid container item justify="center">
        <DetailCard 
          header="PROCEDURAL ASTEROID GENERATION"
          subheader="Unreal Enginge 4 Blueprint Script"
          videoUrl="https://www.youtube.com/embed/gUhd7KpqakU"
          images={["/images/griswold/SCRIPTING_randomAsteroidSeeder.png","/images/griswold/SCRIPTING_randomAstroids.png","/images/griswold/SCRIPTING_asteroids2.png"]}
          body={["The procedural asteroid generator places objects in the world programmatically in orbit around another body. It takes an object count, Inner Diameter, Outer Diameter and depthMin and depthMax to determine the width and depth of the band in which the asteroids will spawn.  It also takes a degress min and max to control the length of the band and its rotation around the pivot."]}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;


