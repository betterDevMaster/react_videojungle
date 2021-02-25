import React from "react"
import "./subscribebuttonmobile.scss"

export const SubscribeButtonMobile = ({ classProps, buttonSize, fontSize }) => (
    <a
        href="#"
        className={`ui-btn-subscribe-mobile ${classProps}`}
        style={{
            width: buttonSize ? `${buttonSize}px` : null,
            height: buttonSize ? `${buttonSize}px` : null,
            fontSize: fontSize ? `${fontSize}px` : null,
        }}
    >
        <i className="cv cvicon-cv-plus"></i>
    </a>
)
