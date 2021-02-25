import React from "react";
import { Button } from "@material-ui/core";
import "./channelsbar.scss";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import VideocamIcon from "@material-ui/icons/Videocam";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
}));
export default function ChannelsBar() {
  const classes = useStyles();
  const ChannelsTabs = [
    {
      text: "All Channels",
      link: "#",
    },
    {
      text: "Most Popular",
      link: "#popular",
    },
    {
      text: "Trending",
      link: "#trending",
    },
    {
      text: "Most Recent",
      link: "#new",
    },
    {
      text: "A - Z",
      link: "#",
    },
  ];
  return (
    <div className="channels-bar">
      <div className="container pt-3 pb-3 d-flex flex-row justify-content-between">
        <div className="tabs">
          {ChannelsTabs.map((button, index) => {
            return (
              <a href={button.link}>
                {" "}
                <Button
                //   onClick={async () => {
                //     await setTab(index);
                //   }}
                >
                  {button.text}
                </Button>
              </a>
            );
          })}
        </div>
        <div className="search col-4">
          <FormControl className={clsx(classes.textField)}>
            <Input
              id="outlined-adornment-weight"
              //   value={values.search}
              //   onChange={handleChange("weight")}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className="searchIcon" />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              labelWidth={0}
              placeholder="Search Channels ..."
              disableUnderline
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
}
