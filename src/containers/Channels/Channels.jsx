import React, { useState } from "react";
import "./channels.scss";
import ChannelsBar from "./ChannelsBar/channelsBar";
import SpecificChannelCard from "../../components/SpecificChannelCard/specificChannelCard";
import ChannelsData from "../../dummyData/channels";
import ChannelsTypebar from "./ChannelsTypeBar/channelsTypebar";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import PopularSearchList from "../../components/PopularSearch/PopularSearchList";
export default function Channels() {
  const popularChannels = ChannelsData.filter((channel) => {
    return channel.isPopular;
  });
  const TrendingChannels = ChannelsData.filter((channel) => {
    return channel.isTrending;
  });
  const MostRecentChannels = ChannelsData.sort(function (a, b) {
    return a.uploadedOn - b.uploadedOn;
  });
  const [newChannelsToShow, setQuantity] = useState(4);

  return (
    <div className="channels-main">
      <PopularSearchList />
      <ChannelsBar
      // categories={categories}
      // handlefilteredCategories={handlefilteredCategories.bind(this)}
      />
      <ChannelsTypebar id="popular" data={{ title: "Most Popular" }} />
      <div
        className="container d-flex flex-row flex-wrap mt-3"
        style={{ borderBottom: "1px solid #eceff0" }}
      >
        {" "}
        {popularChannels.map((data) => {
          return (
            <div className="col-xl-3 col-sm-4 col-xs-12 mb-5">
              {" "}
              <SpecificChannelCard data={data} />
            </div>
          );
        })}
      </div>
      <ChannelsTypebar id="trending" data={{ title: "Trending" }} />
      <div
        className="container d-flex flex-row flex-wrap mt-3"
        style={{ borderBottom: "1px solid #eceff0" }}
      >
        {" "}
        {TrendingChannels.map((data) => {
          return (
            <div className="col-xl-3 col-sm-4 col-xs-12 mb-5">
              {" "}
              <SpecificChannelCard data={data} />
            </div>
          );
        })}
      </div>
      <ChannelsTypebar id="new" data={{ title: "New Channels" }} />
      <div className="container d-flex flex-row flex-wrap mt-3">
        {" "}
        {MostRecentChannels.map((data, index) => {
          if (index < newChannelsToShow) {
            return (
              <div className="col-xl-3 col-sm-4 col-xs-12 mb-5">
                {" "}
                <SpecificChannelCard data={data} />
              </div>
            );
          }
        })}
        <div className="container expansion-bar d-flex flex-row justify-content-between mb-4">
          <div className="col-5"></div>
          <div
            className="col-1 d-flex flex-row justify-content-center"
            onClick={() => {
              setQuantity(newChannelsToShow + 8);
            }}
          >
            <ArrowDownwardOutlinedIcon fontSize="large" />
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}
