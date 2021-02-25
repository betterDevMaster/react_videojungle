import React from "react"

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import "../VideoPageTabs.scss"

import avatar1 from "../../../assets/avatar/1.jpg"
import avatar2 from "../../../assets/avatar/2.jpg"
import avatar3 from "../../../assets/avatar/3.jpg"

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: "center",
    },
    // chatContent: {
    //     height: "460px",
    //     overflow: "auto",
    // },
    chatBlock: {
        display: "inline-block",
        padding: "0 .8rem",
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
        color: "#585353",
        fontSize: ".6rem",
        padding: ".2rem",
    },
    description: {
        fontSize: "1rem",
        padding: ".2rem",
    },
}))

export default function ChatMainBoard() {
    const classes = useStyles()

    return (
        <Grid container spacing={1} className="chatContent">
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar1} alt="Remy Sharp"></img>
                <span className={classes.name}>Sanowar Hosain</span>
                <span className={classes.description}>
                    yes. i went in a park on our national day while a clash made between two groups. Then i left the place instantly with
                    shocking mind...
                </span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar1} alt="Remy Sharp"></img>
                <span className={classes.name}>Sanowar Hosain</span>
                <span className={classes.description}>
                    yes. i went in a park on our national day while a clash made between two groups. Then i left the place instantly with
                    shocking mind...
                </span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar1} alt="Remy Sharp"></img>
                <span className={classes.name}>Sanowar Hosain</span>
                <span className={classes.description}>
                    yes. i went in a park on our national day while a clash made between two groups. Then i left the place instantly with
                    shocking mind...
                </span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar1} alt="Remy Sharp"></img>
                <span className={classes.name}>Sanowar Hosain</span>
                <span className={classes.description}>
                    yes. i went in a park on our national day while a clash made between two groups. Then i left the place instantly with
                    shocking mind...
                </span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar2} alt="Remy Sharp"></img>
                <span className={classes.name}>Learn English - FukEn</span>
                <span className={classes.description}>​ Have you ever experienced culture shock?</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar2} alt="Remy Sharp"></img>
                <span className={classes.name}>Learn English - FukEn</span>
                <span className={classes.description}>​ Have you ever experienced culture shock?</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar2} alt="Remy Sharp"></img>
                <span className={classes.name}>Learn English - FukEn</span>
                <span className={classes.description}>​ Have you ever experienced culture shock?</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar2} alt="Remy Sharp"></img>
                <span className={classes.name}>Learn English - FukEn</span>
                <span className={classes.description}>​ Have you ever experienced culture shock?</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar3} alt="Remy Sharp"></img>
                <span className={classes.name}>Thảo Phạm</span>
                <span className={classes.description}>​​This channel are helping me to learn English</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar3} alt="Remy Sharp"></img>
                <span className={classes.name}>Thảo Phạm</span>
                <span className={classes.description}>​​This channel are helping me to learn English</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar3} alt="Remy Sharp"></img>
                <span className={classes.name}>Thảo Phạm</span>
                <span className={classes.description}>​​This channel are helping me to learn English</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar3} alt="Remy Sharp"></img>
                <span className={classes.name}>Thảo Phạm</span>
                <span className={classes.description}>​​This channel are helping me to learn English</span>
            </Grid>
            <Grid className={classes.chatBlock}>
                <img className={classes.avatar} src={avatar3} alt="Remy Sharp"></img>
                <span className={classes.name}>Thảo Phạm</span>
                <span className={classes.description}>​​This channel are helping me to learn English</span>
            </Grid>
        </Grid>
    )
}
