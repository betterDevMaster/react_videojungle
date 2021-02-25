import React, { Component } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Accordion, AccordionDetails, AccordionSummary, Avatar, Typography, Paper } from "@material-ui/core"
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons"

import { lefPanelList } from "../../dummyData/DefaultList"
import "./LeftPanel.scss"

const LeftPanel = () => {
    const dispatch = useDispatch()

    const handleCategorySelect = (key) => {
        dispatch({ type: "YOUTUBE_SEARCH", value: key })
    }

    const primaryTexts = [
        "Film & Animation",
        "Autos & Vehicles",
        "Music",
        "Pets & Animals",
        "Sports",
        "Travel & Events",
        "Gaming",
        "People & Blogs",
        "Comedy",
        "Entertainment",
        "News & Politics",
        "Howto & Style",
        "Education",
        "Science & Technology",
        "Nonpofits & Activsm",
    ]

    return (
        <div id="LeftPanel">
            <div className="nemu-container">
                {lefPanelList &&
                    lefPanelList.length > 0 &&
                    lefPanelList.map((list, listIdx) => (
                        <Accordion key={listIdx} style={{ overflow: "auto" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <div className="expansion-head">
                                    <Avatar variant="square" src={list.icon}></Avatar>
                                    <Typography variant="subtitle2">{list.title}</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="expansion-body">
                                    {primaryTexts.map((text, i) => {
                                        return (
                                            <Link to="/" key={i} style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>
                                                <Typography style={{ userSelect: "none" }} onClick={() => handleCategorySelect(text)}>
                                                    {text}
                                                </Typography>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </div>

            {/* 1st november 2020 Dinh Truong remove to change layout */}

            {/* {lefPanelList && lefPanelList.length > 0 && lefPanelList.map((list, listIdx) => (
        <Accordion key={listIdx} style={{overflow: "auto"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header"  >
            <div className="expansion-head">
              <Avatar variant="square" src={list.icon}> </Avatar>
              <Typography variant="subtitle2">{list.title}</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div  className="expansion-body">
              <Typography > Channel-1  </Typography>
              <Typography > Channel-2  </Typography>
              <Typography > Channel-3  </Typography>
              <Typography > Channel-4  </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      ))} */}
            <div className="footer">
                <Typography>@2020 Simplyonline Pte. Ltd.</Typography>
            </div>

            {/* 1st november 2020 Dinh Truong remove to change layout */}
            {/* <div className="left-panel-body">
            <Typography>@2020 Simplyonline Pte. Ltd.</Typography>
      </div> */}
        </div>
    )
}

export default LeftPanel
