import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography,
} from "@material-ui/core"
import {
    AccessTime as AccessTimeIcon,
    Comment as CommentIcon,
    DateRange as DateRangeIcon,
    ExpandMore as ExpandMoreIcon,
    Favorite as FavoriteIcon,
    MoreVert as MoreVertIcon,
    RadioButtonUncheckedOutlined as RadioButtonUncheckedOutlinedIcon,
    Reorder as ReorderIcon,
    Share as ShareIcon,
} from "@material-ui/icons"
import { red } from "@material-ui/core/colors"

import clsx from "clsx"
import imageUrl from "../../assets/imageUrl"
import { calcPassDays, calcDuration, calcSubTitle } from "../../utils/youtube"
import { ENDPOINT } from "../../utils/endpoint"
import { getOptions, postOptions } from "../../utils/httpConfig"
import request from "../../utils/request"

import "./videocard.scss"

export default function Videocard(props) {
    const videoid = props.selectedData.url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1]
    const history = useHistory()
    const dispatch = useDispatch()
    const youtubeState = useSelector((state) => state.videoSearch)
    const [selectedData, setSelectedData] = useState(null)

    const routeChange = () => {
        dispatch({ type: "YOUTUBE_SELECT", allData: props.allData, selectedData: props.selectedData, key: youtubeState.key })
        let path = `/single-video-tabs/${videoid}`
        history.push(path)
    }

    const handleDetails = async () => {
        console.log("handleDetails: -------------- ", videoid, props.selectedData.url, props.selectedData)

        let res = await request(`${ENDPOINT["SearchDetailYoutubeVideoById"]}?videoId=${videoid}`, getOptions({}))
        setSelectedData(res)
        // setYoutubeData(res)
    }

    return (
        <div id="VideoCard">
            <Card className="card-main">
                <CardActionArea>
                    <div className="card-media-outer" onMouseOver={handleDetails}>
                        <CardMedia
                            className="card-media"
                            style={{
                                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 200% ), url(${props.selectedData.thumbnail})`,
                            }}
                            image={props.selectedData.thumbnail}
                            title="Paella dish"
                        />
                        <div className="card-media-info">
                            {/* <Link to={`/single-video-tabs/${videoid}`} className="channel-name"> */}
                            {/* <Typography variant="h6" onClick={routeChange}>
                                {props.selectedData.url}
                            </Typography> */}
                            {/* </Link> */}
                            <div className="card-media-action">
                                <div className="action">
                                    <FavoriteIcon />
                                    {/* <Typography variant="subtitle2">{calcSubTitle(props.selectedData.viewCount)}</Typography> */}
                                    <Typography variant="subtitle2">
                                        {selectedData ? calcSubTitle(selectedData[0].viewCount) : ""}
                                    </Typography>
                                </div>
                                <div className="action">
                                    <CommentIcon />
                                    <Typography variant="subtitle2">
                                        {selectedData ? calcSubTitle(selectedData[0].commentCount) : ""}
                                    </Typography>
                                    {/* <Typography variant="subtitle2">{calcSubTitle(props.selectedData.commentCount)}</Typography> */}
                                </div>
                                <div className="action">
                                    <AccessTimeIcon />
                                    <Typography>{selectedData ? calcDuration(selectedData[0].duration) : ""}</Typography>
                                    {/* <Typography>{calcDuration(props.selectedData.duration)}</Typography> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardContent className="card-content">
                        <div className="card-avatar">
                            <Link to="/channel">
                                {props.selectedData.channelImg && props.selectedData.channelImg !== "" ? (
                                    <Avatar aria-label="recipe" src={props.selectedData.channelImg}></Avatar>
                                ) : (
                                    <Avatar aria-label="recipe">{props.selectedData.author && props.selectedData.author.charAt(0)} </Avatar>
                                )}
                            </Link>
                            {/* <Link to={`/single-video-tabs/${props.selectedData.url}`}><Button size="small" className="more-btn"> More </Button></Link> */}
                        </div>
                        <div className="card-info">
                            <div className="card-info-title-main">
                                {/* <Link to={`/single-video-tabs/${videoid}`}> */}
                                <Typography variant="body1" className="title" onClick={routeChange}>
                                    {props.selectedData.title}
                                </Typography>
                                {/* </Link> */}
                                <Typography variant="subtitle2" className="title-time">
                                    {calcPassDays(props.selectedData.publishedAt)}
                                </Typography>
                            </div>
                            {/* <div className="card-sub-info">
                <Typography variant="body2" className="sub-info-1">
               *   <DateRangeIcon /> {new Date(props.selectedData.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" className="sub-info-2">
                  <ReorderIcon /> News
                </Typography>
              </div> */}
                            {/* <Link to={`/single-video-tabs/${videoid}`}> */}
                            <Typography variant="body2" className="desc" onClick={routeChange}>
                                {props.selectedData.desc}
                            </Typography>
                            {/* </Link> */}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
