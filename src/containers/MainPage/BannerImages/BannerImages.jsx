import React from "react";
import imageUrl from "./../../../assets/imageUrl";
import "./BannerImages.scss";
import { useHistory } from "react-router-dom";
import { VideoComponent } from "./../../VideoPage/VideoComponent/VideoComponent.jsx";
import { MediaElement } from "./../../../components/MediaElement";
import { useState } from "react";
// import { DefaultPlayer as Video } from 'react-html5video';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, IconButton } from "@material-ui/core"
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const BannerImages = (props) => {
  const forceUpdate = React.useReducer(() => ({}), {})[1];
  const [sources, setsources] = useState([
    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },
  ]);
  const [currentIndex, setCurrent] = useState(0);
  const Allsources = [
    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },
    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },
    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },

    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },
    {
      src:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    },
  ];
  const carouselData = [{
    src: "https://storage.googleapis.com/website-production/uploads/2018/06/banner-ads-digital-marketing.jpg"
  }, {
    src: "https://instapage.com/wp-content/uploads/2018/06/banner-ad-examples-southwest.jpg"
  }, {
    src: "https://storage.googleapis.com/website-production/uploads/2018/06/banner-ads-microsoft-windows.jpg"
  }, {
    src: "https://storage.googleapis.com/website-production/uploads/2018/06/banner-ads-microsoft-windows.jpg"
  }, {
    src: "https://instapage.com/wp-content/uploads/2018/06/banner-ad-examples-southwest.jpg"
  }, {
    src: "https://storage.googleapis.com/website-production/uploads/2018/06/banner-ads-digital-marketing.jpg"
  },]
  const handleSourceChange = (index) => {
    console.log("called", index);
    let currentsource = Allsources[index];
    setsources([currentsource]);
    setCurrent(index);

    forceUpdate();
  };
  const options = {
    alwaysShowControls: false,
    videoVolume: "horizontal",
    features: ["volume"],
    enableKeyboard: true,
    pauseOtherPlayers: true,
    enableAutosize: true,
  };

  return (
    <div id="BannerImages">

      <div className=" banner-images ">
        <div className="banner-image-main">
          <Carousel
            className="carosel-design"
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all 2"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {carouselData.length > 0 && carouselData.map((data, idx) =>
              <Card className="carosel-item" key={idx}>
                <CardActionArea>
                  <CardMedia component="img" alt="Contemplative Reptile" height="150" image={data.src} title="Contemplative Reptile" />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">  Lizard </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica  </Typography>
                  </CardContent> */}
                  {/* <IconButton aria-label="delete" className="notify-icon testest">
                    <NotificationsActiveOutlinedIcon />
                  </IconButton> */}
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary"> Share </Button>
                  <Button size="small" color="primary"> Learn More </Button>
                </CardActions> */}
              </Card>
            )}


          </Carousel>
        </div>
        {/* <div className="banner-image-main">
          <div className="banner-ad-area">          
            <div className="video-add-view">
              <div className="video-component-front">
                <MediaElement
                  id="player4"
                  autoplay={false}
                  muted={currentIndex === 0 ? "true" : "false"}
                  preload="metadata"
                  handleSourceChange={handleSourceChange.bind(this)}
                  mediaType="video"
                  poster="https://html.com/wp-content/uploads/flamingo.webp"
                  sources={sources && sources}
                  options={options}
                  className="video-component-item"
                />
              </div>
            </div>
            <div className="banner-add-view">
              Ad Banner Image
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BannerImages;
