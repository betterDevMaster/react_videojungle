import React, { Component, Fragment } from "react"
import Rating from "@material-ui/lab/Rating"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import StarIcon from "@material-ui/icons/Star"
import WarningIcon from "@material-ui/icons/Warning"
import Alert from "../../../components/Alert/Alert"

import "./styles.scss"

class BlogReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenAlert: false,
            isEvaluating: true,
            isLoggedIn: true,
            rating: 0,
            reviews: "",
            alertContent: "",
        }
    }

    handleAlert = () => {
        this.setState({ isOpenAlert: !this.state.isOpenAlert })
    }
    handleChange = (e) => {
        const { value } = e.target
        if (!this.state.isLoggedIn) {
            this.handleAlert()
            return
        }

        this.setState({ reviews: value })

        //this.props.onReviewChange(value);
    }

    handleChangeRating = (value) => {
        this.setState({ rating: value })
    }

    submitReview = () => {
        const { rating, reviews } = this.state

        if (!reviews || reviews === "") {
            // Set error message
            this.setState({ alertContent: "You need to write contents" })

            // Show alert
            this.handleAlert()
        } else {
            this.props.onReviewChange({ rating, reviews })

            // Reset input value
            this.setState({ rating: 0, reviews: "" })
        }
    }

    render() {
        const { isOpenAlert, isEvaluating, rating, reviews, alertContent } = this.state
        const { saveReview } = this.props
        return (
            <div id="BlogReview">
                <div className="blog-review-main">
                    {isEvaluating && (
                        <div className="review-left">
                            <div className="left-title">구매자 별점</div>
                            <div className="left-ratting-div">
                                <div className="ratting-score">4.5</div>
                                <Rating name="size-large-left" defaultValue={4.5} size="large" />
                            </div>
                            <div className="ratting-info">
                                <div className="ratting-list">
                                    <div>
                                        <StarIcon fontSize="inherit" />
                                    </div>
                                    <div className="ratting-number">5</div>
                                    <LinearProgress variant="determinate" value={80} />
                                </div>
                                <div className="ratting-list">
                                    <div>
                                        <StarIcon fontSize="inherit" />
                                    </div>
                                    <div className="ratting-number">4</div>
                                    <LinearProgress variant="determinate" value={70} />
                                </div>
                                <div className="ratting-list">
                                    <div>
                                        <StarIcon fontSize="inherit" />
                                    </div>
                                    <div className="ratting-number">3</div>
                                    <LinearProgress variant="determinate" value={50} />
                                </div>
                                <div className="ratting-list">
                                    <div>
                                        <StarIcon fontSize="inherit" />
                                    </div>
                                    <div className="ratting-number">2</div>
                                    <LinearProgress variant="determinate" value={30} />
                                </div>
                                <div className="ratting-list">
                                    <div>
                                        <StarIcon fontSize="inherit" />
                                    </div>
                                    <div className="ratting-number">1</div>
                                    <LinearProgress variant="determinate" value={10} />
                                </div>
                            </div>
                            <div className="total-rate">
                                <strong>20,329</strong>명이 평가함
                            </div>
                        </div>
                    )}
                    <div className="review-right">
                        {isEvaluating && (
                            <Fragment>
                                <div className="review-heading"> 이 블로그를 평가해주세요! </div>
                                <div className="right-ratting-div">
                                    <Rating
                                        name="size-large"
                                        value={rating}
                                        size="large"
                                        onChange={(e, value) => {
                                            this.handleChangeRating(value)
                                        }}
                                    />
                                </div>
                            </Fragment>
                        )}
                        {isOpenAlert && (
                            <Alert isOpen={isOpenAlert} title={"junglebooks.com"} infoText={alertContent} handleAction={this.handleAlert} />
                        )}
                        <div className="review-text-area">
                            <textarea
                                onChange={this.handleChange}
                                name="content"
                                value={reviews}
                                title="리뷰 입력"
                                placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
                            />
                        </div>
                        <div className="bottom-div">
                            <div className="bottom-left">
                                <Button variant="contained" variant="outlined">
                                    <WarningIcon fontSize="inherit" />
                                    리뷰 작성 유의사항
                                </Button>
                            </div>
                            <div className="bottom-right">
                                <FormControlLabel
                                    value="1"
                                    className="checkbox-style"
                                    control={<Checkbox color="primary" />}
                                    label="스포일러가 있습니다."
                                    labelPlacement="end"
                                    onClick={saveReview}
                                />
                                <Button variant="contained" className="right-buttom-style" variant="outlined" onClick={this.submitReview}>
                                    <WarningIcon fontSize="inherit" /> 리뷰 남기기{" "}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogReview
