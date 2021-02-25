import React, { useState } from "react";
import imageUrl from "../../assets/imageUrl";
import "./WebtoonCard.scss";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
export default function WebtoonCard(props) {
    const { data } = props;
    return (
        <div id="WebtoonCard">
            <Card className="card-main">
                <CardActionArea>
                    <div className="card-media-outer">
                        <CardMedia className="card-media" image={data.src} title="Paella dish" />
                        <div className="card-media-info">
                            <Link to="/file-details" className="channel-name"><Typography variant="h6" >{data.channelName}</Typography></Link>
                            <div className="card-media-action">
                                <div className="action">
                                    <FavoriteIcon className="favoriteI-icon" />
                                    <Typography variant="subtitle2">1234</Typography>
                                </div>
                                <div className="action">
                                    <Typography variant="subtitle2" >2 hours ago</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="card-right-media-action">
                            <div className="action">
                                <DescriptionOutlinedIcon />
                                <Typography variant="subtitle2">185</Typography>
                            </div>
                            <div className="action">
                                <GetAppIcon />
                                <Typography variant="subtitle2">45</Typography>
                            </div>
                            <div className="action">
                                <VisibilityOutlinedIcon />
                                <Typography variant="subtitle2">826</Typography>
                            </div>

                            <div className="action">
                                <CommentIcon />
                                <Typography variant="subtitle2">45</Typography>
                            </div>

                        </div>
                    </div>
                    <CardContent className="card-content">
                        <div className="card-avatar">
                            <Link to="/channel">
                                {data.channelIcon && data.channelIcon !== "" ?
                                    <Avatar aria-label="recipe" src={data.channelIcon} > </Avatar>
                                    :
                                    <Avatar aria-label="recipe" >   {data.author && data.author.charAt(0)} </Avatar>
                                }
                            </Link>
                        </div>
                        <div className="card-info">
                            <div className="card-info-title-main">
                                <Link to="/file-details" > <Typography variant="body1" className="title">{data.title}</Typography></Link>

                            </div>
                            <Link to="/file-details"> <Typography variant="body2" className="desc">{data.desc}</Typography></Link>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
