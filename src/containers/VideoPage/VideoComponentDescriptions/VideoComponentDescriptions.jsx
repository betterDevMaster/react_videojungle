import React from "react"
import { ChanelDescription } from "./ChanelDescription"
import { VideoInfo } from "./VideoInfo"
import { SubscribeButtonMobile } from "../../../components/UIComponents/SubscribeButtonMobile"
import { VideoContentDescription } from "./VideoContentDescription"
import { VideoContentShare } from "./VideoContentShare"
import { VideoContentTabs } from "./VideoContentTabs"

import "./videocomponentdescriptions.scss"

export const VideoComponentDescriptions = ({ data, dataContentDescription, showTabs, totalPlayed }) => {
    return (
        <div className="video-descriptions">
            <div className="video-title">{data.title}</div>
            <div className="video-acide-panel video-acide-panel-top">
                <a href="#" className="acide-tab">
                    <i className="cv cvicon-cv-watch-later" />
                </a>
                <a href="#" className="acide-tab">
                    <i className="cv cvicon-cv-liked" />
                </a>
                <a href="#" className="acide-tab">
                    <i className="cv cvicon-cv-flag" />
                </a>
            </div>
            <div className="author">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <ChanelDescription subscriptionCount={data.likeCount} />
                    <SubscribeButtonMobile buttonSize={52} fontSize={22} classProps="visible-only-xs" />
                </div>
                <div className="author-border" />
                <VideoInfo data={data} />
            </div>

            {showTabs && <VideoContentTabs />}

            <div className="video-descriptions-tab-content">
                <VideoContentDescription data={data} dataContentDescription={dataContentDescription} />
                {showTabs && <VideoContentShare data={data} />}
            </div>
        </div>
    )
}
