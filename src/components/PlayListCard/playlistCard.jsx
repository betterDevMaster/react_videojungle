import React, { useState } from "react";
import "./playlistcard.scss";
import VideoThumbnail from "react-video-thumbnail";
import { Link } from "react-router-dom";
export default function PlaylistCard(props) {
  const { data } = props;
  const { videos } = data;
  const [thumbnails, setthumbnails] = useState([]);
  const forceUpdate = React.useReducer(() => ({}), {})[1];
  return (
    <div id="playlistCard">
    <div className="playcard-main ">
      <div className="image">
        {videos?.map((video, index) => {
          return (
            <>
              <VideoThumbnail
                videoUrl={`${video?.src}#t=1.0`}
                thumbnailHandler={(thumbnail) => {
                  let previous = thumbnails;
                  previous.push(thumbnail);
                  setthumbnails(previous);
                  forceUpdate();
                }}
                renderThumbnail={false}
              />
              <img className={`img${index + 1}`} src={thumbnails[index]} />
            </>
          );
        })}
      </div>
      <div className="card-content">
      <div>
        <Link to="/channel" className="card-main-title-avata">
          <img
            style={{
              maxWidth: "35px",
              marginRight: "8px",
              marginTop: "2px",
              float: "Left",
            }}
            className="pl-2 pl-md-0 avatar-block"
            src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/squareAva1.png`}
          ></img>
          <span>{data.title}</span>
        </Link>
      </div>
      <div className="views-section d-flex flex-row align-items-center">
        <span className="ratings">{data.views} views.</span>
        <span className="ratings d-flex flex-row align-items-center pl-1">
          {data.time}
        </span>
        <span className="ratings d-flex flex-row align-items-center pl-1">
          {data.noOfVideos} videos
        </span>
      </div>
    </div>
    </div>
  </div>
  );
}
