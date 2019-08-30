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
          header="UI BUTTON SCRIPT"
          subheader="Unreal Enginge 4 Blueprint Script"
          videoUrl="https://www.youtube.com/embed/AR_oTIKfIIE"
          images={["/images/griswold/UI_quantityButtons.png","/images/griswold/UI_buy_sell_update.png"]}
          body={["These scripts controls the behavior of the quantity buttons in the shop, and handle what happens after a purchase is made.  The player can increment or decrement the quantity, set the quantity to max, or 0.  Quanitity incrementing is validated by checking the players available cargo space.  This way the player can never add more units to the order than he can carry.","On purchase, funds are deducted from the wallet and the goods are added to the inventory. "]}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;