import React from "react"

export const VideoContentTabs = () => (
    <div className="video-tabs-panel">
        <div className="video-tabs-container hidden-xs">
            {/* <a href="#" className="video-tab active">
        <i className="cv cvicon-cv-about tab-icon" />
        <span>About</span>
      </a>
      <a href="#" className="video-tab">
        <i className="cv cvicon-cv-share tab-icon" />
        <span>Share</span>
      </a> */}
            <a href="#" className="video-tab">
                <i className="cv cvicon-cv-download tab-icon" />
                <span>Download</span>
            </a>
            <a href="#" className="video-tab">
                <i className="cv cv cvicon-cv-goto tab-icon mini-icon" />
                <span>Jump to</span>
            </a>
            {/* <a href="#" className="video-tab">
        <i className="cv cvicon-cv-plus tab-icon" />
        <span>Add to</span>
      </a> */}
        </div>
        <div className="video-tabs-mobile-container">
            <a href="#" className="video-tab">
                <i className="cv cvicon-cv-about tab-icon" />
            </a>
            <a href="#" className="video-tab">
                <i className="cv cvicon-cv-share tab-icon" />
            </a>
            <a href="#" className="video-tab">
                <i className="cv cvicon-cv-download tab-icon" />
            </a>
            <a href="#" className="video-tab">
                <i className="cv cv cvicon-cv-goto tab-icon mini-icon" />
            </a>
            <a href="#" className="video-tab">
                <i className="cv cvicon-cv-plus tab-icon" />
            </a>
        </div>
        <div className="video-acide-panel hidden-xs">
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
    </div>
)
