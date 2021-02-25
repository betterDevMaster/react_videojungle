import React, { useState } from "react"
import { DescriptionContent, DescriptionTags, DescriptionReleaseLicense } from "./DescriptionTemplates"
import "./VideoContentDescription.scss"
export const VideoContentDescription = ({ data, dataContentDescription: { content, tags, release, license } }) => {
    const [contentView, setContentView] = useState(true)

    const showContent = (e, isShow) => {
        e.preventDefault()
        setContentView(isShow)
    }

    return (
        <div id="VideoContentDescription">
            <div className="video-description-content">
                {contentView && (
                    <>
                        {content && <DescriptionContent data={data} />}
                        {tags && <DescriptionTags data={data} />}
                        {(release || license) && <DescriptionReleaseLicense data={data} />}
                    </>
                )}
                <div className="video-description-showless">
                    {!contentView ? (
                        <a href="#" className="showless-btn hidden-xs" onClick={(e) => showContent(e, true)}>
                            Show More
                        </a>
                    ) : (
                        <a href="#" className="showless-btn hidden-xs" onClick={(e) => showContent(e, false)}>
                            Show Less
                        </a>
                    )}
                    <button className="showless-mobile-btn" onClick={showContent}>
                        <i className="cv cvicon-cv-next loadmore-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
