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
          header="Resource System"
          subheader="Unreal Enginge 4 Blueprint Script"
          images={["/images/griswold/SHIP_scripted_functions.png"]}
          videoUrl="https://www.youtube.com/embed/YXxtB8JQDI0"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;
