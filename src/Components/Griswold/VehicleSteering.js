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
          header="VEHICLE MOTION CONTROLLER"
          subheader="Unreal Enginge 4 Blueprint Script"
          images={["/images/griswold/SHIP_scripted_motionControl.png"]}
          videoUrl="https://www.youtube.com/embed/lgkiJCyCoLI"
          body="The vehicle motion controller simulates 3rd order physics (velocity, acceleration and jerk) by passing the ratio of the current velocity to the max velocity into a curve function and multiplying the acceleration by the result. While this closely replicates smooth acceleration transitions afforded by true 3rd order physics it is not suitable for positional control (ie, giving an AI agent a move order to a prescice location).  The controller also simulates auto-braking thrust by appling reactionary force on the forward vector when not receiving acceleration input until velocity is reduced to 0.  This improves control feel and prevents infite drift. "
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="VEHICLE STEERING"
          subheader="Unreal Enginge 4 Blueprint Script"
          images={["/images/griswold/SCRIPTING_VehicleRotation.png"]}
          videoUrl="https://www.youtube.com/embed/2n9ZLhzwNRY"
          body="The vehicle motion controller simulates 3rd order physics (velocity, acceleration and jerk) by passing the ratio of the current velocity to the max velocity into a curve function and multiplying the acceleration by the result. While this closely replicates smooth acceleration transitions afforded by true 3rd order physics it is not suitable for positional control (ie, giving an AI agent a move order to a prescice location).  The controller also simulates auto-braking thrust by appling reactionary force on the forward vector when not receiving acceleration input until velocity is reduced to 0.  This improves control feel and prevents infite drift. "
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;