import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import { css } from "@emotion/core"

import YouTube from "youtube-sr"
import YoutubeSearch from "youtube-api-search-reloaded"

import { TextField } from "@material-ui/core"

import Updates from "./Updates/updates"
import FeaturedVideos from "./FeaturedVideos/featuredVideos"
import BannerImages from "./BannerImages/BannerImages.jsx"
import { featuredVideos, regionVideos } from "./../../dummyData/featuredVideos"
import { Photos } from "./../../dummyData/Photos"
import { Books } from "./../../dummyData/Books"
import { Webtoon } from "./../../dummyData/Webtoon"
import { playlist } from "./../../dummyData/playLists"
import { DocFiles } from "./../../dummyData/Documents"
import Videocard from "./../../components/VideoCard/videocard"
import PhotosCard from "./../../components/PhotosCard/PhotosCard"
import BooksCard from "./../../components/BooksCard/BooksCard"
import WebtoonCard from "./../../components/WebtoonCard/WebtoonCard"
import FeaturedBar from "./FeaturedBar/featuredBar.jsx"
import { ENDPOINT } from "../../utils/endpoint"
import { getOptions, postOptions } from "../../utils/httpConfig"
import request from "../../utils/request"
import "./Main.scss"

const Main = () => {
    const featuredNav = ["Video", "Photo", "Radio/Music"]
    const [currentTab, setCurrentTab] = React.useState(0)
    const handleTab = (currentTab) => {
        setCurrentTab(currentTab)
    }
    const [searchvalue, setSearchValue] = useState("")
    const [yotubedata, setYoutubeData] = useState(null)

    const { data } = useParams()
    const youtubeState = useSelector((state) => state.videoSearch)
    // const countryCode = localStorage.getItem("MY_REGION") ? JSON.parse(localStorage.getItem("MY_REGION")).countryCode : "US"
    const countryCode = "JP"
    useEffect(() => {
        setYoutubeData(null)
        // {"countryCode":"KR","regionId":"022404","regionName":"Korea","shortDescription":" ","isActive":true}
        if (youtubeState.key !== "") {
            videoSearch(youtubeState.key)
            // searchYoutube(youtubeState.key, countryCode)
        } else {
            searchYoutube("", countryCode)
        }
    }, [youtubeState])

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        searchYoutube(e.target.value, countryCode)
    }

    const searchYoutube = async (text = "", regCode = "") => {
        // debugger
        let res =
            text !== ""
                ? await request(
                      `${ENDPOINT["SearchYoutubeVideo"]}?searchtext=${encodeURIComponent(text)}&regionCode=${regCode}`,
                      getOptions({})
                  )
                : await request(`${ENDPOINT["SearchYoutubeDefaultVideo"]}?regionCode=${regCode}`, postOptions({}))
        setYoutubeData(res)
    }
    console.log("Main: youtubeState: ----------- ", youtubeState, yotubedata)

    //Youtube video API search ---- start
    const opts = {
        maxResults: 10,
        key: "AIzaSyBZRmOzo5mQ4Vp867qySD1iz_3rebVEmUg",
    }
    const videoSearch = (term) => {
        YouTube.search("dance", { limit: 3 })
            .then((x) => console.log(x))
            .catch(console.error)

        // const params = {
        //     part: "snippet",
        //     maxResults: 10,
        //     type: "video",
        //     key: "AIzaSyBZRmOzo5mQ4Vp867qySD1iz_3rebVEmUg",
        //     term: term,
        // }

        // YoutubeSearch({ params })
        //     .then((data) => console.log(data))
        //     .catch((error) => console.log(error))

        // window.YouTube.search(term, { limit: 3 })
        //     .then((x) => console.log(x))
        //     .catch(console.error)
    }
    //Youtube video API search ---- end

    return (
        <>
            {!yotubedata && (
                <div className="loaderDiv">
                    <div className="nb-spinner"></div>
                    <img
                        className="loader"
                        src="https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/videojungle+logo.png"
                        alt="logo"
                    />
                </div>
            )}
            <div id="Main">
                {yotubedata && <FeaturedVideos data2={searchvalue} data={yotubedata} card={Videocard} type="videos" />}
                {/* {yotubedata.loading && <RingLoader css={override} size={200} color={"#123abc"} loading={true} />} */}
                {/* {!yotubedata && <h1> Connection wating.</h1>} */}
                {/* <form>
                <TextField name="search" value={searchvalue} onChange={handleChange} />
            </form>
            <BannerImages /> */}
                {/* <FeaturedBar data={featuredNav} currentTab={currentTab} handleTab={handleTab} /> */}
                {/* {currentTab === 1 && <FeaturedVideos data={Photos} card={PhotosCard} type="photos" />} */}
                {/* {currentTab === 2 && <FeaturedVideos data={Webtoon} card={WebtoonCard} type="webtoon" />}
      {currentTab === 3 && <FeaturedVideos data={Books} card={BooksCard} type="books" />} */}
                {/* {currentTab === 2 && <FeaturedVideos data={regionVideos} card={Videocard} type="videos" />}
      {currentTab === 3 && <FeaturedVideos data={playlist} card={PlaylistCard} type="playlist" />}
      {currentTab === 4 && <FeaturedVideos data={DocFiles} card={Channelcard} type="documents" />} */}
                {/* <Paginationbar /> */}
            </div>
        </>
    )
}

export default Main
