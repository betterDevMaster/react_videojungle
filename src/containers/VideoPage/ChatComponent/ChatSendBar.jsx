import React from "react"

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { EmojiEmotions as EmojiEmotionsIcon, MonetizationOn as MonetizationOnIcon, Send as SendIcon } from "@material-ui/icons"

import { Picker } from "emoji-mart"

import "../VideoPageTabs.scss"
import "emoji-mart/css/emoji-mart.css"

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(2),
        textAlign: "center",
    },
    blockDisp: {
        alignItems: "center",
        background: "#202020",
        bottom: "1rem",
        display: "flex",
        height: "3rem",
        justifyContent: "space-between",
        left: 0,
        right: 0,
    },
    chatBlock: {
        alignContent: "center",
        color: "white",
        display: "flex",
        padding: "0 .8rem",
    },
    chatSendItems: {
        cursor: "pointer",
        marginRight: ".5rem",
    },
}))

export default function ChatSendBar() {
    const classes = useStyles()
    const [emojiPickerState, SetEmojiPicker] = React.useState(false)

    const triggerPicker = (event) => {
        event.preventDefault()
        SetEmojiPicker(!emojiPickerState)
    }

    return (
        <Grid container className={classes.blockDisp} spacing={1}>
            <Grid className={classes.chatBlock}>
                <EmojiEmotionsIcon className={classes.chatSendItems} onClick={triggerPicker} />
                <MonetizationOnIcon className={classes.chatSendItems} />
                {emojiPickerState && (
                    <Picker
                        set="apple"
                        title="Pick your emoji…"
                        emoji="point_up"
                        style={{ position: "absolute", bottom: "120px", left: "0", right: "0", width: "100%" }}
                        theme={"dark"}
                        emojiSize={30}
                        showPreview={false}
                        emojiTooltip={true}
                    />
                )}
            </Grid>
            <Grid className={classes.chatBlock}>
                <span className={classes.chatSendItems}>0/200</span>
                <SendIcon className={classes.chatSendItems} />
            </Grid>
        </Grid>
    )
}
