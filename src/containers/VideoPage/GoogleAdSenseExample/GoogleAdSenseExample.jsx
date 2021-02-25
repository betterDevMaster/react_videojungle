import React from "react"

export const GoogleAdSenseExample = ({ exampleHeight }) => (
    <div
        style={{
            paddingBottom: `${exampleHeight}%`,
            backgroundColor: "#eceff0",
            color: "#a1a1a1",
            position: "relative",
            fontSize: "14px",
            marginTop: "58px",
            marginBottom: "30px",
            textAlign: "center",
        }}
    >
        <div
            style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
            }}
        >
            <div>Google AdSense</div>
            <div>Example</div>
        </div>
    </div>
)
