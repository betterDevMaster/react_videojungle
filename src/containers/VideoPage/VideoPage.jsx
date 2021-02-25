import React from "react"
import { VideoComponent } from "./VideoComponent"
import { VideoComponentDescriptions } from "./VideoComponentDescriptions"
import { Grid } from "@material-ui/core/"
import { testData } from "./testData"
import { CommentsComponent } from "./CommentsComponent"
import { CommentsForm } from "./CommentsForm"
import { VideoPlayList } from "./VideoPlayList"
import VideoSidebar from "./VideoSidebar"
import { GoogleAdSenseExample } from "./GoogleAdSenseExample"
import { MiniCustomTabs } from "./MiniCustomTabs"

export const VideoPage = () => {
    return (
        <div className="content-wrapper">
            <Grid container justify="center" spacing={2}>
                <Grid item xl={9}>
                    <VideoComponent />
                    <VideoComponentDescriptions dataContentDescription={testData.dataContentDescription} />
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
                                render: <VideoSidebar recomendedList={testData.similarVideos} title={"Similar Videos"} horizontalShow />,
                            },
                            {
                                tab: (
                                    <>
                                        <i className="cv cvicon-cv-comment"></i>
                                        <span>{`${testData.commentsForm.countComments} Comments}`}</span>
                                    </>
                                ),
                                render: (
                                    <>
                                        <CommentsForm commentsForm={testData.commentsForm} />
                                        <CommentsComponent comments={testData.comments} />
                                    </>
                                ),
                            },
                        ]}
                        version="mobile"
                    />
                </Grid>
                <Grid item xl={3}>
                    <VideoSidebar recomendedList={testData.upNext} title={"Up Next"} />
                    <GoogleAdSenseExample exampleHeight={70} />
                    <VideoSidebar recomendedList={testData.recomendedList} title={"Recomended Videos"} showMore />
                </Grid>
            </Grid>
        </div>
    )
}
