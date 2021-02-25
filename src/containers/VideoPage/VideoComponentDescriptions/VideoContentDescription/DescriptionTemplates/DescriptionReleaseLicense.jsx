import React from "react"

const calcPassDays = (publishDate) => {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date()
    const secondDate = new Date(publishDate)
    const oriDiffDays = Math.abs((firstDate - secondDate) / oneDay)
    const diffDays = Math.round(oriDiffDays)
    var ret = ""
    if (oriDiffDays < 1) ret = Math.round(oriDiffDays * 24) + " hours ago"
    else ret = diffDays + " days ago"
    if (diffDays > 31) ret = Math.floor(diffDays / 31) + " months ago"
    if (Math.floor(diffDays / 31) > 12) ret = Math.floor(diffDays / 31 / 12) + " years ago"

    return ret
}

export const DescriptionReleaseLicense = ({ data }) => (
    <div className="video-description-block d-flex justify-content-between flex-wrap align-items-center">
        <div className="video-about-block">
            <div className="video-description-title d-inline-block">Release Date:</div>
            <div className="video-description-text d-inline-block">{data.publishedAt ? calcPassDays(data.publishedAt) : "None"}</div>
        </div>
        <div className="video-about-block">
            <div className="video-description-title d-inline-block">License:</div>
            <div className="video-description-text d-inline-block">{data.license ? "Standard" : "None"}</div>
        </div>
    </div>
)
