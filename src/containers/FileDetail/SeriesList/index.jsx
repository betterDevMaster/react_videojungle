import React from "react";

// Components
import BookingTabs from '../BookingTabs';
import SeriesDataList from '../SeriesDataList'


export default function SeriesList(props) {
  let { data, currentBookingTab, activateTab, goToPage } = props;
  return (
    <form id="formSeriesList" className="js_form_series_list" action="/order/checkout" method="post">
      <input type="hidden" name="t" defaultValue={1590590113} />
      <input type="hidden" name="act" defaultValue="buy" />


      <BookingTabs currentActiveTab={currentBookingTab} activateTab={activateTab}/>

      <SeriesDataList data={data.length > 0 ? data[currentBookingTab] : []} goToPage={goToPage}/>

    </form>
  );
}
