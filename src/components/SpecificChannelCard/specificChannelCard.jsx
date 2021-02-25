import React from "react";
import "./specificChannelCard.scss";
import imageUrl from "../../assets/imageUrl";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
export default function SpecificChannelCard(props) {
  const { data } = props;

  return (
    <div className="specific-channel-card">
      <div className="channel-img">
        <img src={`${imageUrl}/video2-1.png`}></img>
      </div>
      <div className="user-img d-flex flex-row justify-content-center">
        <div className="user-avatar-container">
          <img
            id="enlarge"
            src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/avatar3.png`}
            className="avatar-img"
          />
        </div>
      </div>
      <div className="information p-3">
        <span className="title d-flex flex-row justify-content-center">
          <h2 className="mb-1 mr-1">{data.title}</h2>
        </span>

        <p className="mb-1">{data.videos} Videos</p>
        <p className="mb-1">{data.files} Files</p>
        <p className="mb-1">{data.views.toLocaleString()} Views</p>
      </div>
    </div>
  );
}
