import React from "react"
import imageUrl from "../../../../assets/imageUrl"
import { SubscribeButton } from "../../../../components/UIComponents"
import NotificationsOffOutlinedIcon from "@material-ui/icons/NotificationsOffOutlined"
export const ChanelDescription = ({ subscriptionCount }) => (
    <div className="author-head">
        <a href="#" className="author-avatar">
            <img src={`${imageUrl}/categories/channel-1.png`} className="author-avatar-img" />
        </a>
        <div className="chanel-short-block">
            <div className="chanel-short-info">
                <a className="chanel-name" href="#">
                    NaughtyDog
                </a>
                <span className="chanel-video-count">. 52 Videos</span>
                <span className="notification-icon">
                    <NotificationsOffOutlinedIcon />
                </span>
            </div>
            <SubscribeButton classProps="hidden-xs" subscribeCount={subscriptionCount} hrefProps="#" />
        </div>
    </div>
)
