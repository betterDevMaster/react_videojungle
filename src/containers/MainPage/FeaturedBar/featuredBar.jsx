import React from "react";
import "./featuredBar.scss";
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
export default function FeaturedBar(props) {
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
    <div id="featuredBar">
    <div  className="main d-flex flex-row justify-content-between pt-3 pb-3">
      <div className="nav-buttons underline-magical">
        {props.data &&
          props.data.map((item, index) => {
            return (
              <Button onClick={() => {  props.handleTab(index);}} className={props.currentTab === index ? "active" : ""}  >
                {item}
              </Button>
            );
          })}
      </div>
      <div>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Sort By
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
  );
}
