import React, { useState, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import Button from "@material-ui/core/Button"
import Rating from "@material-ui/lab/Rating"
import CommentReplyInput from "../CommentReplyInput"

const useStyles = (theme) => ({
    commentTab: {
        margin: "0 16px -18px 0",
        borderBottom: "2px solid black",
    },
    main: {
        marginTop: "3rem",
        marginBottom: "8rem",
        // marginRight: 126,
        // marginLeft: 126
    },
    commentReply: {
        marginTop: "3rem",
        display: "flex",
    },
    commentRating: {
        width: "20%",
        fontSize: "12px",
    },
    commentsBtn: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "1rem",
    },
    commentList: {
        background: "#F8FBFE",
        marginTop: "1rem",
        fontSize: "13px",
        padding: "7px 20px 12px 20px",
    },
    replyActionBtn: {
        color: "#000",
    },
    commentText: {
        color: "#1d1a1a",
    },
})

function BlogComment(props) {
    const { classes, ratingAndReviews, handleSaveComment, likeReview } = props

    const [state, setState] = useState({
        isWriteComment: false,
        commentValue: "",
        currentReviewIndex: null,
    })

    function handleComment(index) {
        // Click on other review comments
        if (index !== state.currentReviewIndex) {
            setState({ ...state, isWriteComment: true, currentReviewIndex: index })
        } else {
            // Togger show write comment
            setState({ ...state, isWriteComment: !state.isWriteComment, currentReviewIndex: index })
        }

        // Automatically focus on comoment field
        setTimeout(() => {
            let focusElement = document.getElementById(`comment-${index}`)

            if (focusElement) {
                focusElement.focus()
            }
        })
    }

    // on change comments value
    function handleCommentChange(e) {
        const { value } = e.target
        setState({ ...state, commentValue: value })
    }

    // we will use this function to save comments
    function handleCommentSave(index) {
        // here we will call api to save comment
        //handleComment();
        handleSaveComment(index, state.commentValue)

        // Toggle show/hide comment
        handleComment()

        // CLear value
        setState({ ...state, commentValue: "" })
    }
    return (
        <div className={classes.main}>
            <div style={{ display: "flex" }}>
                <div className={classes.commentTab}>논평 1345</div>
                <div>좋아하는 123</div>
            </div>
            <hr />
            {ratingAndReviews.map((item, index) => {
                return (
                    <div className={classes.commentReply} key={index}>
                        <div className={classes.commentRating}>
                            <div>
                                <Rating name="size-medium" defaultValue={item.rating} />
                            </div>
                            <div>{item.name}</div>
                            <div>{item.date}</div>
                        </div>
                        <div style={{ width: "80%" }}>
                            <div>{item.reviews}</div>
                            <div className={classes.commentsBtn}>
                                <div style={{ marginRight: "1rem" }}>
                                    <Button
                                        className={classes.replyActionBtn}
                                        onClick={() => {
                                            handleComment(index)
                                        }}
                                        variant="contained"
                                        variant="outlined"
                                        startIcon={<ChatBubbleRoundedIcon fontSize="inherit" />}
                                    >
                                        댓글 {item.comments.length}
                                    </Button>
                                </div>
                                <Button
                                    className={classes.replyActionBtn}
                                    onClick={() => {
                                        likeReview(index)
                                    }}
                                    variant="contained"
                                    variant="outlined"
                                    startIcon={<ThumbUpAltIcon fontSize="inherit" />}
                                >
                                    {item.like}
                                </Button>
                            </div>
                            <hr />
                            {state.isWriteComment && state.currentReviewIndex === index && (
                                <div className={classes.commentList}>
                                    {item.comments.map((comment) => {
                                        return (
                                            <Fragment key={comment.id}>
                                                <div className={classes.commentText}>{comment.commentText}</div>
                                                <br />
                                                <div className={classes.commentText}>{`${comment.name}*** ${comment.date}`}</div>
                                                <hr />
                                            </Fragment>
                                        )
                                    })}
                                    <CommentReplyInput
                                        id={`comment-${index}`}
                                        commentValue={state.commentValue}
                                        handleCommentSave={() => {
                                            handleCommentSave(index)
                                        }}
                                        handleCommentChange={handleCommentChange}
                                        isTheLastOne={index === ratingAndReviews.length - 1}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default withStyles(useStyles)(BlogComment)
