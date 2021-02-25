import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

import avatar1 from "../../../assets/avatar/1.jpg"

import "../VideoPageTabs.scss"

const useStyles = makeStyles((theme) => ({
    blockBG: {
        background: "#202020",
    },
    blockDisp: {
        background: "#202020",
        bottom: "4rem",
        height: "5rem",
        padding: "0.1rem 1rem",
    },
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: "center",
    },
    chatBlock: {
        display: "inline-block",
        padding: "0 .8rem",
    },
    chatType: {
        color: "white",
        padding: "0.4rem 1rem",
        width: "85%",
    },
    avatarDiv: {
        width: "15%",
        paddingTop: "1rem",
    },
    avatar: {
        borderRadius: "50%",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "1.25rem",
        height: "40px",
        lineHeight: "1",
        padding: ".2rem",
        userSelect: "none",
        width: "40px",
    },
    name: {
        fontSize: ".6rem",
        padding: ".2rem",
    },
    input: {
        fontSize: "1rem",
        padding: ".2rem",
        width: "100%",
    },
}))

export default function ChatTypeBar() {
    const classes = useStyles()

    const handleType = (e) => {}

    return (
        <Grid container className={classes.blockDisp} spacing={1}>
            <div className={classes.avatarDiv}>
                <img className={classes.avatar} src={avatar1} alt="Remy Sharp"></img>
            </div>
            <div className={classes.chatType}>
                <span className={classes.name}>Sanowar Hosain</span>
                <input className={classes.input} type="text" value="" placeholder="Say something..." onChange={handleType} />
            </div>
        </Grid>
    )
}
