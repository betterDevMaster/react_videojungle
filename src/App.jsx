import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from "react-router-dom"
import Main from "./containers/MainPage/Main.jsx"
import { createBrowserHistory } from "history"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import "./fonts/fonts.css"
import Header from "./components/Header"
import Footer from "./components/Footer/footer.jsx"
import LeftPanel from "./components/LeftPanel/LeftPanel.jsx"

// Containers
import UploadPage from "./containers/UploadPage/UploadPage"
import Categories from "./containers/categories/Categories.jsx"
import Channels from "./containers/Channels/Channels.jsx"
import SingleChannelPage from "./containers/SingleChannelPage/SingleChannelPage.jsx"
import PopularSearchList from "./components/PopularSearch/PopularSearchList"

import VideoEdit from "./containers/VideoEditPage/Videoedit"
import { VideoPage, VideoPageTabs } from "./containers/VideoPage"
import DocFilesContainer from "./containers/DocFiles/DocFiles.jsx"
import PdfFilesContainer from "./containers/PdfFiles/PdfFiles.jsx"
import Photo from "./containers/Photo/Photo.jsx"
import FileDetail from "./containers/FileDetail"
//Alert
import { REACT_ALERT } from "./store/constants/constants"
import { ReactNotifyAlert } from "react-notify-alert"
// //utils.
import { GetAuth, SetCrossData } from "./utils/auth"
import { ENDPOINT } from "./utils/endpoint"
import request from "./utils/request"
import { getOptions } from "./utils/httpConfig"
// Redux
import { connect } from "react-redux"
import { Provider } from "react-redux"
import store from "./store/reducers/index"
import { onSelectedChannelHandle, onMyChannelListHandle, onSetCrossDomainData } from "./store/actions/action"

/*cross domain data sharing start*/
const customHistory = createBrowserHistory()
class App extends Component {
    async componentDidMount() {
        await this.userAuthenticate()
        await this.initialPageAPICall()
    }

    userAuthenticate = async () => {
        if (window.location.href.split("crossdata=")[1]) {
            const result = await request(
                `${ENDPOINT["GetCrossDomain"]}?crosskey=${window.location.href.split("crossdata=")[1].replace(/[\/\\#]/g, "")}`,
                getOptions({})
            )

            if (result["crossKey"]) {
                let res = SetCrossData(result["crossData"])
                if (res) {
                    setTimeout(() => {
                        window.history.pushState({}, null, `${window.location.origin}/#/`)
                    }, 4000)
                }
            } else {
                window.location.href = `https://www.simportal.net/#/login?callback=${window.location.href}`
            }
        } else if (GetAuth() == null) {
            window.location.href = `https://www.simportal.net/#/login?callback=${window.location.href}`
        }
    }
    initialPageAPICall = async () => {
        let user = GetAuth()
        if (user) {
            let userifo = user["user"]

            let result = await request(`${ENDPOINT["GetChannelInfo"]}?userid=${userifo["userId"]}`, getOptions({}))

            this.props.onSelectedChannelHandle(result["result"][0])
            this.props.onMyChannelListHandle(result["result"])
        }
    }

    /*cross domain data sharing end*/
    render() {
        // const { reactalert } = { ...this.props }
        // console.log("App: ------------ ", reactalert)
        return (
            <HashRouter history={customHistory}>
                <Header />
                <PopularSearchList />
                <div id="App">
                    <LeftPanel />
                    <div className="router-right-area">
                        <Route exact path="/" component={Main} />
                        <Route exact path="/search/:data" component={Main} />
                        <Route path="/upload" component={UploadPage} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/channels" component={Channels} />
                        <Route path="/channel" component={SingleChannelPage} />
                        <Route path="/upload-edit" component={VideoEdit} />
                        {/* <Route path="/single-video" component={VideoPage} /> */}
                        {/* <Route path="/single-video-tabs" component={VideoPageTabs} /> */}
                        <Route path="/single-video-tabs/:youtubeurl" component={VideoPageTabs} />
                        <Route path="/file-detail" component={VideoPageTabs} />
                        <Route path="/documents/doc" component={DocFilesContainer} />
                        <Route path="/documents/pdf" component={PdfFilesContainer} />
                        <Route path="/photo" component={Photo} />
                        <Route path="/file-details" component={FileDetail} />
                    </div>
                    {/* <ReactNotifyAlert
                        isOpen={reactalert["open"]}
                        type={reactalert["type"]}
                        title={reactalert["title"]}
                        infoText={reactalert["message"]}
                        onActionHandle={(e) => this.onActionHandle(e)}
                    /> */}
                </div>
                {/* <Footer /> */}
            </HashRouter>
        )
    }
}
// export default App;
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        reactalert: state.settingReducer.reactalert,
        mystate: state.settingReducer.test,
        authReducer: state.authReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReactAlert: (obj) => {
            dispatch({ type: REACT_ALERT, data: obj })
        },
        onSelectedChannelHandle: (channel) => {
            dispatch(onSelectedChannelHandle(channel))
        },
        onMyChannelListHandle: (list) => {
            dispatch(onMyChannelListHandle(list))
        },
        onSetCrossDomainData: (data) => {
            dispatch(onSetCrossDomainData(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
