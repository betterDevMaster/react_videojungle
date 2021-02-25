import languageReducer from "./languageReducer/languageReducer"
import { videoUpload } from "./videoUpload"
import channelReducer from "./channelReducer/channelReducer"
import settingReducer from "./settingReducer/settingReducer"
import authReducer from "./authReducer/authReducer"
import videoSearch from "./videoSearch"
import { combineReducers } from "redux"

export default combineReducers({
    videoUpload,
    settingReducer: settingReducer,
    languageReducer: languageReducer,
    channelReducer: channelReducer,
    authReducer,
    videoSearch,
})
