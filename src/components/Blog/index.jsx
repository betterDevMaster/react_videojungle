import { withStyles } from "@material-ui/core/styles"
import React, { Component } from "react"
import moment from "moment"
import clsx from "clsx"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import BlogReview from "./BlogReview/BlogReview.jsx"
import BlogComment from "./BlogComment"

import "./styles.scss"

const drawerWidth = 0
const useStyles = (theme) => ({
    root: {
        //display: "flex",
    },
    treeViewMain: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
    treeLabelRoot: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0.5, 0),
    },
    treeLabelIcon: {
        marginRight: theme.spacing(1),
    },

    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: "#000",
    },
    toolBar: {
        background: "#eee",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    blogPost: {
        backgroundColor: "inherit",
    },
})

class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            postList: [
                {
                    notebookName: "Parent 1",
                    notebookPostList: [
                        {
                            notebookPostTitle: "Level 1",
                        },
                        {
                            notebookPostTitle: "Level 2",
                        },
                    ],
                },
                {
                    notebookName: "Parent 2",
                    notebookPostList: [
                        {
                            notebookPostTitle: "Level 1",
                        },
                        {
                            notebookPostTitle: "Level 2",
                        },
                    ],
                },
            ],
            selectedNotebook: null,
            selectedPost: null,
            isMainCollepsActive: false,
            expandedTree: [],
            selectedTree: [],
            ratingAndReviews: [
                {
                    id: 1,
                    rating: 5,
                    reviews:
                        " 그래픽, 인쇄 및 출판산업 레이아웃 및 시각적 모형미리보기 용. 로렘\n" +
                        "                          ipsum은 일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은\n" +
                        "                          일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은\n" +
                        "                          일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은\n" +
                        "                          일반적으로사용되는 자리 표시 자 텍스트입니다. 그래픽, 인쇄 및 출판\n" +
                        "                          모형 미리보기",
                    like: 3,
                    date: moment(new Date()).format("YYYY.MM.DD"),
                    name: "dms***",
                    comments: [
                        {
                            id: 1,
                            name: "yes",
                            date: moment(new Date()).format("YYYY.MM.DD"),
                            commentText:
                                "그래픽 인쇄 및 출판산업 레이아웃 및 시각적 모형미리보기 용. 로렘 ipsum은 일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은일반적으로사용되는 자리 모형미리보기 용. 로렘  ipsum은일반적으로사용되는 자리 표시 자 텍스트입니다. 그래픽, 인쇄 및 출판 모형 미리보기",
                        },
                        {
                            id: 2,
                            name: "yeo",
                            date: moment(new Date()).format("YYYY.MM.DD"),
                            commentText: "그래픽 인쇄 및 출판산업",
                        },
                    ],
                },
            ],
        }
    }
    handleDrawerHandle = (isOpen) => {
        this.setState({
            open: isOpen,
        })
    }
    componentDidMount() {
        let postList = localStorage.getItem("postList") ? JSON.parse(localStorage.getItem("postList")) : this.state.postList

        // Expend all level
        if (postList && postList.length > 0) {
            let expandedTree = ["parent-0"]
            postList.map((child, index1) => {
                expandedTree.push(`child-${index1}`)
            })

            this.setState({
                postList: postList,
                expandedTree,
            })
        }
    }
    onNotebookSelect = (curruntSelectedNotebook) => {
        let { selectedNotebook, isMainCollepsActive } = this.state
        if ((selectedNotebook && selectedNotebook.notebookId) === curruntSelectedNotebook.notebookId) {
            this.setState({
                selectedNotebook: curruntSelectedNotebook,
                isMainCollepsActive: !isMainCollepsActive,
            })
        } else {
            this.setState({
                selectedNotebook: curruntSelectedNotebook,
            })
        }
    }
    onPostSelect = (selectedPost) => {
        this.setState({
            selectedPost: selectedPost,
        })
    }

    handleToggle = (event, nodeIds) => {
        this.setState({
            expandedTree: nodeIds,
        })
    }

    handleSelect = (event, nodeIds) => {
        this.setState({
            selectedTree: nodeIds,
        })
    }
    onReviewChange = (value) => {
        //console.log("on change", value);
        let currentRatingReviews = this.state.ratingAndReviews
        currentRatingReviews.push({
            id: currentRatingReviews.length + 1,
            rating: value.rating,
            reviews: value.reviews,
            like: 0,
            date: moment(new Date()).format("YYYY.MM.DD"),
            name: "minh***",
            comments: [],
        })

        // We can call API here

        this.setState({
            ...this.state,
            ratingAndReviews: currentRatingReviews,
        })
    }

    // we will call api here.
    saveReview = () => {
        console.log("save review")
    }

    // Save comment and call API
    handleSaveComment = (index, value) => {
        console.log(index, value)
        let currentRatingReviews = this.state.ratingAndReviews

        currentRatingReviews[index].comments.push({
            id: currentRatingReviews[0].comments + 1,
            name: "minh**",
            date: moment(new Date()).format("YYYY.MM.DD"),
            commentText: value,
        })

        // We can call API here

        this.setState({
            ...this.state,
            ratingAndReviews: currentRatingReviews,
        })
    }

    // Like review and call API
    likeReview = (index) => {
        let currentRatingReviews = this.state.ratingAndReviews
        currentRatingReviews[index].like += 1

        // We can call API here

        this.setState({
            ...this.state,
            ratingAndReviews: currentRatingReviews,
        })
    }

    render() {
        const { classes } = this.props
        let {
            open,
            postList,
            selectedNotebook,
            selectedPost,
            isMainCollepsActive,
            slected,
            expandedTree,
            selectedTree,
            ratingAndReviews,
        } = this.state

        let selctedPostDate
        if (selectedPost) {
            var date = new Date(selectedPost.notebookPostUpdatedDate)
            selctedPostDate = date.toLocaleDateString()
        }
        return (
            <div id="BlogPost">
                <div className="rsg_title01">
                    <h3 className="title_text">리뷰</h3>
                </div>

                <div className={classes.root}>
                    <CssBaseline />
                    <main className={clsx(classes.content, { [classes.contentShift]: open })}>
                        <div className="body-rigth">
                            <div className="body-main">
                                <BlogReview onReviewChange={this.onReviewChange} saveReview={this.saveReview} />
                                <BlogComment
                                    ratingAndReviews={ratingAndReviews}
                                    handleSaveComment={this.handleSaveComment}
                                    likeReview={this.likeReview}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(BlogPost)
