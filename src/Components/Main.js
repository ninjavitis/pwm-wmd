import React, {useState,} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid'
import { ListSubheader, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Griswold from './Griswold'

import Introduction from './Griswold/Introduction'
import VehicleSteering from './Griswold/VehicleSteering'
import ResourceSystem from './Griswold/ResourceSystem'
import ProceduralAsteroid from './Griswold/ProceduralAsteroid'
import MarketUI from './Griswold/MarketUI'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },

  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background:'#353535'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background:'#343434',
    color:'#bbb'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  titleText:{
    color: '#ff0078',
    textAlign: 'center',
    marginTop: '0px',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '900',
    fontStyle: 'italic',
  },
  linkIcon:{
    color:'#ccc'
  },
  subItem:{
    paddingLeft:theme.spacing(4)
  },
  subHeader:{
    color:'#ddd'
  },
}));

function Main(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [grisOpen, setGrisOpen] = useState(false)
  const [mainPage, setMainPage] = useState('gris_default')
  const [drawerHeader, setDrawerHeader] = useState()

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const MainDisplay = () => {
    switch (mainPage) {
      case 'gris_intro':
        return <Introduction />

      case 'gris_steering':
        return <VehicleSteering />

        case 'gris_resource':
          return <ResourceSystem />

        case 'gris_asteroid':
          return <ProceduralAsteroid />

        case 'gris_marketUI':
          return <MarketUI />

      default:
        return <Introduction />
    }
  }

  const linkedInIcon = (
    <SvgIcon className={classes.linkIcon}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </SvgIcon>
  )

  const gitHubIcon = (
    <SvgIcon className={classes.linkIcon}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </SvgIcon>
  )

  const drawer = (
    <div>
      <Grid container className={classes.toolbar} justify="center" alignItems="center">
        <Grid item container justify="center">
        <Typography className={classes.titleText}>
            pwm-wmd.com
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav">
        <ListSubheader component="div" className={classes.subHeader}>Projects</ListSubheader>
        <ListItem button onClick={()=>setGrisOpen(!grisOpen)}>
          <ListItemText primary="PROJECT GRISWOLD" />
          {grisOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={grisOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.subItem} onClick={()=>setMainPage('gris_default')}>
              Introduction
            </ListItem>
            <ListItem button className={classes.subItem} onClick={()=>setMainPage('gris_steering')}>
              Vehicle Steering
            </ListItem>
            <ListItem button className={classes.subItem} onClick={()=>setMainPage('gris_resource')}>
              Vehicle Resource System
            </ListItem>
            <ListItem button className={classes.subItem} onClick={()=>setMainPage('gris_asteroid')}>
              Procedural Asteroid Spawner
            </ListItem>
            <ListItem button className={classes.subItem}>
              Dynamic Economy
            </ListItem>
            <ListItem button className={classes.subItem} onClick={()=>setMainPage('gris_marketUI')}>
              UI Scripting
            </ListItem>
            <ListItem button className={classes.subItem} >
              <ListItemIcon>
                {gitHubIcon}
              </ListItemIcon>
              <ListItemText primary="Project Header Files" />
            </ListItem>
          </List>
          <Divider />
        </Collapse>
        <ListItem>
          <ListItemText primary="Star Citizen" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Buy My Bits" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Natural Twenty" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader component="div" className={classes.subHeader}>Contact</ListSubheader>
        <ListItem button component="a" href="mailto:peter.mackay.1187@gmail.com">
          <ListItemIcon>
            <SvgIcon className={classes.linkIcon}>
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary="Email" />
        </ListItem> 
        <ListItem button component="a" href="https://www.linkedin.com/in/petermackay-2501/">
          <ListItemIcon>
            {linkedInIcon}
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItem>
        <ListItem button component="a" href="http://github.com/ninjavitis">
          <ListItemIcon>
            {gitHubIcon}
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Peter Mackay 2019
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainDisplay />
      </main>
    </div>
  );
}

export default Main