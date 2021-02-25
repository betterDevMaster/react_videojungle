import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, NavLink, useHistory } from "react-router-dom"

import "./header.scss"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
    Button,
    Divider,
    Drawer,
    Fade,
    FormControl,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@material-ui/core"
import {
    AppsOutlined as AppsOutlinedIcon,
    ArrowBackIosOutlined as ArrowBackIosOutlinedIcon,
    ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
    FavoriteBorder as FavoriteBorderIcon,
    HourglassEmptyOutlined as HourglassEmptyOutlinedIcon,
    MenuOutlined as MenuOutlinedIcon,
    PlayArrow as PlayArrowIcon,
    PlayCircleOutline as PlayCircleOutlineIcon,
    Search as SearchIcon,
    SearchOutlined as SearchOutlinedIcon,
    ShopOutlined as ShopOutlinedIcon,
    Videocam as VideocamIcon,
    ViewListOutlined as ViewListOutlinedIcon,
    WatchLaterOutlined as WatchLaterOutlinedIcon,
} from "@material-ui/icons"

//utils.
import { GetAuth, SetCrossData } from "../../utils/auth"
import { ENDPOINT } from "../../utils/endpoint"
import request from "../../utils/request"
import { getOptions } from "../../utils/httpConfig"

import imageUrl from "../../assets/imageUrl"
// import { connect } from "react-redux"
// import { setTheme as setThemeAction } from "../../store/actions/action"
import { SET_THEME, DARK_THEME } from "../../store/constants/constants"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        width: "100%",
    },
    list: {
        width: 300,
    },
    fullList: {
        width: "auto",
    },
}))

// const HeaderContainer = ({ setTheme, currentTheme }) => {
export default function Header(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const currentTheme = useSelector((state) => state.theme)
    const youtubeState = useSelector((state) => state.videoSearch)
    const classes = useStyles()
    const [values, setValues] = useState({
        search: "",
        left: false,
        anchorEl: null,
    })

    useEffect(() => {
        setValues({ ...values, search: youtubeState.key })
    }, [youtubeState])

    const [anchorEl, setAnchorEl] = useState(null)
    const [currentLink, setLink] = useState(null)
    const user = localStorage.getItem("MY_AUTH") ? JSON.parse(localStorage.getItem("MY_AUTH")).user : null

    const handleClickdoc = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClosedoc = () => {
        setAnchorEl(null)
        setLink("documents")
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return
        }
        setValues({ ...values, [anchor]: open })
    }
    const handleCheckEnter = (event) => {
        var theCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode
        if (theCode === 13) {
            dispatch({ type: "YOUTUBE_SEARCH", value: event.target.value })
            let path = `/`
            history.push(path)
            return false
        } else {
            return true
        }
    }
    const routeChange = () => {
        let path = `/`
        history.push(path)
    }
    const open = Boolean(values.anchorEl)

    const handleClick = async (event) => {
        values.anchorEl = event.currentTarget
        console.log("handleClick : ---------- ", values, open)
        setValues({ ...values, [values.anchorEl]: event.currentTarget })

        // await userAuthenticate()
        // await initialPageAPICall()
    }

    // const userAuthenticate = async () => {
    //     console.log("crossdata: -------------- ", window.location.href.split("crossdata=")[1])
    //     if (window.location.href.split("crossdata=")[1]) {
    //         const result = await request(
    //             `${ENDPOINT["GetCrossDomain"]}?crosskey=${window.location.href.split("crossdata=")[1].replace(/[\/\\#]/g, "")}`,
    //             getOptions({})
    //         )
    //         console.log("userAuthenticate : ----------- ", result)
    //         if (result["crossKey"]) {
    //             let res = SetCrossData(result["crossData"])
    //             console.log("userAuthenticate: -------------- ", res)
    //             if (res) {
    //                 setTimeout(() => {
    //                     window.history.pushState({}, null, `${window.location.origin}/#/`)
    //                 }, 4000)
    //             }
    //         } else {
    //             window.location.href = `https://www.simportal.net/#/login?callback=${window.location.href}`
    //         }
    //     } else if (GetAuth() == null) {
    //         console.log("window.location.href : ----------- ", window.location.href)
    //         window.location.href = `https://www.simportal.net/#/login?callback=${window.location.href}`
    //     }
    // }

    // const initialPageAPICall = async () => {
    //     let user = GetAuth()
    //     console.log("initialPageAPICall: -------------- ", user)

    //     if (user) {
    //         let userifo = user["user"]
    //         let result = await request(`${ENDPOINT["GetChannelInfo"]}?userid=${userifo["userId"]}`, getOptions({}))
    //         // this.props.onSelectedChannelHandle(result["result"][0])
    //         // this.props.onMyChannelListHandle(result["result"])
    //     }
    // }

    const handleClose = () => {
        values.anchorEl = null
        setValues({ ...values, [values.anchorEl]: null })
    }

    //header-mobile
    const Menu1stSection = () => {
        return (
            <div style={{ height: "90px" }} className="d-flex flex-row justify-content-between align-items-center container-fluid pt-2">
                <div>
                    <ArrowBackIosOutlinedIcon />
                </div>
                <img style={{ height: "44px", width: "44px" }} src={`${imageUrl}/logo.png`}></img>
                <p
                    style={{
                        fontSize: "20px",
                        color: "#da0000",
                        fontWeight: "bold",
                        marginBottom: "0px",
                    }}
                >
                    Circle
                </p>
                <img style={{ height: "22px", width: "22px" }} src={`${imageUrl}/icon_bulb_light.png`}></img>
            </div>
        )
    }
    const Menu2ndSection = () => {
        return (
            <div style={{ height: "90px" }} className="d-flex flex-row justify-content-between align-items-center container-fluid pt-2 ">
                <div className="profile d-flex flex-row">
                    <Link
                        to="/channel"
                        onClick={() => {
                            setLink(null)
                        }}
                    >
                        <img className="col-sm-5" src={user.profileImage}></img>
                    </Link>
                    <Button className="col-sm-7">
                        {user.profileName}
                        <ArrowDropDownOutlinedIcon />
                    </Button>
                </div>
            </div>
        )
    }
    const Menu3rdSection = () => {
        return (
            <Link
                to="/upload"
                onClick={() => {
                    setLink(null)
                }}
            >
                <Button className="up-mobile-btn mt-4">
                    <VideocamIcon /> Upload Video
                </Button>
            </Link>
        )
    }
    const primaryTexts = ["popular Videos", "Browse categories", "Liked Videos", "History", "Purchase Videos Videos"]

    const Menu4thSection = () => {
        {
            primaryTexts.map((text, i) => {
                return (
                    <ListItem button key={i}>
                        <ListItemIcon>
                            <PlayCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            })
        }
    }

    const Menu5thSection = () => {
        return <Button className="log-out-mobile-btn mt-4">Logout</Button>
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Menu1stSection />
                <Divider />
                <Menu2ndSection />
                <Divider />
                <Menu3rdSection />
                <List className="pt-2">
                    <Menu4thSection />
                </List>
                <Divider />
                <Menu5thSection />
            </List>
        </div>
    )

    const toggleTheme = () => {
        console.log(currentTheme)
        // console.log(setTheme)
        dispatch({ type: SET_THEME, value: DARK_THEME })
    }

    //header-mobile-end
    return (
        //Desktop Header start
        <div id="Header">
            <div className="header-main d-flex flex-column">
                {/* <div className="btn-color-toggle" onClick={toggleTheme}>
        <img
          style={{ height: "22px", width: "22px" }}
          src={`${imageUrl}/icon_bulb_light.png`}
        ></img>
      </div> */}
                <div className="header-upper d-flex flex-row align-items-center flex-wrap">
                    <div className="header  header-main-view d-flex flex-row flex-nowrap flex-sm-wrap">
                        <div className="toggle-menu col-sm-2 col-xs-2 flex-row justify-content-center align-items-center">
                            <div>
                                {["left"].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer(anchor, true)}>
                                            <MenuOutlinedIcon />
                                        </Button>
                                        <Drawer anchor={anchor} open={values[anchor]} onClose={toggleDrawer(anchor, false)}>
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="logo-container-mobile col-xl-2 px-md-0 col-md-2 col-sm-8 col-xs-8 d-flex flex-row align-items-center">
                            <Link
                                className="logo-link"
                                to="/"
                                onClick={() => {
                                    setLink(null)
                                }}
                            >
                                <img
                                    style={{ maxWidth: "120px" }}
                                    className="pl-2 pl-md-0"
                                    src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/videojungle+logo.png`}
                                ></img>
                            </Link>
                            <p
                                className="mob-head-circle"
                                style={{
                                    fontSize: "20px",
                                    color: "#da0000",
                                    fontWeight: "bold",
                                    marginBottom: "0px",
                                }}
                            >
                                Circle
                            </p>
                        </div>
                        <div className="search-icon col-sm-2 col-xs-2 flex-row justify-content-center align-items-center">
                            <SearchOutlinedIcon />
                        </div>
                        <div className="navigation col-xl-3 col-md-10">
                            <ul className="navig-ul d-flex flex-row m-0">
                                <li className="navig-li">
                                    <NavLink
                                        className="navig-item"
                                        to="/channels"
                                        onClick={() => {
                                            setLink(null)
                                        }}
                                    >
                                        Channels
                                    </NavLink>
                                </li>
                                <li className="navig-li">
                                    <NavLink
                                        className="navig-item"
                                        to="/channel"
                                        onClick={() => {
                                            setLink(null)
                                        }}
                                    >
                                        Live Video
                                    </NavLink>
                                </li>
                                <li className="navig-li">
                                    <NavLink
                                        className="navig-item"
                                        to="/photo"
                                        onClick={() => {
                                            setLink(null)
                                        }}
                                    >
                                        Live Radio
                                    </NavLink>
                                </li>
                                <li className="navig-li">
                                    <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClickdoc}
                                        className={currentLink === "documents" ? "actives" : ""}
                                    >
                                        Channel Market
                                    </Button>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClosedoc}
                                    >
                                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/documents/doc">
                                            <MenuItem onClick={handleClosedoc}>Doc</MenuItem>
                                        </NavLink>
                                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/documents/pdf">
                                            <MenuItem onClick={handleClosedoc}>Pdf</MenuItem>
                                        </NavLink>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                        <div className="search col-xl-5 col-md-12">
                            <FormControl className={clsx(classes.textField)}>
                                <Input
                                    id="outlined-adornment-weight"
                                    value={values.search}
                                    onChange={(e) => {
                                        setValues({ ...values, search: e.target.value })
                                    }}
                                    onKeyPress={(e) => handleCheckEnter(e)}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon className="searchIcon" />
                                        </InputAdornment>
                                    }
                                    // endAdornment={
                                    //   <InputAdornment position="end">
                                    //     <VideocamIcon className="videoIcon" />
                                    //   </InputAdornment>
                                    // }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight",
                                    }}
                                    labelwidth={0}
                                    placeholder="Search"
                                    disableUnderline
                                />
                            </FormControl>
                        </div>
                        <div className="profile align-items-center col-xl-2 col-md-4 pl-md-0">
                            <div className="header-avatar-container">
                                <Link
                                    to="/channel"
                                    className="header-avatar-link"
                                    onClick={() => {
                                        setLink(null)
                                    }}
                                >
                                    {/* <span className="header-avatar"> */}
                                    {/* <img
                      className="header-avatar-img"
                       src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/squareAva1.png`}
                    /> */}
                                    {/* <span className="user_logo">
                                        <i className="fa fa-user-circle-o"></i>
                                    </span> */}
                                    <img className="user_logo" src={user.profileImage}></img>

                                    {/* </span> */}
                                </Link>
                            </div>

                            {/* <Button className="col-xl-6 col-md-2">
              Bailey
              <ArrowDropDownOutlinedIcon />
            </Button> */}
                            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                                {user.profileName}
                                <ArrowDropDownOutlinedIcon />
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={values.anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleClose}>Login</MenuItem>
                                <MenuItem onClick={handleClose}>Signup</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                {/* <div className="header-below d-flex flex-row  pt-2 pb-2">
        <div className="align-items-center container d-flex flex-row flex-wrap">
          <div className="logo col-xl-1 col-md-2 goto d-flex flex-row align-items-center">
            Goto :
          </div>
          <div className="col-xl-3 col-md-10 col-xs-12">
            <ul className="navigation-goto d-flex flex-row align-items-center justify-content-between justify-content-md-start">
              <li className="navig-li">
                <Link className="navig-item" to="/categories">
                  <FavoriteBorderIcon />
                </Link>
              </li>
              <li className="navig-li">
                <Link className="navig-item" to="/categories">
                  <WatchLaterOutlinedIcon />
                </Link>
              </li>
              <li className="navig-li">
                <Link className="navig-item" to="/categories">
                  <PlayCircleOutlineIcon />
                </Link>
              </li>
              <li className="navig-li">
                <Link className="navig-item" to="/categories">
                  <ShopOutlinedIcon />
                </Link>
              </li>
              <li className="navig-li">
                <Link className="navig-item" to="/categories">
                  <HourglassEmptyOutlinedIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="resume col-xl-6 col-md-6 d-flex flex-row align-items-center">
            <PlayArrowIcon />
            <p>Resume: Daredevil Season 2 : Episode 6</p>
          </div>
        </div>
      </div> */}
                {/* <div className="upload-button">
          <Link   style={{ color: "white" }}
            to="/upload"
            onClick={() => {
              setLink(null);
            }}
          >
            <VideocamIcon />
          </Link>
        </div> */}
            </div>
        </div>
        //Desktop Header
    )
}

// const mapStateToProps = (state) => {
//     return {
//         currentTheme: state.theme,
//     }
// }

// const mapDispatchToProps = {
//     setTheme: setThemeAction,
// }

// export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
