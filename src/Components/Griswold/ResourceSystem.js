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
          images={["/images/griswold/SCRIPTING_resourceManagement.png"]}
          videoUrl="https://www.youtube.com/embed/YXxtB8JQDI0"
          body={[
            "The vehicle resource system is based around the idea that gear does work inefficiently.  Every piece of gear has a work attribute and an efficiency attribute.  The work attribute differs from item class to item class.  For instance, the work unit of a weapon is damage and the work unit for a shield generator is shielding.  The efficiency rating determines how much power is required per unit of work as well as how much waste heat is generated.", 
            "Power is routed through a power manager that evaluates all incoming requests and fulfils them as best as it is able.  This can result in power shortages if the power supply is undersized, or if some external event has impacted powergeneration.",
            "The resource system is implemented entirely in C++, but uses blueprint to connect the devices to the ship, and to the individual resource managers.  The Project Headers link to the left contains the .h file for the power manager, and the full source can be reviewed upon request."
          ]}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default Griswold;
