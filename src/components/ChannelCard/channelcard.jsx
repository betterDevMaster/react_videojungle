import React from "react";
import StarRatings from "react-star-ratings";
import "./channelCard.scss";
import imageUrl from "../../assets/imageUrl";

export default function Channelcard({ data }) {
  return (
    <div id="channelCard">
      <div className="cat-card-main pr-1">
        <img src={require("../../assets/pdfIcon.png")}></img>
        <div className="data px-4">
          <h2 className="name">{data.name}</h2>
          <p className="mb-0 discription">{data.description}</p>
          <div className="flex align-items-center">
            <StarRatings
              starRatedColor="orange"
              rating={data.rating}
              starDimension="13"
              starSpacing="5"
            />
            <span style={{ fontSize: "13px", color: "grey" }}>
              {" "}
              {data.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
