import React from "react";
import "./Photo.scss";
import PopularSearchList from "../../components/PopularSearch/PopularSearchList";
import { useState } from "react";
import Model from "./PhotoDisplayModel/Model";
import { Link } from "react-router-dom";
const Photo = () => {
  const Photos = [
    {
      photo: "https://picsum.photos/seed/picsum/700/500",
    },
    {
      photo: "https://picsum.photos/600/900/",
    },

    {
      photo: "https://picsum.photos/id/870/900/900",
    },
    {
      photo: "https://picsum.photos/seed/picsum/700/500",
    },
    {
      photo: "https://picsum.photos/600/900/",
    },

    {
      photo: "https://picsum.photos/id/870/900/900?grayscale",
    },
    {
      photo: "https://picsum.photos/id/237/800/500",
    },
    {
      photo: "https://picsum.photos/seed/picsum/700/500",
    },
    {
      photo: "https://picsum.photos/600/900/",
    },

    {
      photo: "https://picsum.photos/id/870/900/900",
    },
    {
      photo: "https://picsum.photos/seed/picsum/700/500",
    },
    {
      photo: "https://picsum.photos/600/900/",
    },

    {
      photo: "https://picsum.photos/id/870/900/900?grayscale",
    },
    {
      photo: "https://picsum.photos/id/237/800/500",
    },
    {
      photo: "https://picsum.photos/id/870/900/900?grayscale",
    },
    {
      photo: "https://picsum.photos/id/237/800/500",
    },
  ];
  const [ModelState, setModelState] = useState(false);
  const handleModelState = (value) => {
    setModelState(value);
  };
  const [currentImage, setCurrent] = useState(null);
  return (
    <div className="photos-main">
      <PopularSearchList />
      <div className="container">
        <div className="gallery py-4" id="gallery">
          {Photos.map(({ photo }) => {
            var blob = new Blob([photo]);
            console.log(blob);

            return (
              <div
                className="mb-3 pics"
                onClick={() => {
                  setCurrent(photo);
                  handleModelState(true);
                }}
              >
                <img className="img-fluid" src={photo} alt="Card image cap" />
                <div className="actions-overlay p-3 d-flex flex-column justify-content-between">
                  <div className=" d-flex justify-content-end">
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
                      className="action-button"
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
                  </div>
                  <div className=" d-flex justify-content-between">
                    <Link to="/channel" style={{ textDecoration: "none" }}>
                      <div className="card-main-title-avata d-flex align-items-center">
                        <img
                          className="pl-2 pl-md-0"
                          src={`https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/squareAva1.png`}
                        ></img>
                        <span>Sonny</span>
                      </div>
                    </Link>
                    <div className="action-button">
                      <a
                        title="Download photo"
                        href={`${photo}`}
                        target="_blank"
                        download
                      >
                        <svg
                          class="icon"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="32"
                          height="32"
                          aria-hidden="false"
                        >
                          <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Model
        ModelState={ModelState}
        handleModelState={handleModelState.bind(this)}
        currentImage={currentImage}
      />
    </div>
  );
};

export default Photo;
