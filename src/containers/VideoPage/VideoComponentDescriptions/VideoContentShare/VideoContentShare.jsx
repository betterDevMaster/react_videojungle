import React from "react"
import { TextField, Button, IconButton, Typography } from "@material-ui/core"
import Clipboard from "react-clipboard.js"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Tooltip from "react-tooltip-lite"
import DeleteIcon from "@material-ui/icons/Delete"
// Img
import bandcolor from "./../../../../assets/img/SocialMedia/bandcolor.png"
import facebookcolor from "./../../../../assets/img/SocialMedia/facebookcolor.png"
import googlepluscolor from "./../../../../assets/img/SocialMedia/googlepluscolor.png"
import instagramcolor from "./../../../../assets/img/SocialMedia/instagramcolor.png"
import kakaocolor from "./../../../../assets/img/SocialMedia/kakaocolor.png"
import linecolor from "./../../../../assets/img/SocialMedia/linecolor.png"
import linkedincolor from "./../../../../assets/img/SocialMedia/linkedincolor.png"
import naverblogcolor from "./../../../../assets/img/SocialMedia/naverblogcolor.png"
import okcolor from "./../../../../assets/img/SocialMedia/okcolor.png"
import pinterestcolor from "./../../../../assets/img/SocialMedia/pinterestcolor.png"
import tstorycolor from "./../../../../assets/img/SocialMedia/tstorycolor.png"
import twittercolor from "./../../../../assets/img/SocialMedia/twittercolor.png"
import yahoocolor from "./../../../../assets/img/SocialMedia/yahoocolor.png"
import youtubecolor from "./../../../../assets/img/SocialMedia/youtubecolor.png"
import zalocolor from "./../../../../assets/img/SocialMedia/zalocolor.png"

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e1e2",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e1e2",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e0e1e2",
            borderWidth: "1px",
        },
    },
})

export const VideoContentShare = ({ data }) => {
    const classes = useStyles()
    const [copy, setCopy] = React.useState(false)
    const onCopyData = () => {
        setCopy(true)
    }
    return (
        <div className="video-share">
            <div className="video-share-block">
                <div className="video-share-title">Share:</div>
                {/* <div className="video-share-social">
          <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#" className="twitter"><i className="fa fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#" className="google"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
          <a href="#" className="pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href="#" className="btc"><i className="fa fa-btc" aria-hidden="true"></i></a>
          <a href="#" className="tumblr"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
          <a href="#" className="vk"><i className="fa fa-vk" aria-hidden="true"></i></a>
          <a href="#" className="reddit"><i className="fa fa-reddit" aria-hidden="true"></i></a>
          <a href="#" className="stumbleupon"><i className="fa fa-stumbleupon" aria-hidden="true"></i></a>
          <a href="#" className="odnoklassniki"><i className="fa fa-odnoklassniki" aria-hidden="true"></i></a>
          <a href="#" className="pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href="#" className="btc"><i className="fa fa-btc" aria-hidden="true"></i></a>
          <a href="#" className="tumblr"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
          <a href="#" className="vk"><i className="fa fa-vk" aria-hidden="true"></i></a>
          <a href="#" className="reddit"><i className="fa fa-reddit" aria-hidden="true"></i></a>
          <a href="#" className="stumbleupon"><i className="fa fa-stumbleupon" aria-hidden="true"></i></a>
          <a href="#" className="odnoklassniki"><i className="fa fa-odnoklassniki" aria-hidden="true"></i></a>
        </div> */}
                <div className="video-share-social">
                    <a href="#">
                        <img src={bandcolor} />
                    </a>
                    <a href="#">
                        <img src={facebookcolor} />
                    </a>
                    <a href="#">
                        <img src={googlepluscolor} />
                    </a>
                    <a href="#">
                        <img src={instagramcolor} />
                    </a>
                    <a href="#">
                        <img src={kakaocolor} />
                    </a>
                    <a href="#">
                        <img src={linecolor} />
                    </a>
                    <a href="#">
                        <img src={linkedincolor} />
                    </a>
                    <a href="#">
                        <img src={naverblogcolor} />
                    </a>
                    <a href="#">
                        <img src={okcolor} />
                    </a>
                    <a href="#">
                        <img src={pinterestcolor} />
                    </a>
                    <a href="#">
                        <img src={tstorycolor} />
                    </a>
                    <a href="#">
                        <img src={twittercolor} />
                    </a>
                    <a href="#">
                        <img src={yahoocolor} />
                    </a>
                    <a href="#">
                        <img src={youtubecolor} />
                    </a>
                    <a href="#">
                        <img src={zalocolor} />
                    </a>
                </div>
            </div>
            <div className="video-share-block">
                <div className="video-share-title">Link:</div>
                <div className="video-share-social row">
                    <div className="col-md-9">
                        <div className="video-share-copy-block">
                            <TextField
                                variant="outlined"
                                value={data.url}
                                size="small"
                                // color="inherit"
                                color="secondary"
                                InputProps={{
                                    readOnly: true,
                                }}
                                className={classes.root}
                            />
                            <Tooltip content={copy ? "Copied" : "Copy"} direction="up" tagName="span" className="custom-tooltip-design">
                                <Clipboard onClick={onCopyData} data-clipboard-text={data.url} className="video-share-copy-btn">
                                    Copy
                                </Clipboard>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <div className="video-share-block">
                <div className="video-share-title">Embed:</div>
                <div className="video-share-social"></div>
            </div>
        </div>
    )
}
