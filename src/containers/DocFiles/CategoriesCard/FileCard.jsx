import React from "react";
import imageUrl from "../../../assets/imageUrl";
import "./FileCard.scss";
import StarRatings from "react-star-ratings";
export default function FileCard(props) {
  const { data } = props;
  return (
    <div className="cat-card-main pr-5">
      <img src={require("../../../assets/docIcon.png")}></img>
      <div className="data px-1">
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
  );
}
