import { PROD_API } from "./common"

//KEY NAME MUST UNIQUE AND DO NOT CHANGE WIHTOUT ASKING !!
export const ENDPOINT = {
    GetRegionByCountry: `${PROD_API.UTILITY_MICROSERVICE}/api/Region/GetRegionByCountry`,
    VerifyEmail: `${PROD_API.LOGIN_MICROSERVICE}/api/account/VerifyEmail`,
    CreateNewUser: `${PROD_API.LOGIN_MICROSERVICE}/api/account/CreateNewUser`,
    CreateNewUserBySNS: `${PROD_API.LOGIN_MICROSERVICE}/api/account/CreateNewUserBySNS`,
    CreateInquiry: `${PROD_API.LOGIN_MICROSERVICE}/api/Inquiry/CreateInquiry`,
    SocialLogin: `${PROD_API.LOGIN_MICROSERVICE}/api/SNSLogin/SocialLogin`,
    LoginJungleTalk: `${PROD_API.LOGIN_MICROSERVICE}/api/account/LoginJungleTalk`,
    GetOTPVerify: `${PROD_API.LOGIN_MICROSERVICE}/api/account/GetOTPVerify`,
    ResetJungleTalkPassword: `${PROD_API.LOGIN_MICROSERVICE}/api/account/ResetJungleTalkPassword`,
    SetSettingTab: `${PROD_API.SETTING_MICROSERVICE}/api/settings/SaveSettings`,
    GetSettingInfo: `${PROD_API.SETTING_MICROSERVICE}/api/settings/GetSettings`,
    GetChannelInfo: `${PROD_API.CHANNEL_MICROSERVICE}/api/channel/GetChannelInfo`,
    SearchYoutubeVideo: `${PROD_API.SOCIALMEDIA_MICROSERVICE}/api/Youtube/Search`,
    SearchDetailYoutubeVideoById: `${PROD_API.SOCIALMEDIA_MICROSERVICE}/api/Youtube/SearchById`,
    SearchYoutubeDefaultVideo: `${PROD_API.SOCIALMEDIA_MICROSERVICE}/api/Youtube/DefaultVideos`,
    GetCrossDomain: `${PROD_API.LOGIN_MICROSERVICE}/api/CrossDomain/GetCrossDomain`,
}
