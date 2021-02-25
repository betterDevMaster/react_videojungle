import React, { useState } from "react";
import imageUrl from "../../../assets/imageUrl";
import "./categoryCard.scss";
import { Link } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
export default function CategoryCard(props) {
  const { data } = props;

  const [thumbnail, setthumbnail] = useState(null);
  return (
    <div className="card-main-category">
      <div className="card-main-img-container">
        {/* <VideoThumbnail
            videoUrl={`${video?.src}#t=1.0`}
            thumbnailHandler={(thumbnail) => setthumbnail(thumbnail)}
            renderThumbnail={false}
          /> */}
        <img
          className="card-main-img "
          src={require("../../../assets/photo-3.jpg")}
        />
      </div>

      <div className="pt-2 card-main-title">{data.name}</div>

      <div className="pt-2 card-main-title">{data.videos} videos</div>
      <div className="pt-2 card-main-title"> {data.isPopular && "Popular"}</div>
    </div>
  );
}
