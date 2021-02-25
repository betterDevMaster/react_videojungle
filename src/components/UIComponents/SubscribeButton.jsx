import React from "react"
import "./subscribebutton.scss"

export const SubscribeButton = ({ classProps, subscribeCount, subscribeText, hrefProps }) => (
    <a href={hrefProps} className={`ui-btn-subscribe ${classProps}`}>
        <div className="ui-btn-subscribe-name">{subscribeText ? subscribeText : "Subscribe"}</div>
        {/* <div className="ui-btn-subscribe-count">
      { subscribeCount ? subscribeCount : 0 }
    </div> */}
    </a>
)
