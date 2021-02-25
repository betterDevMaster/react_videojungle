import React, { useState } from "react";
import imageUrl from "../../assets/imageUrl";
import VideoThumbnail from "react-video-thumbnail";
import "./PhotosCard.scss";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ReorderIcon from '@material-ui/icons/Reorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
export default function PhotosCard(props) {
    const { data } = props;
    const { video } = data;
    const [thumbnail, setthumbnail] = useState(null);
    
    return (
        <div id="PhotosCard">
            <Card className="card-main">
                <CardActionArea>
                    <div className="card-media-outer">
                        <CardMedia className="card-media" image={data.src} title="Paella dish" />
                        <div className="card-media-info">
                            <Typography variant="h6" className="channel-name">{data.title}</Typography>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    );
}
