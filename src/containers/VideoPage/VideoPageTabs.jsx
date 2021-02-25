import React from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper } from "@material-ui/core"

import ChatTopBar from "./ChatComponent/ChatTopBar"
import ChatMainBoard from "./ChatComponent/ChatMainBoard"
import ChatTypeBar from "./ChatComponent/ChatTypeBar"
import ChatSendBar from "./ChatComponent/ChatSendBar"
import VideoSidebar from "./VideoSidebar"
import { VideoComponent } from "./VideoComponent"
import { VideoComponentDescriptions } from "./VideoComponentDescriptions"
import { testData } from "./testData"
import { GoogleAdSenseExample } from "./GoogleAdSenseExample"
import { MiniCustomTabs } from "./MiniCustomTabs"
import Blog from "../../components/Blog"
import { VideoPlayList } from "./VideoPlayList"

import "./VideoPageTabs.scss"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        background: "none",
        boxShadow: "none",
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: "center",
    },
    chat: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}))

export const VideoPageTabs = (props) => {
    const classes = useStyles()
    const youtubeId = props.match.params.youtubeurl
    const [values, setValues] = React.useState({
        totalPlayed: "00",
        played: "",
        duration: "",
    })
    const { youtubeurl } = useParams()

    const youtubeState = useSelector((state) => state.videoSearch)
    console.log("VideoPageTabs: youtubeState: ------------ ", youtubeState)

    const onVideoPlayedOnPercentages = (totalPlayed, played, duration) => {
        setValues({ totalPlayed, played, duration })
    }

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <div
                                className="video"
                                style={{
                                    height: 0,
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                }}
                            >
                                <iframe
                                    style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src={`https://www.youtube.com/embed/${youtubeId}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.chat}>
                        <div>
                            <ChatTopBar />
                            <ChatMainBoard />
                        </div>
                        <div style={{ position: "relative", paddingTop: "10px" }}>
                            <ChatTypeBar />
                            <ChatSendBar />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id="VideoPageTabs">
                <div className="content-wrapper">
                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={9}>
                            {/* <VideoComponent onVideoPlayedOnPercentages={onVideoPlayedOnPercentages} youtubeurl={youtubeurl} /> */}
                            <VideoComponentDescriptions
                                data={youtubeState.selectedData}
                                dataContentDescription={testData.dataContentDescription}
                                showTabs
                                totalPlayed={values.totalPlayed}
                            />
                            <GoogleAdSenseExample exampleHeight={15} />
                            <MiniCustomTabs
                                renderElements={[
                                    {
                                        tab: (
                                            <>
                                                <i className="cv cvicon-cv-play-circle"></i>
                                                <span>Similar Videos</span>
                                            </>
                                        ),
                                        render: (
                                            <VideoSidebar
                                                allData={youtubeState.allData}
                                                selectedData={youtubeState.selectedData}
                                                title={"Similar Videos"}
                                                horizontalShow
                                            />
                                        ),
                                    },
                                    {
                                        tab: (
                                            <>
                                                <i className="cv cvicon-cv-comment"></i>
                                                <span>{`${testData.commentsForm.countComments} Comments}`}</span>
                                            </>
                                        ),
                                        render: <Blog />,
                                    },
                                ]}
                                version="mobile"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <VideoPlayList allData={youtubeState.allData} selectedData={youtubeState.selectedData} />
                            <GoogleAdSenseExample exampleHeight={70} />
                            <VideoSidebar
                                allData={youtubeState.allData}
                                selectedData={youtubeState.selectedData}
                                title="Recomended Videos"
                                showMore
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
