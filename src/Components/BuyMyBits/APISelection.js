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


const APISelection = () => {
  return (
    <>
      <Grid container direction="column" spacing={3}>
        <Grid container item justify="center">
          <DetailCard 
            header="API Selection"
            subheader=""
            videoUrl=""
            images={[
              "/images/buyMyBits/BuyMyBits_External.png",
              "/images/buyMyBits/BuyMyBits_API_selection.png",
              "/images/buyMyBits/BuyMyBits_Internal.png"
            ]}
            body={["In order to overcome the the tendency of fake seeded data to be uninteresting I've implemented a dual API system.  The external API gives a better demo of what the site would look like with live products using a public Fortnite API, while the internal api uses fake item data served locally from Rails+Postgres"]}
          />
        </Grid>
      </Grid>`
    </>
  );
}

export default APISelection;