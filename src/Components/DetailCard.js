import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const imageRatio = 0.5625
const imageWidth = 85

const useStyles = makeStyles({
  card: {
    transitionDuration: '0.3s',
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
    width: `${imageWidth}vw`,
    height: `calc(${imageWidth}vw * ${imageRatio})`,
  },
});


const DetailCard = ({image, header, subheader, body}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardHeader
          className={classes.cardTitle}
          title={header}
        />
        <CardMedia
            className={classes.media}
            image={image}
            title={header}
        />
      <CardContent>
      <Typography className={classes.cardText}>
          {body}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DetailCard;