import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


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

export default function PortfolioCard({header, body, image, link, tags}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}> 
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            {header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {tags && tags.map((tag, i)=> <Chip key={i} size="small" label={tag} />)}
      </CardActions>
    </Card>
  );
}