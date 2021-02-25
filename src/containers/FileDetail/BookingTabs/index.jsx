import React from "react";
import './styles.scss';


export default function BookingTabs(props) {
  return (
    <div className="series_buy_tab">
      <ul className="rsg_tab01">
        <li>
          <div className="link_wrap"> <a className={`${props.currentActiveTab === 0 ? 'active' : ''}`} onClick={()=>{props.activateTab(0)}}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>대여하기</font></font></a>{/* active class 붙여서 활성화 */}</div>
        </li>
        <li>
          <div className="link_wrap"> <a className={`${props.currentActiveTab === 1 ? 'active' : ''}`} onClick={()=>{props.activateTab(1)}}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>구매하기</font></font></a>
          </div>
        </li>
      </ul>
    </div>
  );
}
