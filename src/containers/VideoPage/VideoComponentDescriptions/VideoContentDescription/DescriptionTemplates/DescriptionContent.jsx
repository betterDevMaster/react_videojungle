import React from "react"

const castText = "Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher"
const categoryText = "Gaming , PS4 Exclusive , Gameplay , 1080p"

export const DescriptionContent = ({ data }) => (
    <>
        <div className="video-description-block">
            <div className="video-description-title">Cast:</div>
            <div className="video-description-text">{castText}</div>
        </div>
        <div className="video-description-block">
            <div className="video-description-title">Category:</div>
            <div className="video-description-text">{categoryText}</div>
        </div>
        <div className="video-description-block">
            <div className="video-description-title">About:</div>
            <div className="video-description-text">{data.description ? data.description : "None"}</div>
        </div>
    </>
)
