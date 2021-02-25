import React from "react"

import { calcDuration } from "../../../../utils/youtube"
import imageUrl from "../../../../assets/imageUrl"

export const VideoPlayListItem = ({ playItem, currentKey, mainKey }) => (
    <a href={playItem.url} target="_blank" className="playlist-block">
        <div className="playlist-block-number">
            {currentKey === mainKey ? <i className="cv cvicon-cv-play playlist-icon-play"></i> : currentKey + 1}
        </div>
        <div className="playlist-block-video">
            <img className="playlist-block-img" src={playItem.thumbnail} />
            <div className="playlist-block-time">{calcDuration(playItem.duration)}</div>
        </div>
        <div className="playlist-block-info">
            <div className="playlist-block-text">{playItem.channelTitle}</div>
            {/* <div className="playlist-block-review">{`${views} views`}</div> */}
        </div>
    </a>
)
