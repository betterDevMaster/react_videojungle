import React from "react";
import "./nodata.scss";
const NoData = () => {
  return (
    <div id="no-data">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center no-data-main">
        <div className="content">
          <p>No Data</p>
          <p>Please download SIMBASE to add and manage your contents</p>
        </div>
        <button className="download">DOWNLOAD</button>
      </div>
    </div>
  );
};

export default NoData;
