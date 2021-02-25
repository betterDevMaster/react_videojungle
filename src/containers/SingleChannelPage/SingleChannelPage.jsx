import React, { useState } from "react";
import "./SingleChannelPage.scss";
import Grid from '@material-ui/core/Grid';
import imageUrl from "../../assets/imageUrl";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import { Button } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ViewListOutlinedIcon from "@material-ui/icons/ViewListOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import Videocard from "../../components/VideoCard/videocard";
import { featuredVideos } from "../../dummyData/featuredVideos";
import Paginationbar from "../../components/PaginationBar/paginationbar";
import { playlist } from "../../dummyData/playLists";
import ChannelsData from "../../dummyData/channels";
import PlaylistCard from "../../components/PlayListCard/playlistCard";
import SpecificChannelCard from "../../components/SpecificChannelCard/specificChannelCard";
import { SubscribeButton } from "../../components/UIComponents";
import Blog from "./Blog/Blog";
import QuestionAnswer from "./Q&A/QuestionAnswer";
import ChannelInfo from "./ChannelInfo/ChannelInfo";

export default function SingleChannelPage({ history }) {
  const [currentTab, setTab] = useState(0);
  const Tabs = ["Channel Info", "Videos", "Playlist", "Channels"];

  const goToUpload = () => history.push("/upload");

  var DataArray = {};
  if (currentTab < 4) {
    switch (currentTab) {
      case 1:
        DataArray = featuredVideos[0].map((data) => {
          return (
            <Grid item xs={12} xl={3} lg={4} md={6} sm={12}>
              <Videocard data={data} />
            </Grid>
          );
        });

        break;
      case 2:
        DataArray = playlist[0].map((data) => {
          return (
            <Grid item xs={12} xl={3} lg={4} md={6} sm={12}>

              <PlaylistCard data={data} />
            </Grid>
          );
        });
        break;
      case 3:
        DataArray = ChannelsData.map((data) => {
          return (
            <Grid item xs={12} xl={3} lg={4} md={6} sm={12}>
              <SpecificChannelCard data={data} />
            </Grid>
          );
        });
        break;
    }
  }
  return (
    <div className="channel-main">
      <div className="banner-main d-flex flex-row flex-wrap">
        <div className="banner " style={{ backgroundImage: `url(${imageUrl}/channel-banner.png` }} >
          <div className="text container">
            <h2>Good Study Channel</h2>
            <p>Welcome to Good Study Channel</p>
          </div>
        </div>
        <div className="nav-section container d-flex flex-row flex-wrap pb-3">
          <div className="avatar col-xl-2 col-md-12 pr-0">
            <div className="avatar-block">
              <img className="avatar-img" src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/avatar3.png`} />
            </div>
          </div>
          <div className="nav col-xl-10 col-md-12 d-flex flex-column justify-content-around">
            <div className="upper d-flex flex-row justify-content-end pl-0">
              <div className="social col-3 d-flex align-items-center pt-3 pb-3">
                <p className="col-3 p-0 mb-0">Social</p>
                <div className="col-9 p-0 d-flex flex-row justify-content-around">
                  <FacebookIcon />
                  <TwitterIcon />
                  <ShopOutlinedIcon />
                </div>
              </div>
            </div>
            <div className="lower d-flex pt-md-4 flex-row flex-wrap pb-3">
              <div className="col-xl-2 col-md-12 d-flex flex-row align-items-center title pl-md-2">
                <h4 className="mb-0 mr-3">GOOD STUDY CHANNEL</h4>
                {/* <CheckBoxOutlinedIcon /> */}
              </div>
              <div className="col-xl-7 col-md-9 pt-md-4  d-flex flex-row tabs pl-0">
                {Tabs.map((tab, index) => {
                  return (
                    <Button
                      style={{ color: index === currentTab && "red" }}
                      onClick={async () => {
                        if (index < 4) {
                          await setTab(index);
                        }
                      }}
                    >
                      {tab}
                    </Button>
                  );
                })}
                <Button
                  style={{ color: currentTab === 4 && "red" }}
                  onClick={async () => {
                    await setTab(4);
                  }}
                >
                  Blog
                </Button>
                <Button
                  style={{ color: currentTab === 5 && "red" }}
                  onClick={async () => {
                    await setTab(5);
                  }}
                >
                  Q&A
                </Button>
              </div>
              <SubscribeButton
                classProps="hidden-xs"
                subscribeCount="10"
                hrefProps="#"
              />
            </div>
          </div>
        </div>
      </div>
      {currentTab < 4 && currentTab != 0 && (
        <div className="filter-bar container d-flex flex-row justify-content-between pt-3 pb-3">
          <div>
            <Button
              onClick={goToUpload}
              className="d-flex flex-row align-items-center"
            >
              Upload <ArrowDropDownOutlinedIcon />
            </Button>
          </div>
          <div className="d-flex flex-row">
            <div>
              <Button className="d-flex flex-row align-items-center">
                Date Added (Newest) <ArrowDropDownOutlinedIcon />
              </Button>
            </div>
            <div>
              <ViewListOutlinedIcon />
              <AppsOutlinedIcon />
            </div>
          </div>
        </div>
      )}

      {currentTab < 4 && currentTab != 0 && (
        // <div className="d-flex flex-row container flex-wrap">
        <Grid container spacing={2}>
          {DataArray}
        </Grid>
        /* </div> */
      )}
      {currentTab === 4 && (
        <div className="container">
          <Blog />
        </div>
      )}
      {currentTab === 5 && (
        <div className="container">
          <QuestionAnswer />
        </div>
      )}
      {currentTab === 0 && (
        <div className="container">
          <ChannelInfo />
        </div>
      )}
      {/* {currentTab < 4 && currentTab != 0 && <Paginationbar />} */}
    </div>
  );
}
