import React from "react"

import { calcDuration, calcSubTitle } from "../../../../utils/youtube"
import imageUrl from "../../../../assets/imageUrl"

export const VideoSidebarItem = ({ recomendedItem }) => (
    <div className="videosidebar-block">
        <div className="videosidebar-block-video">
            <a className="videosidebar-block-link" target="_blank" href={recomendedItem.url}>
                <img className="videosidebar-block-img" src={recomendedItem.thumbnail} />
                <div className="videosidebar-block-time">{calcDuration(recomendedItem.duration)}</div>
            </a>
        </div>
        <div className="videosidebar-block-info">
            <div className="videosidebar-block-text">
                <a className="videosidebar-block-link" target="_blank" href={recomendedItem.url}>
                    {recomendedItem.channelTitle}
                </a>
            </div>
            <div className="videosidebar-block-review">{`${calcSubTitle(recomendedItem.viewCount)} views`}</div>
            {/* <div className="videosidebar-block-likes">
        <span className="videosidebar-block-likes-circle"></span>
        {likes}
      </div> */}
        </div>
    </div>
)
