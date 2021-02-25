import React, { useState, useEffect } from "react";
import "./uploadPage.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { videoUpload as videoUploadAction } from "../../store/actions/action";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import swal from "sweetalert";
import detect from "detect-file-type";
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const UploadPage = ({ videoUploadAction }) => {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileInputRef, setFileInputRef] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    videoUploadAction(null);
    const ref = React.createRef();
    setFileInputRef(ref);
  }, []);

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    // detect.fromFile(file, function (err, result) {
    //   if (err) {
    //     return console.log(err);
    //   }

    //   console.log(result); // { ext: 'jpg', mime: 'image/jpeg' }
    // });
    // const extension = file.type.split("/");
    // if (
    //   selectedValue === "video" &&
    //   !file.name.match(/\.(avi|mp4|mpeg|ogg)$/i)
    // ) {
    //   await seterror(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );

    //   setFileUpload(null);
    //   videoUploadAction(null);
    //   return swal(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );
    // }
    // if (selectedValue === "music" && !file.name.match(/\.(mp3)$/i)) {
    //   await seterror(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );

    //   setFileUpload(null);
    //   videoUploadAction(null);
    //   return swal(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );
    // }

    // if (
    //   selectedValue === "files" &&
    //   file.type != "application/pdf" &&
    //   file.type != "application/word"
    // ) {
    //   await seterror(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );

    //   setFileUpload(null);
    //   videoUploadAction(null);
    //   return swal(
    //     `You have added ${extension[0]} file, the file is incorrect, pls try again`
    //   );
    // }
    if (file) {
      const extensionarray = file.name.split(".");
      const type = extensionarray[extensionarray.length - 1];
      if (
        !file.name.match(/\.(doc|docx|pdf|mp4|mp3|html|gif|raw|jpeg|jpg|png)$/i)
      ) {
        return swal(
          `You have selected ${type} file, please select correct file`
        );
      }
      setFileUpload(file);

      videoUploadAction(file);
    }
    // seterror(null);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-main d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-around align-items-center">
        <div className="upload-section d-flex flex-column align-items-center ">
          <div className="upload-icon-btn-container">
            <button className="upload-icon-btn" onClick={() => handleClick()}>
              <img
                id="uploadImg"
                className="cv cvicon-cv-upload-video"
                src="https://dxnqsgisijbjj.cloudfront.net/videoJungle/Light+Template/img/uploadIcon.png"
              />
            </button>
          </div>
          {/* <div className="upload">
            <p>What kinds of files would like to upload on your channel?</p>
            <div className="d-flex justify-content-between px-5">
              <div className="d-flex align-items-center mt-3">
                <Radio
                  checked={selectedValue === "video"}
                  onChange={handleChange}
                  value="video"
                  color="default"
                  name="radio-button-demo"
                />
                <span className="title ml-2">Video</span>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Radio
                  checked={selectedValue === "music"}
                  onChange={handleChange}
                  value="music"
                  color="default"
                  name="radio-button-demo"
                />
                <span className="title ml-2">Music</span>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Radio
                  checked={selectedValue === "files"}
                  onChange={handleChange}
                  value="files"
                  color="default"
                  name="radio-button-demo"
                />
                <span className="title ml-2">Files</span>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="download" onClick={() => handleClick()}>
                {fileUpload ? "DOWNLOAD" : "UPLOAD"}
              </button>
            </div>
          </div> */}
          <div className="upload-title" onClick={() => handleClick()}>
            Select File to upload
          </div>

          <div className="drop">
            <input
              className="fileInput"
              type="file"
              ref={fileInputRef}
              onChange={(e) => handleImageChange(e)}
            />
            <div onClick={() => handleClick()} className="upload-text">
              <div className="px-5">
                we accept file types only doc, docx, pdf, mp4, mp3, html, gif,
                raw, jpeg, jpg, png
              </div>
            </div>
          </div>
          <div className="previewComponent">
            <div className="imgPreview">
              {fileUpload && (
                <div className="upload-text">{fileUpload.name}</div>
              )}
            </div>
          </div>
          {fileUpload && (
            <Link to="/upload-edit" style={{ textDecoration: "none" }}>
              <Button className="upload-btn">upload file</Button>
            </Link>
          )}
        </div>
        <div className="terms">
          By submitting your videos to circle, you acknowledge that you agree to
          circle's <span className="terms-text">Terms of Service</span> and{" "}
          <span className="terms-text">Community Guidelines</span>. Please be
          sure not to violate others' copyright or privacy rights. Learn more
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uploadFile: state.videoUpload,
  };
};

const mapDispatchToProps = {
  videoUploadAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);
