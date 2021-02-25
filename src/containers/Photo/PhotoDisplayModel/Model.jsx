import React from "react";
import "./Model.scss";
import { Link } from "react-router-dom";
export default function Model({ ModelState, handleModelState, currentImage }) {
  console.log(ModelState);
  return (
    <div className="photo-model-main">
      <div
        className={`modalDialog ${
          ModelState ? "modelDialogOpen" : "modelDialogClose"
        }`}
      >
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              handleModelState(false);
            }}
            class="crossbutton"
            type="button"
          >
            <svg
              class="cross"
              version="1.1"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              aria-hidden="false"
            >
              <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
            </svg>
          </button>
          <div className="d-flex flex-column justify-content-between align-items-center model-content-main">
            <div className="top-actions d-flex justify-content-between">
              <Link to="/channel" style={{ textDecoration: "none" }}>
                <div className="card-main-title-avata d-flex align-items-center">
                  <img
                    className="pl-2 pl-md-0"
                    src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/squareAva1.png`}
                  ></img>
                  <span>Sonny</span>
                </div>
              </Link>
              <div className="d-flex">
                <button
                  type="button"
                  title="Like photo"
                  className="action-button mr-3"
                >
                  <svg
                    className="icon"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    aria-hidden="false"
                  >
                    <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to collection"
                  className="action-button mr-3"
                >
                  <svg
                    className="icon"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    aria-hidden="false"
                  >
                    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                  </svg>
                </button>
                <div className="download-button">
                  <button className="download mr-1">Download free</button>
                  <button
                    role="button"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="action-button-d"
                    title="Choose your download size"
                  >
                    <svg
                      class="icon"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      aria-hidden="false"
                    >
                      <path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="zoomed-image">
              <img src={currentImage} />
            </div>
            <div className="bottom-actions d-flex justify-content-between align-items-center">
              <p>Another picture of the Milky Way core and Rho Ophiuchi.</p>
              <div>
                <button type="button" className="action-button mr-3">
                  <div class="_10F2J">
                    <svg
                      class="icon"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      aria-hidden="false"
                    >
                      <path d="M0 26c0 1.7.2 3.3.6 4.9.2.9.7.9 1 0 2.1-5.3 5.5-10.3 11.1-11.3h3.3v4.4c0 2 1.2 2.6 2.6 1.4l12.8-11c.7-.6.7-1.6 0-2.3l-12.8-11c-1.4-1.3-2.6-.6-2.6 1.3v4.7c-9.6 1.6-16 9.4-16 18.9z"></path>
                    </svg>
                    <span class="_3UPwX">Share</span>
                  </div>
                </button>
                <button type="button" class="action-button">
                  <svg
                    class="icon"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    aria-hidden="false"
                  >
                    <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z"></path>
                  </svg>
                  <span>Info</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
