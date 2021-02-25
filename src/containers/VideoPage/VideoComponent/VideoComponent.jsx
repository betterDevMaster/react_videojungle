import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import ReactPlayer from "react-player";
import { MediaElement } from "../../../components/MediaElement";
import "./videocomponent.scss";

const options = {
  alwaysShowControls: false,
  videoVolume: "horizontal",
  features: [
    "playpause",
    "progress",
    "current",
    "duration",
    "tracks",
    "volume",
    "fullscreen",
  ],
  enableKeyboard: true,
  pauseOtherPlayers: true,
  enableAutosize: true,
};

// const sources = [
//   {
//     src:
//       "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
//   },
// ];
  
export const VideoComponent = ({onVideoPlayedOnPercentages,youtubeurl}) => {
  return (
   
    
     <div className="video-component">
       {/* <MediaElement
         id="player4"
         mediaType="video"
         preload="none"
         controls
        poster="https://html.com/wp-content/uploads/flamingo.webp"
         sources={[
           {
             src:
             "https://www.youtube.com/watch?v=3P6Q0GiolsE",
             type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
          },
         ]}
         options={options}
         onVideoPlayedOnPercentages={onVideoPlayedOnPercentages}
         className="video-component-item"
       /> */}
      
        <ReactPlayer 
        url="https://youtu.be/DTfv8y05fj8"
        controls
        playbackRate={2}
        options={options}
        onVideoPlayedOnPercentages={onVideoPlayedOnPercentages}
        className="video-component-item"
        />
          
     </div>
  );
};
