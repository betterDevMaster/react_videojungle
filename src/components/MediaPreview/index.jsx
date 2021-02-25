import React from "react";
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useState } from "react";
import {makeStyles} from "@material-ui/core/styles/index";
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "#eceff0",
    "& .MuiLinearProgress-bar": {
      borderRadius: 4,
      backgroundColor: "#da0000",
    },
  },
  color: {
    padding: "8px",
    "& .MuiIconButton-label": {
      color: "#2e2e2e",
    },
    "&:hover .MuiIconButton-label": {
      color: "#da0000",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "30px",
    },
  },
  imageCard: {
    maxWidth: 175,
    boxShadow: 'none'
    //margin: '0 auto'
  },
  imageCardArea: {
    width: 175,
    height: 175
  },
  documentCard: {
    maxWidth: 175,
    height: 175,
    boxShadow: 'none'
  },
  documentCardArea: {
    height: '100%',
    textAlign: 'center'
  }
}));

const MediaPreview = (props) => {
  const classes = useStyles();
  let renderedElement = <div></div>;


  switch (props.type){
    case 'video': {
      renderedElement = <Card className={classes.imageCard}>
        <CardActionArea className={classes.imageCardArea}>
          <CardMedia
            component="iframe"
            alt="Uploaded File"
            height="140"
            image="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            title="Uploaded File"
          />
        </CardActionArea>
      </Card>
      break;
    }

    case 'mp3': {
      renderedElement = <Card className={classes.imageCard}>
        <CardActionArea className={classes.imageCardArea}>
          <CardMedia
            component="iframe"
            alt="Uploaded File"
            height="140"
            image="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            title="Uploaded File"
          />
        </CardActionArea>
      </Card>;
      break;
    }

    case 'image': {
      renderedElement = <Card className={classes.imageCard}>
        <CardActionArea className={classes.imageCardArea}>
          <CardMedia
            component="img"
            alt="Uploaded File"
            height="140"
            image={props.src ? props.src : 'https://www.w3schools.com/w3css/img_lights.jpg'}
            title="Uploaded File"
          />
        </CardActionArea>
      </Card>
      break;
    }

    case 'document': {
      renderedElement = <Card className={classes.documentCard}>
        <CardActionArea className={classes.documentCardArea}>

          <iframe src="https://docs.google.com/gview?url=https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc&embedded=true"></iframe>
        </CardActionArea>
      </Card>
      break;
    }

    case 'html': {
      renderedElement = <Card className={classes.documentCard}>
        <CardActionArea className={classes.documentCardArea}>
          <CardMedia
            component="iframe"
            alt="Uploaded File"
            height="140"
            image="http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm"
            title="Uploaded File"
          />
        </CardActionArea>
      </Card>
      break;
    }

    default: {
      renderedElement = <></>
    }
  }


  return (
    <>
      {renderedElement}
    </>
  );
};

export default MediaPreview;
