import React from 'react';
import { Grid, Paper} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'

import DetailCard from './DetailCard'

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
    <Paper className={classes.container}>
    </Paper>
    <Grid container direction="column" spacing={3}>
      <Grid container item justify="center">
        <DetailCard 
          header="VEHICLE SCRIPTING 1"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/SHIP_scripted_functions.png"
          body="These events handle the spawning and connection of vehicle equimpent, changing the vehicle mass (due to cargo loading and equipment changes), switching on and off gear, updating the ship inventory, and cleaning up the mess when the vehicle is destroyed."
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="VEHICLE SCRIPTING 2"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/SHIP_tick_changeAccel.png"
          body="The updateAcceleration function updates the vehicle max acceleration in relation to thrust or mass (cargo loading, equipment selection) changes.  The tick function runs the ship resource system (power, cooling etc) and rotates the ship to the camera forward vector.  This provides ship steering similar to the Halo Warthog, the player need only look where he wants to go and the ship will orient itself as necessary.  Ship resourcing is skipped for ships not controlled by the player until AI ships have been fully implemented."
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="VEHICLE MOTION CONTROLLER"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/SHIP_scripted_motionControl.png"
          body="The vehicle motion controller simulates 3rd order physics (velocity, acceleration and jerk) by passing the ratio of the current velocity to the max velocity into a curve function and multiplying the acceleration by the result. While this closely replicates smooth acceleration transitions afforded by true 3rd order physics it is not suitable for positional control (ie, giving an AI agent a move order to a prescice location).  The controller also simulates auto-braking thrust by appling reactionary force on the forward vector when not receiving acceleration input until velocity is reduced to 0.  This improves control feel and prevents infite drift. "
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="PROCEDURAL ASTEROID GENERATION"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/SCRIPTING_randomAsteroidSeeder.png"
          body="The procedural asteroid generator places objects in the world programmatically in orbit around another body. It takes an object count, Inner Diameter, Outer Diameter and depthMin and depthMax to determine the width and depth of the band in which the asteroids will spawn.  It also takes a degress min and max to control the length of the band and its rotation around the pivot."
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="CUSTOM MATERIAL SHADER"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/SHADER_station.png"
          body="The materials used in Homeworld 2 (from which I borrowed my placeholder assets) are incompatible with Unreal Engine 4, so I wrote my own.  This shader enables physically based rendering, and has a window glow pulse created by combining out of phase sine waves."
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="UI INVENTORY ITEM"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/UI_buy_sell_update.png"
          body="This is a set of scripts for displaying commodities in a market.  The update record script checks the state of the local economy simulation to get the current status of the good represented by this element.  The buy/sell button script dynamically sets the action based on whether the local node produces more goods than it wants to consume.  If the good has a net demand then the button performs a buy action, allowing the player to sell his goods.  If it has a net supply, then players can buy the commodity here."
        />
      </Grid>
      <Grid container item justify="center">
        <DetailCard 
          header="UI BUTTON SCRIPT"
          subheader="Unreal Enginge 4 Blueprint Script"
          image="/images/griswold/UI_quantityButtons.png"
          body="This script controls the behavior of the quantity buttons in the shop.  It validates the quantity by checking the space the player has before incrementing.  This way the player can never add more units to the order than he has inventory space.  "
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;
