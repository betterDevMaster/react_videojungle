import React, { useEffect, useState } from "react"
import swal from "sweetalert"
import "./VideoEdit.scss"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import CategorySelection from "./CategorySelection/categorySelection"
import { Button, MenuItem } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import IconButton from "@material-ui/core/IconButton"
import { Card, CardActionArea, CardMedia, TextField, Typography, Checkbox, FormGroup, FormControlLabel } from "@material-ui/core"
import MediaPreview from "../../components/MediaPreview"
import axios from "axios"

const SERVICE_IP = "https://localhost:44370"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: 8,
        borderRadius: 4,
        backgroundColor: "#eceff0",
        "& .MuiLinearProgress-bar": {
            borderRadius: 4,
            backgroundColor: "#da0000",
        },
    },
    color: {
        padding: "8px",
        "& .MuiIconButton-label": {
            color: "#2e2e2e",
        },
        "&:hover .MuiIconButton-label": {
            color: "#da0000",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "30px",
        },
    },
    imageCard: {
        maxWidth: 345,
        margin: "0 auto",
    },
}))

const VideoEdit = ({ uploadFile, history }) => {
    function getFileTypeByExtension(file) {
        // Check video type
        if (uploadFile?.file?.name?.match(/\.(avi|mp4|mpeg|ogg)$/i)) {
            return "video"
        }

        // Check image type
        if (uploadFile?.file?.name?.match(/\.(gif|raw|jpeg|jpg|png)$/i)) {
            return "image"
        }

        // Check document type
        if (uploadFile?.file?.name?.match(/\.(doc|docx|pdf)$/i)) {
            return "document"
        }

        // Check mp3 type
        if (uploadFile?.file?.name?.match(/\.(mp3)$/i)) {
            return "mp3"
        }

        // Check html type
        if (uploadFile?.file?.name?.match(/\.(html)$/i)) {
            return "html"
        }
    }

    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [isMonetize, setIsMonetize] = useState(false)
    const [description, setDescription] = useState("")
    const [options, setOptions] = useState(null)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [thumbnailImg, setThumbnailImg] = useState(null)
    const [level, setLevel] = useState(0)
    const [privacy, setPrivacy] = useState(0)
    const [contentType, setContent] = useState(0)
    const [language, setLanguage] = useState("")
    const [isUploadToYoutube, setIsUploadToYoutube] = useState(false)
    const [youtubeChannelId, setYoutubeChannelId] = useState("")

    const [uploadPercentage, setUploadPercentage] = useState(100)
    const [sizeFile, setSizeFile] = useState(0)
    const [timeLeft, setTimeLeft] = useState(0)
    const [cancelUpload, setCancelUpload] = useState(axios.CancelToken.source())
    const [filetypes, setfiletype] = useState(null)
    const [uploadInfo, setUploadInfo] = useState({
        monetize: "10",
        useExistingSetting: false,
        registerSetting: false,
    })
    const [fileInputRef, setFileInputRef] = useState(null)

    const [uploadedFile, setUploadedFile] = useState(null)
    const [thumbnailUrl, setThumbnailUrl] = useState(null)

    /* Dinh Truong, 3/11/2020, 21:32, delete start */
    // const fromKbToMb = (value) => (value / 1024 / 1024).toFixed(2);
    // const timeValue = (value) => {
    //   let time = "";
    //   const days = Math.floor(value / 1000 / 60 / 60 / 24);
    //   const hours = Math.floor((value / 1000 / 60 / 60) % 24);
    //   const min = Math.floor((value / 1000 / 60) % 60);
    //   const sec = Math.floor((value / 1000) % 60);
    //   const validSymbol = (value) =>
    //     String(value).length > 1 ? value : "0" + value;
    //   time += days ? `${days}:` : "";
    //   time += hours || days ? validSymbol(hours) + ":" : "";
    //   time += validSymbol(min) + ":";
    //   time += validSymbol(sec);
    //   return time;
    // };
    /* Dinh Truong, 3/11/2020, 21:32, delete end */

    const uploadFileAction = ({ file }) => {
        /* Dinh Truong, 3/11/2020, 21:32, delete start */

        // let data = new FormData();
        // data.append("file", file);
        // const currrentDate = new Date();
        // const startTimeUpload = currrentDate.getTime();
        // setSizeFile(fromKbToMb(file ? file.size : 0));
        // const options = {
        //   onUploadProgress: (progressEvent) => {
        //     const { loaded, total } = progressEvent;
        //     const factor = loaded / total;
        //     const percent = Math.floor(factor * 100);
        //     const currentData = new Date();
        //     const currentTime = currentData.getTime();
        //     const rangeTime = currentTime - startTimeUpload;
        //     const speed = loaded / rangeTime;
        //     console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        //     setTimeLeft(timeValue(total / speed - rangeTime));
        //     if (percent <= 100) {
        //       setUploadPercentage(percent);
        //     }
        //   },
        //   cancelToken: cancelUpload.token,
        // };
        /* Dinh Truong,  3/11/2020, 21:32 delete end */

        let fileInfo = {
            type: getFileTypeByExtension(file),
            file: file,
        }

        // Store file info
        setUploadedFile(fileInfo)

        // axios
        //   .post("https://www.mocky.io/v2/5185415ba171ea3a00704eed", data, options)
        //   .then((res) => {
        //     console.log(res)
        //     console.log('Upload successfully');

        //     let fileInfo = {
        //         type: getFileTypeByExtension(file),
        //         file: file
        //     };

        //     // Store file info
        //     setUploadedFile(fileInfo)
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   });
    }

    useEffect(() => {
        // Scroll to top at the first load
        window.scrollTo({ top: 0 })

        if (uploadFile) {
            const isvideo = uploadFile?.file?.name?.match(/\.(avi|mp4|mpeg|ogg)$/i)
            if (isvideo) {
                setfiletype("video")
            }
            uploadFileAction(uploadFile)
            // set default title for video'
            uploadFile.file && setTitle(uploadFile.file.name)
            // Set ref
            const ref = React.createRef()
            setFileInputRef(ref)
        }

        // page model for options like: languages, category ....
        axios.get(`${SERVICE_IP}/api/Youtube/GetEditVideoPageModel`).then((i) => {
            //set something here
            setOptions(i.data)
        })
    }, [])

    const askCancelAction = () => {
        const answer = window.confirm("Are you sure you want to cancel the upload file?")
        if (answer) {
            // Cancel upload
            cancelUpload.cancel()

            // Back to previous page
            history.goBack()
        }
    }

    const onInputChange = (key, value) => {
        let uploadInfoData = { ...uploadInfo }
        uploadInfoData[key] = value

        setUploadInfo(uploadInfoData)
    }

    const saveVideo = (e) => {
        let formData = new FormData()
        formData.append("filepath", uploadedFile.file)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("thumbnail", thumbnailImg)
        formData.append("isMonetize", isMonetize)
        formData.append("language", language)
        formData.append("level", level)
        formData.append("privacy", privacy)
        formData.append("contentType", contentType)
        formData.append("isUploadToYoutube", isUploadToYoutube)
        formData.append("youtubeChannelId", youtubeChannelId)
        formData.append("categories", JSON.stringify(selectedCategories))
        axios
            .post(`${SERVICE_IP}/api/Youtube/UploadVideo`, formData)
            .then((i) => {
                alert("Upload successes!")
                return i
            })
            .catch((e) => {})
    }

    // On upload thumb click
    const handleUploadThumbClick = () => {
        fileInputRef.current.click()
    }

    // Handle upload thumbnail
    const handleImageChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]

        if (file) {
            const extensionarray = file.name.split(".")
            const type = extensionarray[extensionarray.length - 1]
            if (!file.name.match(/\.(doc|docx|pdf|mp4|mp3|html|gif|raw|jpeg|jpg|png)$/i)) {
                return swal(`You have selected ${type} file, please select correct file`)
            }

            // save thumbnai to post data
            setThumbnailImg(file)

            //start preview image
            readImageFIle(e)
        }
        // seterror(null);
    }

    //this function for preview
    const readImageFIle = async (file) => {
        let reader = new FileReader()

        reader.onload = (e) => {
            setThumbnailUrl(e.target.result)
            return e.target.result
        }
        reader.readAsDataURL(file.target.files[0])
    }

    return (
        <div className="edit-main">
            <div className="container">
                <div className="upload-details mt-3">
                    <h6>{"Upload Details"}</h6>

                    {/* 1st november Dinh Truong delete: because not neccessary anymore */}
                    {/* <div>
            {uploadPercentage < 100 && (
            <div className="progress-main d-flex flex-row mt-4 flex-wrap">
              { <div className="img col-xl-2 col-md-12"></div>}
              <div className="data col-xl-12 col-md-12 pl-0 pr-0 pt-4 pt-md-2 pt-xl-0">
                <div className="upload-title">
                  {uploadFile.file ? uploadFile.file.name : "Your File"}
                </div>
                <p className="mb-0 mt-1">{`${sizeFile} MB. ${timeLeft} MIN Remaining`}</p>
                <div className="completed d-flex flex-row align-items-center">
                  <div className="col-9 col-md-11 col-sm-10 pl-0 mb-0">
                    <LinearProgress
                      variant="determinate"
                      value={uploadPercentage}
                      className={classes.root}
                    />
                  </div>
                  <div className="col-3 col-md-1 col-sm-2 mb-0 cancel-upload-btn-container">
                    {cancelUpload && (
                      <IconButton
                        aria-label="delete"
                        className={classes.color}
                        onClick={askCancelAction}
                      >
                        <ClearIcon />
                      </IconButton>
                    )}
                  </div>
                </div>
                <p className="mb-0 mt-1">
                  Your file is still uploading, please keep this page open until
                  it's done.
                </p>
              </div>
            </div>
          )}
          </div>
           */}

                    {/* {uploadPercentage === 100 && uploadedFile &&
                <MediaPreview type={uploadedFile.type}/>
            } */}
                    {uploadedFile && <MediaPreview type={uploadedFile.type} file={uploadedFile.file} />}
                </div>
            </div>

            <div className="details-section mt-4 mb-4">
                <div className="container ">
                    <div className={"file-info-title mt-4"}>
                        <Typography>File Information</Typography>
                    </div>
                    <div className="title mt-4">
                        <p>File Title</p>
                        <TextField
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="outlined-basic"
                            variant="outlined"
                            // placeholder="Rocket League Pro Championship Gameplay (36 characters remaining)"
                        />
                    </div>
                    <div className="about mt-4">
                        <p>Description</p>
                        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="settings-section mt-4 d-flex flex-row flex-wrap">
                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Monetize</p>
                            <FormControl variant="outlined">
                                <Select native defaultValue={isMonetize} value={isMonetize} onChange={(e) => setIsMonetize(e.target.value)}>
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Level</p>
                            <FormControl variant="outlined">
                                <Select defaultValue={level} native value={level} onChange={(e) => setLevel(e.target.value)}>
                                    <option key={0} value={0}>
                                        Select level
                                    </option>
                                    {options
                                        ? options.levels.map((i) => (
                                              <option key={i.id} value={i.id}>
                                                  {i.name}
                                              </option>
                                          ))
                                        : null}

                                    {/* 3nd november Dinh Truong delete start: dummy data is not neccessary anymore */}
                                    {/* <option value={10}>Basic</option>
                  <option value={20}>Bronze</option>
                  <option value={30}>Silver</option>
                  <option value={20}>Gold</option> */}
                                    {/* 3nd november Dinh Truong delete end: dummy data is not neccessary anymore */}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Privacy</p>
                            <FormControl variant="outlined">
                                <Select native defaultValue={privacy} value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                                    <option key={0} value={0}>
                                        Select privacy
                                    </option>
                                    {options &&
                                        options.privacies.map((i) => (
                                            <option key={i.id} value={i.id}>
                                                {i.name}
                                            </option>
                                        ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Playlist</p>
                            <FormControl variant="outlined">
                                <Select
                                    native
                                    inputProps={{
                                        name: "playlist",
                                    }}
                                >
                                    <option value={10}>Not Applicable</option>
                                    <option value={20}>C# Tutorial</option>
                                    <option value={30}>HTML & CSS Basic</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="settings-section mt-4 d-flex flex-row flex-wrap">
                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Contents</p>
                            <FormControl variant="outlined">
                                <Select value={contentType} defaultValue={contentType} native onChange={(e) => setContent(e.target.value)}>
                                    <option key={0} value={0}>
                                        Select content type
                                    </option>
                                    {options &&
                                        options.contents.map((i) => {
                                            return (
                                                <option key={i.id} value={i.id}>
                                                    {i.name}
                                                </option>
                                            )
                                        })}

                                    {/* Dinh Truong, 11/3/2020, 16:23, delete start */}
                                    {/* <option value={10}>For All</option>
                  <option value={20}>For Adult</option>
                  <option value={30}>For Kids</option> */}
                                    {/* Dinh Truong, 11/3/2020, 16:32, delete end */}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                            <p>Language</p>
                            <FormControl variant="outlined">
                                <Select value={language} defaultValue={language} native onChange={(e) => setLanguage(e.target.value)}>
                                    <option key={0} value={0}>
                                        Select language
                                    </option>
                                    {options &&
                                        options.languages.map((i) => {
                                            return (
                                                <option key={i.id} value={i.id}>
                                                    {i.name}
                                                </option>
                                            )
                                        })}
                                </Select>
                            </FormControl>
                        </div>
                        {filetypes === "video" && (
                            <>
                                {" "}
                                <div className="video-questions col-12 px-0 mt-4">
                                    <div className="col-6 pl-0 pr-4 d-flex align-items-center justify-content-between">
                                        <TextField
                                            style={{ maxHeight: "45px" }}
                                            className="col-6"
                                            id="outlined-basic"
                                            variant="outlined"
                                            placeholder="Upload thumbnail"
                                        />
                                        <Button style={{ height: "45px" }} className="col-6 " onClick={handleUploadThumbClick}>
                                            upload thumbnail
                                            <input
                                                className="upload-thumbnail-input"
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={(e) => handleImageChange(e)}
                                            />
                                        </Button>

                                        {thumbnailUrl && (
                                            <div className={"thumbnail-preview"}>
                                                <MediaPreview type={"image"} src={thumbnailUrl} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <p className="mt-4">Upload Youtube</p>
                                <div className="youtube  col-12 px-0 mt-2">
                                    <div className="col-6 pl-0 pr-4 d-flex align-items-center justify-content-between">
                                        <FormControl className="col-6 px-0" variant="outlined">
                                            <Select
                                                native
                                                defaultValue={isUploadToYoutube}
                                                style={{ maxHeight: "45px" }}
                                                inputProps={{
                                                    name: "orientation",
                                                }}
                                                value={isUploadToYoutube}
                                                onChange={(e) => setIsUploadToYoutube(e.target.value)}
                                            >
                                                <option value={false}>No</option>
                                                <option value={true}>Yes</option>
                                            </Select>
                                        </FormControl>

                                        <TextField
                                            style={{ maxHeight: "45px" }}
                                            className="col-6 px-0 channelid"
                                            id="outlined-basic"
                                            variant="outlined"
                                            placeholder="Channel Id"
                                            value={youtubeChannelId}
                                            onChange={(e) => setYoutubeChannelId(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {/* <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">

              <p>Monetize</p>
              <FormControl variant="outlined">
                <Select
                  native
                  inputProps={{
                    name: "Monetize",
                  }}
                >
                  <option value={10}>Yes</option>
                  <option value={20}>2</option>
                  <option value={30}>3</option>
                  <option value={20}>4</option>
                  <option value={30}>5</option>
                </Select>
              </FormControl>
            </div>          */}
                    </div>
                    {isMonetize == true && (
                        <div id={"author-information"} className="settings-section mt-4 d-flex flex-row flex-wrap">
                            <div className={"title mt-4"}>
                                <Typography>Author Information</Typography>
                            </div>
                            <hr />

                            <div className={"col-xl-12 col-md-12 mb-12 mb-xl-0 pl-0"}>
                                <FormGroup aria-label={"position"} row>
                                    <FormControlLabel
                                        control={
                                            <>
                                                <Checkbox
                                                    checked={uploadInfo.useExistingSetting}
                                                    onChange={(event) => {
                                                        onInputChange("useExistingSetting", event.target.checked)
                                                    }}
                                                    name={"Use existing setting"}
                                                />
                                            </>
                                        }
                                        labelPlacement={"start"}
                                        label={"Use existing setting"}
                                    />
                                    <Typography className={"checkbox-description"}>
                                        <span>Please, leave textbox as empty if not applicable</span>
                                    </Typography>
                                </FormGroup>
                            </div>

                            {
                                <>
                                    <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                                        <p>Writter</p>
                                        <FormControl variant="outlined">
                                            {uploadInfo.useExistingSetting === false && (
                                                <TextField id="outlined-basic" variant="outlined" placeholder="Writer" />
                                            )}
                                            {uploadInfo.useExistingSetting === true && (
                                                <Select
                                                    native
                                                    style={{ maxHeight: "45px" }}
                                                    inputProps={{
                                                        name: "orientation",
                                                    }}
                                                >
                                                    <option value={10}>Writter 1</option>
                                                    <option value={20}>Writter 2</option>
                                                </Select>
                                            )}
                                        </FormControl>
                                    </div>
                                    <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                                        <p>Picture/Photo</p>
                                        <FormControl variant="outlined">
                                            {uploadInfo.useExistingSetting === false && (
                                                <TextField id="outlined-basic" variant="outlined" placeholder="Picture/Photo" />
                                            )}
                                            {uploadInfo.useExistingSetting === true && (
                                                <Select
                                                    native
                                                    style={{ maxHeight: "45px" }}
                                                    inputProps={{
                                                        name: "orientation",
                                                    }}
                                                >
                                                    <option value={10}>Picture 1</option>
                                                    <option value={20}>Picture 2</option>
                                                </Select>
                                            )}
                                        </FormControl>
                                    </div>
                                    <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                                        <p>Publisher</p>
                                        <FormControl variant="outlined">
                                            {uploadInfo.useExistingSetting === false && (
                                                <TextField id="outlined-basic" variant="outlined" placeholder="Publisher" />
                                            )}
                                            {uploadInfo.useExistingSetting === true && (
                                                <Select
                                                    native
                                                    style={{ maxHeight: "45px" }}
                                                    inputProps={{
                                                        name: "orientation",
                                                    }}
                                                >
                                                    <option value={10}>Publisher 1</option>
                                                    <option value={20}>Publisher 2</option>
                                                </Select>
                                            )}
                                        </FormControl>
                                    </div>
                                    <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
                                        <p>Publisher</p>
                                        <FormControl variant="outlined">
                                            {uploadInfo.useExistingSetting === false && (
                                                <TextField id="outlined-basic" variant="outlined" placeholder="Publisher" />
                                            )}
                                            {uploadInfo.useExistingSetting === true && (
                                                <Select
                                                    native
                                                    style={{ maxHeight: "45px" }}
                                                    inputProps={{
                                                        name: "orientation",
                                                    }}
                                                >
                                                    <option value={10}>Publisher 1</option>
                                                    <option value={20}>Publisher 2</option>
                                                </Select>
                                            )}
                                        </FormControl>
                                    </div>
                                </>
                            }

                            {
                                <div className={"col-xl-12 col-md-12 mb-12 mb-xl-0 pl-0"}>
                                    <FormGroup aria-label={"position"}>
                                        <FormControlLabel
                                            control={
                                                <>
                                                    <Checkbox
                                                        checked={uploadInfo.registerSetting}
                                                        onChange={(event) => {
                                                            onInputChange("registerSetting", event.target.checked)
                                                        }}
                                                        name={"registerSetting"}
                                                    />
                                                </>
                                            }
                                            labelPlacement={"start"}
                                            label={"Register this setting?"}
                                        />
                                    </FormGroup>
                                </div>
                            }
                        </div>
                    )}

                    <div className="tags-main d-flex flex-row mt-4 flex-wrap">
                        {/* <div className="col-xl-5 col-md-12 mb-4 mb-xl-0 pl-0">
              <p>Tags (16 Tags Remaining)</p>
              <TextField
                id="outlined-basic1"
                variant="outlined"
                placeholder="Gaming, PS4"
              />
            </div>
            <div className="col-xl-4 col-md-12 mb-4 mb-xl-0 pl-0">
              <p>U</p>
              <TextField
                id="outlined-basic2"
                variant="outlined"
                placeholder="Nathan Drake,"
              />
            </div>
            <div className="col-xl-3 col-md-12 mb-4 mb-xl-0 pl-0">
              <p>Language in Video (Optional)</p>
              <FormControl variant="outlined">
                <Select
                  native
                  inputProps={{
                    name: "Language",
                  }}
                >
                  <option value={10}>English</option>
                  <option value={20}>2</option>
                  <option value={30}>3</option>
                  <option value={20}>4</option>
                  <option value={30}>5</option>
                </Select>
              </FormControl>
            </div> */}
                    </div>
                    <div className="pl-0">
                        {/* Dinh Truong, 11/3/2020, 12:32, delete start */}
                        {/* <CategorySelection /> */}
                        {/* Dinh Truong, 11/3/2020, 12:32, delete end */}

                        {options && (
                            <CategorySelection
                                maxSelect={6}
                                selecteds={selectedCategories}
                                options={options.categories}
                                onChange={(e) => {
                                    let categoryId = e.target.name
                                    //remove from selected list if existed
                                    if (selectedCategories.some((i) => i == categoryId)) {
                                        let newCat = selectedCategories.filter((i) => i != categoryId)
                                        setSelectedCategories(newCat)
                                    } else {
                                        // else, add to selected list
                                        setSelectedCategories([...selectedCategories, categoryId])
                                    }
                                }}
                            />
                        )}
                    </div>
                    <div className="save d-flex flex-row justify-content-center mt-5">
                        <Button onClick={saveVideo}>Save</Button>
                    </div>
                    <BottomPrivacy />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uploadFile: state.videoUpload,
    }
}

export default connect(mapStateToProps)(VideoEdit)

const BottomPrivacy = () => {
    return (
        <div className="terms mt-5">
            By submitting your Files to circle, you acknowledge that you agree to circle's{" "}
            <span className="terms-text">Terms of Service</span> and <span className="terms-text">Community Guidelines</span>. Please be
            sure not to violate others' copyright or privacy rights. Learn more
        </div>
    )
}
