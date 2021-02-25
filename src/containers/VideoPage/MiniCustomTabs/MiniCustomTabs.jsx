import React, { useState } from "react"
import "./minicustomtabs.scss"

export const MiniCustomTabs = ({ renderElements, version }) => {
    const [activeFirst, setActiveFirst] = useState(true)

    return (
        <div className={version === "mobile" ? "mini-custom-tabs-mobile" : "mini-custom-tabs"}>
            <div className="mini-custom-tabs-header">
                <div className={"mini-custom-tab" + (activeFirst ? " active" : "")} onClick={() => setActiveFirst(true)}>
                    {renderElements[0].tab}
                </div>
                <div className={"mini-custom-tab" + (!activeFirst ? " active" : "")} onClick={() => setActiveFirst(false)}>
                    {renderElements[1].tab}
                </div>
            </div>
            <div className="mini-custom-tabs-body">
                <div className={"mini-custom-tab-container" + (activeFirst ? " active" : "")}>{renderElements[0].render}</div>
                <div className={"mini-custom-tab-container" + (!activeFirst ? " active" : "")}>{renderElements[1].render}</div>
            </div>
        </div>
    )
}
