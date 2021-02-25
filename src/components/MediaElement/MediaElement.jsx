import React, { Component } from "react";
import "./MediaElement.scss";
import "mediaelement";
import $ from "jquery";
// Import stylesheet and shims
import "mediaelement/build/mediaelementplayer.min.css";
import "mediaelement/build/mediaelement-flash-video.swf";
import { isMoment } from "moment";

export const MediaElement = class extends Component {
  state = {
    currentsouce: 0,
    videoPalyed: "00",
  };

  success(media, node, instance) {
    const handlecurrentChange = async () => {
      console.log("called");

      await this.setState({ currentsouce: this.state.currentsouce + 1 });
    };
    // Your action when media was successfully loaded
    media.addEventListener("ended", function () {
      console.log("end");

      handlecurrentChange();
    });
    const bufferHandler = async (e) => {
      if (media && media.buffered && media.buffered.length > 0 && media.buffered.end && media.duration) {
        if (e.detail && e.detail.target) {
          let currentTarget = e.detail.target;
          if (currentTarget.played.length > 0) {
            var played = currentTarget.played.end(0);
            var duration = currentTarget.duration;
            let totalPlayed = ((played / duration) * 100).toFixed(2);
            await this.props.onVideoPlayedOnPercentages(totalPlayed, played, duration)
          }
        }
      }
    }
    media.addEventListener("progress", bufferHandler);

  }

  error(media) {
    // Your action when media had an error loading
  }
  // static getDerivedStateFromProps(props, state) {
  //   if (state.currentsouce) {
  //     props.handleSourceChange();
  //   }
  // }
  componentDidUpdate(props, state) {
    if (state.currentsouce != this.state.currentsouce) {
      console.log("called");
      props.handleSourceChange(this.state.currentsouce);
    }
  }
  render() {
    let { videoPalyed } = this.state;
    console.log(videoPalyed)
    const props = this.props,
      sources = props.sources,
      tracks = props.tracks,
      sourceTags = [],
      tracksTags = [];
    for (let i = 0, total = sources.length; i < total; i++) {
      const source = sources[i];
      console.log(i)

      sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
    }

    if (tracks) {
      for (let i = 0, total = tracks.length; i < total; i++) {
        const track = tracks[i];
        tracksTags.push(
          `<track src="${track.src}" kind="${track.kind}" srclang="${
          track.lang
          }"${track.label ? ` label=${track.label}` : ""}>`
        );
      }
    }

    const mediaBody = `${sourceTags.join("\n")}
				${tracksTags.join("\n")}`,
      mediaHtml =
        props.mediaType === "video"
          ? `<video  class="${props.className}" id="${props.id}" width="${
          props.width
          }" height="${props.height}"${
          props.poster ? ` poster=${props.poster}` : ""
          }
            paused="false"
          ${props.controls ? " controls" : ""} 
          ${props.autoplay ? ` autoplay="${props.autoplay}"` : ""} 
            ${props.preload ? ` preload="${props.preload}"` : ""} ${
          props.muted === "true" ? ` muted` : ""
          } paused="true">
					${mediaBody}
				</video>`
          : `<audio id="${props.id}" width="${props.width}" controls ">
					${mediaBody}
				</audio>`;
    return (
      <div id="MediaElement">
        <div dangerouslySetInnerHTML={{ __html: mediaHtml }}></div>
      </div>
    );
  }

  componentDidMount() {
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const options = Object.assign({}, this.props.options, {
      // Read the Notes below for more explanation about how to set up the path for shims
      pluginPath: "./static/media/",
      success: (media, node, instance) => this.success(media, node, instance),
      error: (media, node) => this.error(media, node),
    });

    this.setState({ player: new MediaElementPlayer(this.props.id, options) });
  }

  // componentWillUnmount() {
  //   if (this.state.player) {
  //     this.state.player.remove();
  //     this.setState({ player: null });
  //   }
  // }
};
