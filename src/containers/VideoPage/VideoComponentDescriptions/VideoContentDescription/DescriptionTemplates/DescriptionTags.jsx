import React from "react"

export const DescriptionTags = ({ data }) => (
    <>
        <div className="video-description-block">
            <div className="video-description-title">Tags:</div>
            <div className="video-description-tags">
                {data.hasOwnProperty("tags") && data.tags ? (
                    data.tags.map((tag, index) => (
                        <a href="#" className="video-description-tag" key={index}>
                            {tag}
                        </a>
                    ))
                ) : (
                    <a href="#" className="video-description-tag">
                        None
                    </a>
                )}
            </div>
        </div>
    </>
)
