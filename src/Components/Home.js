import React from 'react';
import { Grid, Typography, Paper, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import PortfolioCard from './PortfolioCard'

const useStyles = makeStyles(theme => ({
  headerBox:{
    marginBottom:'0px',
    paddingBottom:'50px',
    background:'linear-gradient(rgba(26, 26, 26, 1) 60%,rgba(26, 26, 26, 0))',
  },
  titleHeader: {
    color: '#ff0078',
    textAlign: 'center',
    marginTop: '0px',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '900',
    fontStyle: 'italic',
  },
  titleSubHeader:{
    color: '#999',
    textAlign: 'center',
    margin: '0px',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '700',
    fontStyle: 'italic',
    "&:hover":{
      position:'relative',
      top:'-3px',
      left:'-3px',
      textShadow:
      '-.5px -.5px 0 #333, 1px 1px 0 #ff005a, 2px 2px 0 #ff0078, 3px 3px 0 #ff0078, 4px 4px 0 #ff0078',
    },
  },
  linkButton:{
    textTransform: 'none'
  },
  titleBox: {
    flexGrow: 1,
  },
  mainPaper:{
    background:'#252525', 
    padding: '25px',
    marginLeft: '0%',
    marginRight: '0%',
    minHeight: '500px',
    overflow:'auto'
  },
  summaryPaper:{
    background:'#333',
    paddingTop:'20px',
    paddingBottom:'20px',
    paddingLeft:'25px',
    paddingRight:'25px',
    marginBottom:'25px',
  },
  summaryText:{
    color: '#999',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '700',
    fontStyle: 'normal'
  }
}))

const Home = ()=>{
  const classes = useStyles();

  return(
      <Paper className={classes.mainPaper}>
      <Grid container direction="column">
        <Grid item>
        <Paper className={classes.summaryPaper} elevation={24}>
          <Typography className={classes.summaryText}>
            Welcome to my portfolio site.  Below I've listed some projects I've worked on, click each one for work examples.  Project Griswold is currently available, the other sections are on the way!
          </Typography>
        </Paper>
        </Grid>
        <Grid container spacing={3} justify='center'>
          <Grid item>
            <PortfolioCard 
              image={'/images/griswold/griswold.png'}
              link="/griswold"
              header={'Project Griswold'}
              body={
                'Project Griswold is a c++ and Unreal Engine 4 sandbox to explore agent-based economics, UI scripting and shader authoring.  Based on concepts I designed and developed for Star Citizen and using assets from the Relic classic Homeworld 2.'
              }
              tags={['c++', 'UE4', 'Blueprint']}
            />
          </Grid>
          <Grid item>
            <PortfolioCard 
              image={'/images/star_citizen/starCitizen.jpg'} 
              header={'Star Citizen'}
              body={
                'In development since 2012, Star Citizen aims to be the premier space combat simulation.  From 2012 - 2018 I designed and developed most of the core vehicle item and resource systems, flight control accessibility systems and the item pricing and economy systems.'
              }
              tags={['CryEngine', 'Excel+VBA', 'Illustrator', 'Atlassian']}
            />
          </Grid>
          <Grid item>
            <PortfolioCard
              image={'/images/buyMyBits/buyMyBits.png'} 
              header={'Buy My Bits'}
              body={
                'Buy My Bits is a front-end JS + React e-commerce experiment that features internal + external product sets accessible through a custom API toggle, a cart with full quantity control as well as full Stripe payment processing functionality.'
              }
              tags={['JS', 'React', 'Rails', 'SQL','Stripe']}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home;