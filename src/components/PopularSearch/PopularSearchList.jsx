import React from "react";
import "./PopularSeachList.scss";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Link, NavLink } from "react-router-dom";

const PopularSearchList = () => {
  const List = [
    "COVID-19",
    "Nature",
    "Wallpapers",
    "Texures & Patterns",
    "People & Business Work",
    "Technology",
    "Architecture",
    "Food & Drinks",
    "Current Events",
    "Athletics",
  ];
  return (
    <div id="PopularSeachList">
      <div className="search-list-main ">
        <div className="list-data d-flex py-4">
          {List.map((item, i) => {
            return <div className="item" key={i}>{item}</div>;
          })}
          <div className="item">
            <div className="upload-button">
              <Link style={{ color: "white" }}  to="/upload" >
                <VideocamIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularSearchList;
