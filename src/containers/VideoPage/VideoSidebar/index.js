import React, { useState } from "react"
import { VideoSidebarItem } from "./VideoSidebarItem"

import { getArrFromCurrentIndex } from "../../../utils/youtube"
import "./videosidebar.scss"

export default function VideoSidebar({ allData, selectedData, title, showMore, horizontalShow }) {
    const classRow = "videosidebar-list" + (horizontalShow ? " row" : "")
    const classContainer = "videosidebar-container" + (horizontalShow ? " horizontal-show" : "")
    const [selectShowMore, setSelectShowMore] = useState(false)
    return (
        <div className={classContainer}>
            <div className="videosidebar-caption">
                <div className="videosidebar-title">
                    <a className="videosidebar-title-link">{title}</a>
                </div>
            </div>
            <div className={classRow}>
                {getArrFromCurrentIndex(allData, selectedData, !selectShowMore ? 5 : 25).slicedArr.length > 0 &&
                    getArrFromCurrentIndex(allData, selectedData, !selectShowMore ? 5 : 25).slicedArr.map((item, index) =>
                        horizontalShow ? (
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 pb-5" key={index}>
                                <VideoSidebarItem recomendedItem={item} />
                            </div>
                        ) : (
                            <VideoSidebarItem recomendedItem={item} key={index} />
                        )
                    )}
            </div>
            {showMore && (
                <div className="videosidebar-btn-container hidden-xs">
                    <button className="videosidebar-loadmore-btn" onClick={() => setSelectShowMore(!selectShowMore)}>
                        {!selectShowMore ? "Show more videos" : "Show less videos"}
                    </button>
                </div>
            )}
        </div>
    )
}
