import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Modal from '@material-ui/core/Modal';
import { setState } from 'expect/build/jestMatchersObject';



const useStyles = makeStyles({
  card: {
    transitionDuration: '0.3s',
    background:'#333',
    maxWidth: '90%'
  },
  cardTitle:{
    color: '#d0ff00',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '900',
  },
  cardText:{
    color: '#aaa',
    fontFamily: "objektiv-mk1, sans-serif",
    fontWeight: '400',
  },
  cardTextArea:{
    minWidth: '100%',
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
  shuttleButton:{
    color: '#ff0078',
  },
  paper: {
    position: 'absolute',
    backgroundColor: '#555',
    border: '2px solid #333',
    padding: '10px', 
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  },
  image: {
    width:'90vw',
  },
  button:{
    background:'#ffdf0f'
  }
});


const DetailCard = ({image, images, videoUrl,header, subheader, body}) => {
  const [slide, setSlide] = useState(0)
  const classes = useStyles();
  const [showVideo, setShowVideo] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const VideoModal = () => {
    return(
      <Modal open={showVideo} onClose={()=>setShowVideo(false)}>
        <div className={classes.paper}>
          <iframe 
            title='test'
            width="560" 
            height="315" 
            src={videoUrl} 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          />
        </div>
      </Modal>
    )
  }

  const ImageModal = ({image}) => {
    return(
      <Modal open={showImage} onClose={()=>setShowImage(false)}>
        <div className={classes.paper}>
          <img src={image} alt='' className={classes.image}/>
        </div>
      </Modal>
    )
  }
  
  // changes the slide left or right.  if at either end of the image list wrap to the other end.
  const changeSlide = (direction) =>{
    if (direction === 'fwd'){
      if (slide === images.length -1){
        setSlide(0)
      } else {
        setSlide(slide + 1)
      }
    } else if (direction === 'back'){
      if (slide === 0){
        setSlide(images.length -1)
      } else {
        setSlide(slide - 1)
      }
    }
  }

  const shuttleButtons = (
    <ButtonGroup size="small">
      <IconButton onClick={()=>changeSlide('back')} className={classes.shuttleButton}>
        <NavigateBeforeIcon/>
      </IconButton>
      <IconButton onClick={()=>changeSlide('fwd')} className={classes.shuttleButton}>
        <NavigateNextIcon/>
      </IconButton>
    </ButtonGroup>
  )

  return (
    <Card className={classes.card}>
        <CardActionArea onClick={()=>setShowImage(true)}>
          <CardHeader
            className={classes.cardTitle}
            title={header}
          />
          <CardMedia
            className={classes.media}
            image={images[slide]}
            title={header}
          />
        </CardActionArea>
        <CardActions disableSpacing>
          {videoUrl !=="" && <Button onClick={()=>setShowVideo(true)} className={classes.button}>Video</Button>}
        {images.length > 1 && shuttleButtons}
        <VideoModal />
        <ImageModal image={images[slide]}/>
        </CardActions>
          <CardContent className={classes.cardTextArea}>
          <Typography className={classes.cardText}>
              {body}
            </Typography>
          </CardContent>
    </Card>
  );
}

export default DetailCard;