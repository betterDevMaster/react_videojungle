import React from "react"
import { VideoPlayListItem } from "./VideoPlayListItem"

import { getArrFromCurrentIndex } from "../../../utils/youtube"
import "./videoplaylist.scss"

export const VideoPlayList = ({ allData, selectedData }) => (
    <div className="playlist-container">
        <div className="playlist-caption">
            <div className="playlist-title">
                <a className="playlist-title-link">Single line text only</a>
            </div>
            {/* <div className="playlist-icon-container">
        <a className="playlist-btn like-btn">
          <i className="cv cvicon-cv-liked" />
        </a>
        <a className="playlist-btn add-btn">
          <i className="cv cvicon-cv-plus" />
        </a>
      </div> */}
        </div>
        <div className="playlist-list">
            {getArrFromCurrentIndex(allData, selectedData, 2).slicedArr.length > 0
                ? getArrFromCurrentIndex(allData, selectedData, 2).slicedArr.map((item, index) => (
                      <VideoPlayListItem
                          playItem={item}
                          key={index}
                          currentKey={index}
                          mainKey={item.title === selectedData.title ? index : 100}
                      />
                  ))
                : "None"}
        </div>
    </div>
)
