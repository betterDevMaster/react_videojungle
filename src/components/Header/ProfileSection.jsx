import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";

export const  ProfileSection = (props) => {
  const [currentLink, setLink] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [values, setValues] = React.useState({
    search: "",
    left: false,
    anchorEl: null,
  });
  const open = Boolean(values.anchorEl);
  const handleClickdoc = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosedoc = () => {
    setAnchorEl(null);
    setLink("documents");
  };

  const handleClick = (event) => {
    values.anchorEl = event.currentTarget;
    setValues({ ...values, [values.anchorEl]: event.currentTarget });
  };
  const handleClose = () => {
    values.anchorEl = null;
    setValues({ ...values, [values.anchorEl]: null });
  };

    const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setValues({ ...values, [anchor]: open });
  };

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

    return(    
            <div className="profile align-items-center col-xl-2 col-md-4 pl-md-0">
              <div className="header-avatar-container">
                <Link
                  to="/channel"
                  className="header-avatar-link"
                  onClick={() => {
                    setLink(null);
                  }}
                >
                  {/* <span className="header-avatar"> */}
                  {/* <img
                      className="header-avatar-img"
                       src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/squareAva1.png`}
                    /> */}
                  <span className="user_logo">
                    <img
                      src={props.ownerDetail ? props.ownerDetail.profileImage : ""}
                      style={{ width: "35px", height: "35px" }}
                    />
                  </span>
                  {/* </span> */}
                </Link>
              </div>

              {/* <Button className="col-xl-6 col-md-2">
              Bailey
              <ArrowDropDownOutlinedIcon />
            </Button> */}
              <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {props.ownerDetail ? props.ownerDetail.profileName : ""}
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
    )
}