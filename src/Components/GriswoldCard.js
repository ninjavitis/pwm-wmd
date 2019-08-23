import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background:'#333'
  },
  cardTitle:{
    color: '#d0ff00',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '900',
      fontStyle: 'italic',
  },
  cardText:{
    color: '#aaa',
      fontFamily: "objektiv-mk1, sans-serif",
      fontWeight: '400',
  },
  linkButton:{
    color: '#3700ff',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '700',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Project Griswold"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            Project Griswold
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
           Project Griswold is an Unreal Engine 4 sandbox to explore agent-based economics, UI scripting and shader authoring.  Based on concepts I designed and developed for Star Citizen and using assets from Relic classic 'Homeworld 2'.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.linkButton}>
          Source
        </Button>
        <Button size="small" color="primary" className={classes.linkButton}>
          Executable
        </Button>
      </CardActions>
    </Card>
  );
}