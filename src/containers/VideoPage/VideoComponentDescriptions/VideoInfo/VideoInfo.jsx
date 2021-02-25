import React from "react"
import { ProgressBar } from "./ProgressBar.jsx"

export const VideoInfo = ({ data }) => (
    <div className="video-info">
        <ProgressBar progressPercent={80} />
        <div className="video-views-stats">
            <span className="video-views-percent video-views-stats-items">{Math.floor((data.likeCount / data.viewCount) * 100)}%</span>
            <div className="video-views-count"> View: {data.viewCount} </div>
            {/* <a href="#" className="video-views-like video-views-stats-items">
        <span className="video-views-circle" />
        <span>39,852</span>
      </a> */}
            {/* <a href="#" className="video-views-dislike video-views-stats-items">
        <span className="video-views-circle" />
        <span>852</span>
      </a> */}
        </div>
        <div className="subscibed-count">{data.likeCount} Subscribed</div>
    </div>
)
