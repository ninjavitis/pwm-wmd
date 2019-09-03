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


const CartControls = () => {
  return (
    <>
      <Grid container direction="column" spacing={3}>
        <Grid container item justify="center">
          <DetailCard 
            header="Cart Controls"
            subheader=""
            videoUrl=""
            images={["/images/buyMyBits/BuyMyBits_Cart.png"]}
            body={["The Cart has standard controls: increment/decrement quantity, and remove item from cart.  These buttons are part of the cart item component and set the cart state via the cart context provider"]}
          />
        </Grid>
      </Grid>`
    </>
  );
}

export default CartControls;