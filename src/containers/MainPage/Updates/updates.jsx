import React from "react";
import "./updates.scss";
import Button from "@material-ui/core/Button";
import imageUrl from "../../../assets/imageUrl";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PresentToAllOutlinedIcon from "@material-ui/icons/PresentToAllOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
export default function Updates() {
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
    <div className="updates-main container pt-2 pb-2">
      <div className="heading d-flex flex-row justify-content-between">
        <Button>Updates from Subscriptions</Button>
        <div>
          <Button
            className="col-xl-6 col-md-2"
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
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
            <MenuItem
              className="d-flex flex-row justify-content-between"
              onClick={handleClose}
            >
              <EventNoteOutlinedIcon />
              Recent
            </MenuItem>
            <MenuItem
              className="d-flex flex-row justify-content-between"
              onClick={handleClose}
            >
              <AssessmentOutlinedIcon />
              Viewed
            </MenuItem>
            <MenuItem
              className="d-flex flex-row justify-content-between"
              onClick={handleClose}
            >
              <StarBorderOutlinedIcon />
              Top Rated
            </MenuItem>
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
      <div className="update d-flex flex-row flex-nowrap flex-sm-wrap pt-2 pb-2">
        {Array.from({ length: 12 }, (_, i) => {
          return (
            <div className="col-xl-1 update-container-link col-lg-2 col-xs-3 col-sm-2 d-flex flex-row justify-content-center ">
              <a className="update-link" href="#">
                <img
                  className="update-link-img"
                  src={`${imageUrl}/ava${i + 1}.png`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
