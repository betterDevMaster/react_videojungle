import React from "react";
import "./footer.scss";
import imageUrl from "../../assets/imageUrl";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PresentToAllOutlinedIcon from "@material-ui/icons/PresentToAllOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import { Divider } from "@material-ui/core";

export default function Footer() {
  const [values, setValues] = React.useState({
    anchorEl: null,
  });
  const open = Boolean(values.anchorEl);
  console.log(values.anchorEl);
  const handleClick = (event) => {
    values.anchorEl = event.currentTarget;
    console.log(values, open);
    setValues({ ...values, [values.anchorEl]: event.currentTarget });
  };

  const handleClose = () => {
    values.anchorEl = null;
    setValues({ ...values, [values.anchorEl]: null });
  };
  return (
    <div className="footer-main">
      <div className="container footer-desktop pt-5 pb-5 d-flex flex-row">
        <div className="footer-left d-flex flex-row col-xl-9 ">
          <div className=" mr-2 col-4">
            <img
              style={{ maxWidth: "170px", maxHeight: "70px" }}
              className="pl-2 pl-md-0"
              src={require("../../assets/reversedlogo.png")}
            ></img>
          </div>
          <div className="navigations d-flex flex-column  col-6">
            <ul className="upper d-flex flex-row p-3 ">
              <li>About</li>

              <li>Copyright</li>
              <li>Advertise</li>
              <li>Help</li>
            </ul>
            <ul className="lower d-flex flex-row p-3">
              <li>Terms</li>
              <li>Privacy</li>

              <li>Copyrights 2016 azyrusthemes.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-right d-flex flex-row col-xl-3 p-0  align-items-end justify-content-between">
          <ul className="d-flex flex-row ">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
          <div>
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Languages
              <ArrowDropDownOutlinedIcon />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={values.anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              style={{ color: "grey" }}
            >
              <MenuItem
                onClick={handleClose}
                className="d-flex flex-row justify-content-between"
              >
                <PresentToAllOutlinedIcon />
                Relevent
              </MenuItem>
              <Divider />
              <MenuItem
                className="d-flex flex-row justify-content-between"
                onClick={handleClose}
              >
                <EventNoteOutlinedIcon />
                Recent
              </MenuItem>
              <Divider />
              <MenuItem
                className="d-flex flex-row justify-content-between"
                onClick={handleClose}
              >
                <AssessmentOutlinedIcon />
                Viewed
              </MenuItem>
              <Divider />
              <MenuItem
                className="d-flex flex-row justify-content-between"
                onClick={handleClose}
              >
                <StarBorderOutlinedIcon />
                Top Rated
              </MenuItem>
              <Divider />
              <MenuItem
                className="d-flex flex-row justify-content-between"
                onClick={handleClose}
              >
                <QueryBuilderOutlinedIcon />
                Longest
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="footer-mobile pt-4 pb-4 d-flex flex-column align-items-center">
        <div className="d-flex flex-row align-items-center">
          <img src={`${imageUrl}/logo.png`}></img>
          <p className="ml-2">Circle</p>
        </div>
        <ul className="navigation-mobile upper d-flex flex-row p-3 ">
          <li>About</li>
          <li>Press</li>
          <li>Copyright</li>
          <li>Advertise</li>
          <li>Help</li>
        </ul>
        <div className="icons pt-3 pb-3 d-flex flex-row col-xl-3  justify-content-center">
          <ul className="d-flex flex-row ">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
          <Button>
            Language <ArrowDropDownOutlinedIcon />
          </Button>
        </div>
        <ul className="lower d-flex flex-row p-3">
          <li>Terms</li>
          <li>Privacy</li>

          <li>Copyrights 2016 azyrusthemes.com</li>
        </ul>
      </div>
    </div>
  );
}
