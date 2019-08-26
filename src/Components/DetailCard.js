import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const imageRatio = 0.5625
const imageWidth = 85

const useStyles = makeStyles({
  card: {
    transitionDuration: '0.3s',
    background:'#333',
    maxWidth: '80%'
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
    "&:hover": {
      backgroundColor: "transparent"
    },
  },
  routerLink:{
    textDecoration: 'none',
    "&:hover":{
      backgroundColor: 'transparent',
    },
  },
  media: {
    width: '100%',
    paddingTop: '56.25%'
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