import React from "react"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import { Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Popover } from "@material-ui/core"
import { ArrowDropDown as ArrowDropDownIcon, MoreVert as MoreVertIcon, Person as PersonIcon } from "@material-ui/icons"

import "../VideoPageTabs.scss"

const useStyles = makeStyles((theme) => ({
    blockDisp: {
        display: "flex",
        justifyContent: "space-between",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    chatButton: {
        background: "none !important",
        borderRadius: 0,
        fontSize: "1rem",
        outline: "none !important",
        "&:hover": {
            background: "none !important",
        },
    },
    chatSection: {
        padding: theme.spacing(1),
        userSelect: "none",
        cursor: "pointer",
        borderBottom: ".5px solid",
        "& p": {
            color: "#585353",
            fontSize: ".6rem",
            margin: 0,
        },
        "&:hover": {
            backgroundColor: "#aba0a0",
            color: "#585353",
        },
    },
    focusBG: {
        "&:focus": {
            backgroundColor: "#aba0a0 !important",
            color: "#585353",
        },
    },
}))

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

export default function ChatTopBar() {
    const classes = useStyles()
    const primaryTexts = ["Participants", "Popout chat", "Toggle timestamps", "Send feedback"]

    const [anchorEl, setAnchorEl] = React.useState({ chat: null, more: null })
    const [chatBtnLabel, setChatBtnLabel] = React.useState("Top Chat")

    const handleClick = (event, type) => {
        type === 0 ? setAnchorEl({ chat: event.currentTarget }) : setAnchorEl({ more: event.currentTarget })
    }
    const handleClose = () => {
        setAnchorEl({ chat: null, more: null })
    }
    const handleChatSelectClick = (label) => {
        setAnchorEl({ chat: null, more: null })
        setChatBtnLabel(label)
    }

    return (
        <Grid container className={classes.blockDisp} spacing={1}>
            {/* Left ChatKind dropdown button */}
            <IconButton className={classes.chatButton} onClick={(e) => handleClick(e, 0)}>
                {chatBtnLabel} <ArrowDropDownIcon />
            </IconButton>
            <Popover
                id={Boolean(anchorEl.chat) ? "simple-popover" : undefined}
                open={Boolean(anchorEl.chat)}
                anchorEl={anchorEl.chat}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <div className={classes.chatSection} onClick={() => handleChatSelectClick("Top Chat")}>
                    Top Chat
                    <p>Some messages, such as potential spam, may not be visible</p>
                </div>
                <div className={classes.chatSection} onClick={() => handleChatSelectClick("Live Chat")}>
                    Live Chat
                    <p>All messages are visible</p>
                </div>
            </Popover>

            {/* Right More button */}
            <IconButton
                className={classes.chatButton}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(e) => handleClick(e, 1)}
            >
                <MoreVertIcon />
            </IconButton>
            <StyledMenu id="customized-menu" anchorEl={anchorEl.more} keepMounted open={Boolean(anchorEl.more)} onClose={handleClose}>
                {primaryTexts.map((text, i) => {
                    return (
                        <StyledMenuItem className={classes.focusBG} key={i}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </StyledMenuItem>
                    )
                })}
            </StyledMenu>
        </Grid>
    )
}
